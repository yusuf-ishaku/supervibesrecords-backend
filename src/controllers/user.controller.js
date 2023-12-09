/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import { comparePassword, hashPassword, signToken } from '../utils/user.util';



/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const createUser = async (req, res, next) => {
    try {
        let userExists = await UserService.getUserByEmail(req.body.email);
        if(!userExists) {
            let churnData = await hashPassword(req.body)
            let data = await UserService.createUser(churnData);
            return res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: {
                    username: data.username,
                    password: data.password,
                    id: data.id
                },
                message: 'User created successfully'
            })
        }
        return res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            data: '',
            message: 'User already exists, login'
        })
    }
    catch(error) {
        next(error);
    }
}

/**
 * Controller to login a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const loginUser = async (req, res, next) => {
    try {
        let userExists = await UserService.getUserByEmail(req.body.email);
        if(!userExists) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                code: HttpStatus.BAD_REQUEST,
                data: '',
                // eslint-disable-next-line max-len
                message: 'User does not exist, ask developer for more information'
            })
        }
        // eslint-disable-next-line max-len
        let allowAccess = await comparePassword(req.body.password, userExists.password);
        console.log(allowAccess)
        let token = await signToken(userExists);
        if(allowAccess) {
            return res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: {
                    token
                }
            })
        }
        return res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            data: '',
            message: 'Username or password is incorrect'
        })
    } catch(error) {
        next(error)
    }
}
/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



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
            let data = await UserService.createUser(req.body);
            return res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: data,
                message: 'User created successfully'
            })
        }
    }
    catch(error) {
        next(error);
    }
}
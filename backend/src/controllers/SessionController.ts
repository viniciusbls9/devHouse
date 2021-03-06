import { Request, Response } from 'express';

import User from '../models/User';

export default class SessionController {
    async store(req: Request, res: Response) {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ name, email });
        }
        return res.json(user);
    }
}
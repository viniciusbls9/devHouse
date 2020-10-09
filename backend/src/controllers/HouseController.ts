import { Request, Response } from 'express';
import User from '../models/User';
import * as Yup from 'yup';

import House from '../models/House';

export default class HouseController {

    async index(req: Request, res: Response) {
        const { status } = req.query;

        const houses = await House.find({ status });

        return res.json(houses);
    }

    async store(req: Request, res: Response) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.boolean().required(),
        });
        

        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação' });
        }

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        });

        return res.json(house);
    }

    async update(req: Request, res: Response) {

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.boolean().required(),
        });

        const { filename } = req.file;
        const { house_id } = req.params;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;
        
        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação' });
        }
        
        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);


        if(String(user._id) !== String(houses.user)) {
            return res.status(401).json({ error: 'Não Autorizado' });
        }

        await House.updateOne({ _id: house_id }, {
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        });

        return res.send();
    }

    async destroy(req: Request, res: Response) {
        const { house_id } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        if(String(user._id) !== String(houses.user)) {
            return res.status(401).json({ error: 'Não Autorizado' });
        }

        await House.findByIdAndDelete({ _id: house_id });

        return res.json({ message: 'Excluida' });

    }
}
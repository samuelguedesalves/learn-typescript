import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [
    {name: "samuel", email: "samuel@gmail.com"},
    {name: "gabriel", email: "gabriel@gmail.com"}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },
    
    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            {name: 'samuel', email: 'samuel@gmail.com'},
            {subject: 'Aprendendo typescript', body: 'Olá mundo!' }
        )

        return res.send();
    }
};
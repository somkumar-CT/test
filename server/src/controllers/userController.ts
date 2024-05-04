import { Request, Response } from 'express';

export const UserController = {
  LoginUser: (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);

    res.send('hello from user login endpoint');
  },

  RegisterUser: (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);

    res.send('hello from user login endpoint');
  },
};

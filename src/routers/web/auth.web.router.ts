import { Router } from 'express';

const webAuthRouter = Router();

webAuthRouter.get('/login', (req, res) => {
    return res.render('pages/auth/login', {
        title: 'Login',
        hideNavbar: true
    });
});

webAuthRouter.get('/register', (req, res) => {
    return res.render('pages/auth/register', {
        title: 'Register',
        hideNavbar: true
    });
});

export default webAuthRouter;

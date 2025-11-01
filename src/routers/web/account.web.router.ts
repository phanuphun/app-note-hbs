import { Router } from 'express';
import { getUserById } from '../../services/user.service';

const webAccountRouter = Router();

webAccountRouter.get('/account/:id', async (req, res) => {
    // const { id } = req.params;
    // const user = await getUserById(id);
    // return res.render('pages/account/account', {
    //     title: 'Account',
    //     hideNavbar: false,
    //     user: user
    // });
});

export default webAccountRouter;
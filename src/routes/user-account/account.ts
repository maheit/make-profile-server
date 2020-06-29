import * as express from 'express';
import { Request, Response } from 'express';

import * as firebase from 'firebase-admin';
import CollectionsList from '../../db/firebase/db-list';
import { userIF } from '../../interfaces/firebase/models/user';
import { ErrorIF } from '../../interfaces/common';
import ServerErrorMessages from '../../consts/server/error-messages';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    let user: userIF | undefined;
    const isError: ErrorIF = {
        status: false,
    };
    try {
        const userRef = await firebase
            .firestore()
            .collection(CollectionsList.users)
            .doc(userId)
            .get();
        if (userRef.exists) {
            user = userRef.data() as userIF;
            console.log(JSON.stringify(user));
        }
    } catch (exception) {
        isError.status = true;
        isError.message = exception;
    }
    if (isError.status) {
        return res.send({ status: false, error: isError.message });
    } else if (!user) {
        return res.send({
            status: false,
            error: ServerErrorMessages.NOT_FOUND,
        });
    }
    return res.send({ status: true, data: user });
});

export default router;

import * as express from 'express';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';

const router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
    res.send('Pong');
});

router.get('/', async (req: Request, res: Response) => {
    const dbUser = await firebase.firestore();
    dbUser
        .collection('users')
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    res.send('Success');
});

export default router;

import * as admin from 'firebase-admin';

export default (): void => {
    admin.initializeApp({
        // credential: admin.credential.cert(serviceAccount),
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://makeprofile-1ae97.firebaseio.com',
    });
};

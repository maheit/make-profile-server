import * as firebase from 'firebase-admin';

export interface userIF {
    name: string;
    email: string;
    googleId: string;
    photos: string[];
    gender: string;
    dob: firebase.firestore.Timestamp;
    createdDate: firebase.firestore.Timestamp;
    updatedDate: firebase.firestore.Timestamp;
    timeZone: string;
    timeZoneOffset: number;
}

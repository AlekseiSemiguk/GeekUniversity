import { db, auth } from '../firebase';

export const profileApi = {
    updateUserName: (newName) => {
        return db.ref(`profile`).child(auth.currentUser.uid).child('username').set(newName)
    },

    getUserName: (callback) => {
        db
            .ref('profile')
            .child(auth.currentUser.uid)
            .child('username')
            .on('value', (snapshot) => {
                const newName = snapshot.val();
                callback(newName)
            })
    },
}
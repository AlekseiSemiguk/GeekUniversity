import { db } from '../firebase';

export const messagesApi = {
    create: (chatId, author, content) => {
        return db.ref('messages').child(chatId).push({
            author,
            content
        })
    },

    getList: (chatId, callback) => {
        db
            .ref('messages')
            .child(chatId)
            .on('value', (snapshot) => {
                const messages = []
                snapshot.forEach((snap) => {
                    messages.push({
                        id: snap.key,
                        ...snap.val(),
                    })
                })
                callback(chatId, messages)
            })
    },
}
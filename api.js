import { AsyncStorage } from 'react-native';

let users = [];
export function init() {
    AsyncStorage.getItem('users')
        .then(result => {
            if (result)
                users = JSON.stringify(result);
        });
}

export function getUser(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users.find(u => u.email === email));
        }, 1000);
    });
}
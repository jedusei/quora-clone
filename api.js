import { AsyncStorage } from 'react-native';

let users = [];
export function init() {
    AsyncStorage.getItem('users')
        .then(result => {
            if (result)
                users = JSON.parse(result);
        });
}

export function getUser(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users.find(u => u.email === email));
        }, 1000);
    });
}

export function addUser(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            users.push(user);
            AsyncStorage.setItem('users', JSON.stringify(users));
            resolve();
        }, 1000);
    });
}
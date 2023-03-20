export function convertResponseCode(code) {
    let message = 'Что-то пошло не так';
    switch(code) {
        case 'auth/wrong-password':
            message = 'Неверный пароль';
            break;
        case 'auth/user-not-found':
            message = 'Админ с такой почтой не существует';
            break;
    }

    return message;
}

export function convertResponse(responseValue) {
    const items = [];

    for (let [key, value] of Object.entries(responseValue)) {
        items.push({
            ...value,
            id: key
        });
    }

    return items;
}
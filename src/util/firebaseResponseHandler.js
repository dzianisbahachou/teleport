export function convertResponseErrorMessage(code) {
    let message = 'Что-то пошло не так';
    switch(code) {
        case 'auth/wrong-password':
            message = 'Неверный пароль';
            break;
        case 'auth/user-not-found':
            message = 'Админ с такой почтой не существует';
            break;
        case 'Permission denied':
            message = 'Вы не авторизованы';
            break;
        case 'snapshot/animators-doesnot-exist':
            message = 'Не удалось загрузить аниматоров';
            break;
        case 'snapshot/shows-doesnot-exist':
            message = 'Не удалось загрузить Шоу программы';
            break;
        case 'snapshot/additional-doesnot-exist':
            message = 'Не удалось загрузить Дополнительные услуги';
            break;
        case 'snapshot/comments-doesnot-exist':
            message = 'Не удалось загрузить коментарии';
            break;
        case 'snapshot/event-details-doesnot-exist':
            message = 'Не удалось загрузить информацию';
            break;
        case 'snapshot/online-doesnot-exist':
            message = 'Не удалось загрузить информацию об Онлайн праздниках';
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

export function convertEventType(type) {
    let event = 'Чудо праздник';
    switch(type) {
        case 'spiderMan':
            event = 'Человек Паук';
            break;
        case 'clown':
            event = 'Клоун';
            break;
        case 'mickeyMouse':
            event = 'Микки Маус';
            break;
        case 'sky':
            event = 'Скай';
            break;
        case 'bumblebee':
            event = 'Бамблбии';
            break;
        case 'pion':
            event = 'Феечка Пион';
            break;
        case 'gvenStacy':
            event = 'Гвен Стейси';
            break;
        case 'ironMan':
            event = 'Железный Человек';
            break;
        case 'online':
            event = 'Онлайн праздник';
            break;
    }

    return event;
}

export function convertEventTypeResponse(responseValue) {
    return Object.values(responseValue).map(item => item.title);
}
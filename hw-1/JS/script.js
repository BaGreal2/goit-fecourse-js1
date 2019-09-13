const adminLogin = 'admin';

const adminPassword = 'm4ngo1zh4ackz0r';

let inquiry1 = prompt('Введите свой логин:');

const canceledByUser = "Отменено пользователем!";
if (inquiry1 === adminLogin) {
    let inquiry2 = prompt('Введите пароль:')
    if (inquiry2 === adminPassword) {
        alert('Добро пожаловать!')
        
    } else if (inquiry1 === null) {
        alert(canceledByUser)
    } else {
        alert('Доступ запрещен, неверный пароль!')
    }
} else if (inquiry1 === null) {
    alert(canceledByUser)
} else {
    alert('Доступ запрещен, неверный логин!')
}
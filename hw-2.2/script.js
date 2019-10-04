const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attempts = 3;

let attemptsActive = 1;

let attemptsLeft = 3;

do {
    attemptsActive++;
    let input = prompt(`Введите пароль...`)
    attemptsLeft -= 1;
    for (let i = 0; i <= passwords.length; i++) {
        if (input === passwords[i]) {
            alert('Добро Пожаловать!');
            break;
        } else if (input === null) {
            alert('Отменено пользователем');
            break;
        } else if (input !== passwords[i] && attemptsLeft !== 0){
            alert('Неверный пароль, у Вас осталось ' + attemptsLeft + ' попыток!');
            break;
        } else if (attemptsLeft === 0) {
            alert('У вас закончились попытки, Ваш аккаунт заблокирован!')
            break;
        }
    };
} while (attemptsActive <= attempts);
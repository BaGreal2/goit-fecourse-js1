const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const input = prompt('your login, please...')

const isLoginValid = function(login) {
    if (input.length >= 4 && input.length <= 16) {
        return true;
    } else {
        return false;
    }
};


const isLoginUnique = function(allLogins, login) {
    if (logins.indexOf( input ) === -1) {
        return true;
    } else {
        return false;
    }
};


const addLogin = function(allLogins, login) {
    if (isLoginValid(input)) {
        if(isLoginUnique(logins, input)) {
             logins.push(input);
             let succes = 'Логин успешно добавлен!';
             return succes;
        } else {
            let error = 'Такой логин уже используется!';
            return error;
        }
    } else if(isLoginValid(input) === false) {
        let error = 'Ошибка! Логин должен быть от 4 до 16 символов!'
        return error;
    }
};

alert(addLogin(logins, input))
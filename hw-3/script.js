const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const input = prompt('your login, please...')

const isLoginValid = function(login) {
    if (input.length >= 4 && input.length <= 16) {
        let validation1 = true;
        return validation1;
    } else {
        let validation1 = false;
        return validation1;
    }
};


const isLoginUnique = function(allLogins, login) {
    if (logins.indexOf( input ) === -1) {
        let validation2 = true;
        return validation2;
    } else {
        let validation2 = false;
        return validation2;
    }
};


const addLogin = function(allLogins, login) {
    if (isLoginValid(input) === true) {
        if(isLoginUnique(logins, input) === true) {
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
const sharm = 15;

const hurgada = 25;

const taba = 6;

let numberOfPlaces = prompt('Здравствуйте! Какое количество мест вам требуеться для вашей поездки?')
if (numberOfPlaces <= sharm && numberOfPlaces > taba && numberOfPlaces < 16 && numberOfPlaces > 0) {
    let confirmUser = confirm(`Согласны ли Вы быть в группе sharm?`)
    if (confirmUser === true) {
        alert('Приятного путешествия в группе sharm!')
    } else if (confirmUser === false) {
        alert('Нам очень жаль, приходите еще!')
    }
} else if (numberOfPlaces <= taba && numberOfPlaces > 0) {
        let confirmUser = confirm(`Согласны ли Вы быть в группе taba?`)
        if (confirmUser === true) {
            alert('Приятного путешествия в группе taba!')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }
} else if (numberOfPlaces <= hurgada && numberOfPlaces > sharm && numberOfPlaces > 0) {
    let confirmUser = confirm(`Согласны ли Вы быть в группе hurgada?`)
    if (confirmUser === true) {
        alert('Приятного путешествия в группе hurgada!')
    } else {
        alert('Нам очень жаль, приходите еще!')
    }
} else if (numberOfPlaces === false) {
    alert('Нам очень жаль, приходите еще!')
} else if (numberOfPlaces >= 26) {
    alert('Извините, столько мест нет ни в одной группе!')
} else if (numberOfPlaces <= 0) {
    alert('Ошибка ввода')
    } else {
    alert('Ошибка ввода')
}
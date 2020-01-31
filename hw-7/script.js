'use strict'
//----------------------------------------------------------------------------------------------------------------------
const refs = {
    categories: document.getElementById('#categories'),
    li: document.querySelectorAll('.item'),
    empty: document.querySelector('#ingredients'),
    gallery: document.getElementById('gallery'),
    counter:  document.getElementById('#counter'),
    value: document.querySelector('.value'),
    button1: document.querySelector('.button1'),
    button2: document.querySelector('.button2'),
    input: document.querySelector('.name-input'),
    output: document.querySelector('.name-output'),
    input6: document.getElementById('validation-input'),
    inputRange: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
    boxesControl: document.getElementById('controls'),
    boxesDraw: document.getElementById('boxes')
}
//----------------------------------------------------------------------------------------------------------------------
console.log(`В списке ${refs.li.length} категории.`)
console.log(`
1: Категория - ${refs.li[0].children[0].textContent}, Количество элементов - ${refs.li[0].children[1].children.length}
2: Категория - ${refs.li[1].children[0].textContent}, Количество элементов - ${refs.li[1].children[1].children.length}
3: Категория - ${refs.li[2].children[0].textContent}, Количество элементов - ${refs.li[2].children[1].children.length}
`)
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsDOM = ingredients.map(elem => `<li>${elem}</li>`).join(' ')
refs.empty.insertAdjacentHTML('beforeend', ingredientsDOM)
//----------------------------------------------------------------------------------------------------------------------
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];
const imagesDOM = images.map(elem => `<img class="image" src=${elem.url} alt=${elem.alt}>`).join(' ')
refs.gallery.insertAdjacentHTML('beforeend', imagesDOM)
//----------------------------------------------------------------------------------------------------------------------
let counterValue = 0;
const handleClick = (e) => {
    counterValue += 1
    refs.value.textContent = counterValue
}
const handleClick2 = (e) => {
    counterValue -= 1
    refs.value.textContent = counterValue
}
refs.button2.addEventListener('click', handleClick)
refs.button1.addEventListener('click', handleClick2)
//----------------------------------------------------------------------------------------------------------------------
const handleChange = (e) => {
    refs.output.textContent = 'незнакомец'
    if(e.target.value !== ''){
    refs.output.textContent = e.target.value
    }
}
refs.input.addEventListener('change', handleChange)
//----------------------------------------------------------------------------------------------------------------------
const handleChange2 = (e) => {
    if(e.target.value.length >= e.target.dataset.length){
        refs.input6.className = "valid"
    } else {
        refs.input6.className = "invalid"
    }
}
refs.input6.addEventListener('change', handleChange2)
//----------------------------------------------------------------------------------------------------------------------
const handleChange3 = (e) => {
    console.log(e.target.value)
    refs.text.style.fontSize = `${e.target.value}px`
}
refs.inputRange.addEventListener('change', handleChange3)
//----------------------------------------------------------------------------------------------------------------------
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
let amount = 0
const handleChangeBoxes1 = (e) => {
    amount = e.target.value
}
refs.boxesControl.children[0].addEventListener('change', handleChangeBoxes1)
let size = 30
const createBoxes = (amount) => {
    for(let i = 0; i <= (amount - 1); i++){
        refs.boxesDraw.insertAdjacentHTML('beforeend', `<div style="background-color: ${random_rgba()}; width: ${size}px; height: ${size}px"></div>`)
        size += 10
    }
}
const handleClickBoxes1 = (e) => {
    createBoxes(amount)
}
refs.boxesControl.children[1].addEventListener('click', handleClickBoxes1)
const destroyBoxes = () => {
        refs.boxesDraw.innerHTML = ' '
}
const handleClickBoxes2 = (e) => {
    destroyBoxes()
}
refs.boxesControl.children[2].addEventListener('click', handleClickBoxes2)
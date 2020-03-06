import pictures from './components/gallery-items'
import './components/style.css'
const refs = {
    gallery: document.querySelector('.gallery'),
    srcChange: document.querySelector('.lightbox__image'),
    lightbox: document.querySelector('.lightbox'),
    button: document.querySelector('.lightbox__button'),
    overlay: document.querySelector('.lightbox__content')
}
pictures.map((elem) => refs.gallery.insertAdjacentHTML('beforeend', `<img src='${elem.preview}' data-source='${elem.original}' alt='${elem.description}' width=410px class='image'/>`))
const images = Array.prototype.slice.call(document.querySelectorAll('.image'))
const handleClick = (e) => {
    refs.srcChange.src=`${e.target.dataset.source}`
    refs.lightbox.className='lightbox js-lightbox is-open'
}
images.map(elem => elem.addEventListener('click', handleClick))
const handleClick2 = (e)=> {
    refs.srcChange.src=``
    refs.lightbox.className='lightbox js-lightbox'
}
refs.button.addEventListener('click', handleClick2)
refs.overlay.addEventListener('click', handleClick2)

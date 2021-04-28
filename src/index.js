import inputSearchQuery from './js/input'
import btnClick from './js/btn'
import './css/style.css'
import refs from './js/refs'
import modal from './js/modal'

let _ = require('lodash');
refs.inputSearch.addEventListener('input', _.debounce(inputSearchQuery, 1000));
refs.btn.addEventListener('click', btnClick)
refs.form.addEventListener('click', modal)


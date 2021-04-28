import refs from './refs'
import api from './API'
import render from './render'

export default function inputSearchQuery() {
    refs.body.innerHTML = ''
    api.inputQuery(refs.inputSearch.value )
    .then(event => {
        render(event.hits)
        refs.btn.classList.remove('none')
    })
  }
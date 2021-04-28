import refs from './refs'
import api from './API'
import render from './render'

 export default function btnClick () {
  api.inputQuery(refs.inputSearch.value ).then(event => {
      render(event.hits)
      scrollTo(0, (refs.clientHeight + pageYOffset))
  })
}
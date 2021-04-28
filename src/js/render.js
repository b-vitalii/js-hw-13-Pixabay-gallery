import refs from './refs'
import hendel from '../handlebars/hendel.hbs'

export default function render(result) {
  refs.body.insertAdjacentHTML('beforeend', hendel(result));
}
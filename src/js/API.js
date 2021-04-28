const apiKAY = `21353677-1a72bad3fd432de0ec118b853`
const baseURL = `https://pixabay.com/api/`;
export default {
  page: 1,
  search: '',
  inputQuery(search, page) {
    return fetch(`${baseURL}?image_type=photo&orientation=horizontal&q=${search}&page=${this.page}&per_page=12&key=${apiKAY}`)
    .then(r => r.json())
    .then(this.page += 1);
      
  }
}
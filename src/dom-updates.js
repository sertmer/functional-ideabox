import ideaBox from "./ideaBox";
const { getIdeas, createIdea, addIdea } = ideaBox();

// query selectors
// var filterButton = document.querySelector('#filter')
// var ideaTitle = document.querySelector('#title')
// var ideaBody = document.querySelector('#body')
// var submitButton = document.querySelector('#submit')
// var searchValue = document.querySelector('#searchValue')
// var searchButton = document.querySelector('#searchButton')

const getDomElement = (id) => document.querySelector(id)

const getInputValue = (element) => element.value

const clearInputs = () => {
  getDomElement('#title').value = ''
  getDomElement('#body').value = ''
}



//user fills out title and body, clicks submitButton
// triggers the handle submit function
// prevents loading
// if button has id of 'submit', get value from title, get value from body
// bundle as object return
// push into 'ideas' array
// map over array, for each object return some html
// use inner html to insert into
const handleSubmit = (event) => {
  event.preventDefault()
  const titleValue = getInputValue(getDomElement('#title'))
  const bodyValue = getInputValue(getDomElement('#body'))
  addIdea(createIdea(titleValue, bodyValue))
  clearInputs()
  displayIdeas()
}

const createIdeasDisplay = () => {
  console.log(getIdeas())
  return getIdeas().reduce((html, idea) => {
    html = html + (`
      <section class="idea">
        <h3>${idea.title}</h3>
        <p class="details">${idea.body}</p>
      </section>
      `);

    return html;
  }, '')
}


const displayIdeas = () => {
  getDomElement("#ideas").innerHTML = createIdeasDisplay()
}


getDomElement('#submit').addEventListener('click', handleSubmit);
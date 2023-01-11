const ideaBox = () => {
  let ideas = []

  const getIdeas = () => ideas

  const createIdea = (title, body) => {
    return { title, body, id: Date.now() }
  }

  const addIdea = (newIdea) => {
    ideas = [...ideas, newIdea]
  }

  // const deleteIdea = (id) => {

  // }

  return {
    getIdeas,
    createIdea,
    addIdea
  }

}

export default ideaBox
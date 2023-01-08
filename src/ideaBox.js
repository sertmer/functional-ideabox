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
  //   const ideas = getIdeas()
  //   const ideaToDelete = ideas.find((idea => idea.id === id))
  //   const index = ideas.indexOf(ideaToDelete)
  //   const updatedIdeas = ideas.splice((index, 1))

  // }

  return {
    getIdeas,
    createIdea,
    addIdea
  }

}

export default ideaBox
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  handleTask(e.target.newTaskDescription.value)
  form.reset()
})

function handleTask(task) {
  // grab stuff
  const ul = document.querySelector('#tasks')
  const priority = document.querySelector('#priority')
  // make stuff
  const li = document.createElement('li')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')
  const input = document.createElement('input')
  const changeButton = document.createElement('button')
  // add attributes
  li.textContent = task + ' '
  li.style.color = priority.value
  deleteButton.textContent = 'X'
  deleteButton.style.color = 'red'
  editButton.textContent = 'edit'
  // add event Listeners
  deleteButton.addEventListener('click', (e) => e.target.parentNode.remove())
  editButton.addEventListener('click', (e) => {
    changeButton.textContent = 'Confirm'
    li.append(input, changeButton)
  })
  changeButton.addEventListener('click', (e) => {
    li.textContent = input.value + ' '
    li.append(deleteButton, ' ', editButton)
  })
  // append stuff
  ul.append(li)
  li.append(deleteButton, ' ', editButton)
}
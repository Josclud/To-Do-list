document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  let itemElem = document.createElement('li')
  itemElem.className = 'list-group-item d-flex justify-content-between align-items-left'
  itemElem.innerHTML = `
  ${document.getElementById('item').value}
  <button class="btn btn-danger delete">X</button>
  `
  document.getElementById('items').append(itemElem)
  document.getElementById('item').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    event.target.parentNode.remove()
  }
})


// // let listItem = document.createElement('li')
// // listItem.innerHTML = '<li class="list-group-item"></li>'


// document.getElementById('button').addEventListener('click', () => {
//   event.preventDefault();
//   document.createElement(listItem()).textContent = document.getElementById('form').value
// })


// document.getElementById('button').addEventListener('click', () => {
//   event.preventDefault();
//   document.getElementById('listItem').textContent = document.getElementById('exampleInputEmail1').value;
//   document.getElementById('form').value = ''
// })

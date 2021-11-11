document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  const itemElem = document.createElement('li')
  itemElem.className = 'list-group-item d-flex justify-content-between align-items-left'
  itemElem.innerHTML = `
  ${document.getElementById('item').value}
  <div>
  <button class="btn btn-success done">✓</button>
  <button class="btn btn-danger delete">X</button>
  </div>
  `
  document.getElementById('items').append(itemElem)
  document.getElementById('item').value = ''
})

// document.addEventListener('click', event => {
//   if (event.target.classList.contains('done')) {
//     document.querySelector('unit').style.color = 'green'
//   }
// })

document.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    event.target.parentNode.parentNode.remove()
  } else if (event.target.classList.contains('done')) {
    if (event.target.parentNode.parentNode.style.color === 'green') {
      event.target.parentNode.parentNode.style.color = 'black'
    } else {
      event.target.parentNode.parentNode.style.color = 'green'
    }
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

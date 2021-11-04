document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  
  let itemElem = document.createElement('li')
  itemElem.className = 'list-group-item'
  itemElem.textContent = document.getElementById('item').value 

  document.getElementById('items').append(itemElem)
  document.getElementById('item').value = ''
})

// const listItem = () => {
//   let li = document.createElement('list');
//   list.appendChild(li)
// }

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

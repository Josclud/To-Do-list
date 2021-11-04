let listItem = document.createElement('li')
listItem.innerHTML = '<li class="list-group-item"></li>'

document.getElementById('list').append(listItem)

document.getElementById('button').addEventListener('click', () => {
  event.preventDefault();
  document.getElementById('listItem').textContent = document.getElementById('form').value
})

const input = document.getElementById('task');
const ul = document.getElementById('tasks');
const box = document.getElementById('checkbox');

function addtask() {
  if (input.value.trim().length === 0) {
    alert('type something');
  } else {
    let task = input.value;
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    checkbox.type = 'checkbox';
    label.for = task;
    label.innerText = task;
    li.appendChild(checkbox);
    checkbox.id = 'checkbox';
    li.appendChild(label);
    ul.appendChild(li);
    input.value = '';
    savedata();
  }
}

function deletetask() {
  const checkbox = document.querySelectorAll('#tasks input[type="checkbox"]');
  let checkedtasks = false;
  checkbox.forEach(function(checkbox){
    if (checkbox.checked){
      checkedtasks = true;
      const li= checkbox.parentNode;
      ul.removeChild(li);
    }
  });
  if(!checkedtasks){
    alert('Select to delete')
  }
  savedata();
}

function savedata() {
  localStorage.setItem('data', ul.innerHTML)
}

function showtask() {
  ul.innerHTML = localStorage.getItem('data');
}
showtask();
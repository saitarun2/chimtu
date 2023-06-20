
const input = document.getElementById('task');
const ul = document.getElementById('tasks');
const box = document.getElementById('checkbox');

function addtask() {
  if (input.value.length === 0) {
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
    if (checkbox.checked) {
      label.innerHTML.value = '<s>' + value + '</s>'
    }
    console.log
    input.value = '';
    savedata();
  }
}

function deletetask() {
  const checkboxes = document.querySelectorAll('#tasks input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      const li = checkbox.parentNode;
      ul.removeChild(li);
    }
  });
  savedata();
}

function savedata() {
  localStorage.setItem('data', ul.innerHTML)
}

function showtask() {
  ul.innerHTML = localStorage.getItem('data');
}
showtask();
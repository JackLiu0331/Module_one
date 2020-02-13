//Task 1 add user input into do list

//give add button function
let add = document.getElementById('Add');
add.onclick = addlist;
//write the founction method
function addlist() {
  var li = document.createElement("li");
  var ul = document.getElementById("Ul");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  var userInput = document.getElementById("InputArea").value;
  var text = document.createTextNode(userInput);
  checkbox.id = "myCheckbox";
// exceptions
  if(userInput === ''){
    alert("You have to write something !");
  }else {
    ul.appendChild(checkbox);
    li.appendChild(text);
    ul.appendChild(li);
    }
//make sure the item added will have the function with checkIt
  const check = document.querySelectorAll('input[type=checkbox]');
  for (var i = 0; i < check.length; i++) {
    check[i].addEventListener('click',checkIt);
  }
}


//Task 2 check the clicked item
const check = document.querySelectorAll('input[type=checkbox]');
//give each checkbox function
for (var i = 0; i < check.length; i++) {
  check[i].addEventListener('click',checkIt);
}
//The function for check list
function checkIt(e) {
  var ul = document.getElementById("Ul");
  let checkbox = e.target;
  let list = e.target.nextElementSibling;
//exceptions
  if (e.target.checked) {
    list.style.textDecoration = 'line-through';
    ul.appendChild(list);
    ul.appendChild(checkbox);

  }else{
    list.style.textDecoration = '';
  }
}

//Task 3
//give the delete button function
let clear = document.getElementById('Delete');
clear.onclick = clearIt;
//The function clearIt will check each checkbox and delete the checked one
function clearIt() {
  const checkbox = document.querySelectorAll('input[type=checkbox]');
  for (var i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked){
      let box = checkbox[i];
      let list = checkbox[i].previousSibling;
      box.remove();
      list.remove();
    }
  }

}

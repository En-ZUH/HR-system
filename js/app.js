/* eslint-disable no-unused-vars */
'use strict';

let form = document.getElementById('form');
let table = document.getElementById('table');

Employee.all = [];

gettingItems();

function Employee(name, email, department, salary) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = salary;

  Employee.all.push(this);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

form.addEventListener('submit', add);

function add(event) {

  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let department = event.target.department.value;
  let salary = getRndInteger(100, 500);

  let newEmployee = new Employee(name, email, department, salary);

  newEmployee.render();
  settingItems();
}


let header = ['Name', 'Email', 'Department', 'Salary'];


function headerContent() {
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);

  for (let i = 0; i < header.length; i++) {

    let th = document.createElement('th');
    th.textContent = header[i];
    tr1.appendChild(th);
  }
}

headerContent();

let total = 0;

Employee.prototype.render = function () {
  table.textContent = '';
  headerContent();

  let tr2 = document.createElement('tr');
  table.appendChild(tr2);

  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr2.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = this.email;
  tr2.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = this.department;
  tr2.appendChild(td3);

  let td4 = document.createElement('td');
  td4.textContent = this.salary;
  tr2.appendChild(td4);

  total += this.salary;

  let p = document.getElementById('p');
  p.textContent = `Total= ${total}`;

};

function settingItems() {
  localStorage.setItem('k', JSON.stringify(Employee.all));
}

function gettingItems() {

  if (localStorage.getItem('k') !== null) {

    Employee.all = JSON.parse(localStorage.getItem('k'));

  }
}


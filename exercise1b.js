let todos = [
  { task: 'Smoke Weed', date: 'April 20' },
  { task: 'Makikinig sa tindero ng balut', date: 'Today' },
  { task: 'YEET', date: 'Soon' }
];

todos.forEach(read);

function read(todos){
  console.log(todos.task + " is due " + todos.date);
}

function create(todos){
  todos.push({ task: 'INSERT_TASK_NAME_HERE', date: 'INSERT_DUE_DATE' });
}

create(todos);

todos.forEach(read);

function remove(todos){
  delete todos[1];
}

remove(todos);

todos.forEach(read);

function update(todos){
  todos[0] = {task: 'Be gentle gentle', date: 'Now'};
}

update(todos);

todos.forEach(read);

function update2(todos){
  todos[2] = {task: 'YEET', date: 'tomorrow'};
}

update2(todos);

todos.forEach(read);



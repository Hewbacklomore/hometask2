'use strict';

// Task #1
let user = {};

user = {
    name: 'John',
    surname: 'Smith'
};

user.name = 'Pete';
delete user.name;
console.log(user);


// Task #2

const user = {
    name: 'John'
  };
  
  user.name = 'Pete';
  
console.log(user)  // можно изменить, так как мы изменяем не сам объект, а его пару ключ: значение.Но если мы не хотим чтоб изменялся объект на прямую мы можем использовать оператор rest или ещё есть способы создать копию дабы на прямую не изменять её
   
  // Task #3


  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  function sumAllSalary (obj) {
     return obj.John + obj.Ann + obj.Pete
  }

  console.log(sumAllSalary (salaries));










  conosole.log('Illia is an eventListener');
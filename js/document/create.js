// var comment = document.createComment('this is comment');
// console.log(comment);

var create = document.createElement('div');
  create.id = 'new-div';
  var content = 'kamal';
  create.classList = 'new-div-class';
  create.textContent = content;

 // console.log(create);

var test = document.getElementById('profile');
 test.appendChild(create);

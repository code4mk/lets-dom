var doc = document.getElementById('btn-me');

doc.addEventListener('click', (e) => {
  var test = document.getElementById('profile');
  test.style.color = 'green';
});




// doc.addEventListener('mouseenter', (e) => {
//   var test = document.getElementById('profile');
//   test.style.color = 'yellow';
// });




// function testme(){} ===> testme = () =>{}

testme = () =>{
 var test = document.getElementById('profile');
 var mestyle = `
  color: red;
  border: 2px solid red;
  box-sizing: border-box;
 `
  test.style.cssText = mestyle;
}
doc.addEventListener('mouseenter',testme);

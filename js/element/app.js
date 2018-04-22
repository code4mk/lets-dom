

 // var doc = document.getElementById('bio');
 // var attr = doc.attributes;
 // console.log(attr);


 // var doc = document.getElementById('bio');
 // doc.classList.add('class-add');
 // doc.classList.remove('class-remove');
 // console.log(doc);


// var doc = document.getElementById('main');
//  if(doc.className === 'main-area'){
//    console.log('yes, bio class is here');
//  }else{
//    console.log('sorry, no bio class');
//  }

// var doc = document.getElementById('bio');
// var newChild = document.createElement('div')
//  newChild.id = 'newChild';
//  newChild.classList.add('new-child');
//  newChild.textContent = 'this is new child boss';
//  newChild.style.color = 'red';
//  doc.appendChild(newChild);
//  console.log(document.getElementById('newChild'))

// var doc = document.getElementById('bio');
// var innerMe = `
//   <p> welcome here</p>
//   <h1> this is another </h1>
//   <a href="https://code4mk.org">code4mk</a>
//   `
//   doc.style.color = 'red';
//   doc.innerHTML = innerMe;
//   console.log(doc);

doc.addEventListener("mouseenter", (event) => {
   // highlight the mouseenter target
   event.target.style.color = "purple";

   // reset the color after a short delay
 }, false);

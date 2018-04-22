// var doc = document.getElementById('main');
//   var doc1 = doc.childNodes;
//   console.log(doc1);

// var doc = document.getElementById('main');
//   var doc1 = doc.childNodes[1].parentNode;
//   console.log(doc1);

// var doc = document.getElementById('main');
//   var doc1 = doc.childNodes[1].parentNode;
//   console.log(doc1);

// var doc = document.getElementById('main');
//   var doc1 = doc.childNodes[1].nextElementSibling;
//   console.log(doc1);

// var doc = document.getElementById('main');
//   var doc1 = doc.childNodes[3].previousElementSibling;
//   var doc2 = doc1.cloneNode(true);
//   console.log(doc2);



// var docParent = document.getElementById('bio').parentNode
// var doc = document.getElementById('bio')
// var newNode = document.createElement("div");
// newNode.id = 'before-node';
// newNode.textContent = 'kamal is here ok before bio';
// newNode.style.color = 'red';
// docParent.insertBefore(newNode, doc);
// console.log(document);

var doc = document.getElementById('bio')
var img1 = new Image(); // HTML5 Constructor
img1.src = 'http://res.cloudinary.com/duzdotcoi/image/upload/c_scale,h_500,w_890/v1522890619/sample.jpg';
img1.alt = 'alt';
img1.height = '200';
img1.width = '200';
img1.style.borderRadius = '50%';
doc.appendChild(img1);


var doc = document.getElementById('main');
  var doc1 = doc.childNodes[1].isConnected;
  console.log(doc1);

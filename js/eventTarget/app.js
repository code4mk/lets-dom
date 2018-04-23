// e.currentTarget always mainArea

mainArea.addEventListener('click', (e) => {
  let attachEle = e.currentTarget;
  attachEle.classList.toggle('boss');
  console.log(attachEle);
});
// e.target clicked element inside mainarea
mainAreaTwo.addEventListener('click', (e) => {
  let clickTargetEle = e.target;
  clickTargetEle.classList.toggle('boss');
  console.log(clickTargetEle);
});

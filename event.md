event
---

## addEventListener

`target.addEventListener(type, listener[, options]);`

```js
var doc = document.getElementById('btn-me');

doc.addEventListener('click', (e) => {
  var test = document.getElementById('profile');
  test.style.color = 'green';
});
```

## target & currentTarget

* `currentTarget` return `element` which `attached` `event handler`
* `target` retuen `element` which `clicked` element   `inside event` handler attached element

### currentTarget

```js
mainArea.addEventListener('click', (e) => {
  let attachEle = e.currentTarget;
  attachEle.classList.toggle('boss');
  console.log(attachEle);
});
```

### target

```js
mainAreaTwo.addEventListener('click', (e) => {
  let clickTargetEle = e.target;
  clickTargetEle.classList.toggle('boss');
  console.log(clickTargetEle);
});
```

* [mdn mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover)
* [mdn event](https://developer.mozilla.org/en-US/docs/Web/Events)
* [event mdn API](https://developer.mozilla.org/en-US/docs/Web/API/Event)
* [event target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

---

* [<<Prev](https://github.com/code4mk/lets-dom/blob/master/style.md)
* [Next>>](https://github.com/code4mk/lets-dom/blob/master/htmlelement.md)

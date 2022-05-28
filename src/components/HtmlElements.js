const d = document,
    $header = d.querySelector('div#header'),
    $main = d.querySelector('div#main'),
    $footer = d.querySelector('div#footer');

function createHtmlElement(type, id, classesArray, content) {
  const element = d.createElement(type);
  if (id) element.id = id;
  if (classesArray){
    classesArray.forEach((sgclass) => element.classList.add(sgclass));
  }
  if (content) element.innerText = content;

  return element;
}

export {d, $header, $main, $footer}
export default createHtmlElement;
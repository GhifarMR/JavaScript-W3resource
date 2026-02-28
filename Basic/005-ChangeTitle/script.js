const animateString = (id) => {
  const element = document.getElementById(id);

  const textNode = element.childNodes[0];
  let text = textNode.data;
  
  setInterval(() => {
    text = text.slice(-1) + text.slice(0, -1);
    element.innerHTML = text
  }, 100);

}

animateString("textTitle");
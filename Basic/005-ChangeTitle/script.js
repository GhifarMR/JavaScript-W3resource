const animateString = (id) => {
  const element = document.getElementById(id);

  const textNode = element.childNodes[0];
  console.log(textNode);

  let text = textNode.data;
  console.log(text);

  console.log(text.slice(-1));
  console.log(text.slice(0, -1));
  console.log(text.slice(-1) + text.slice(0, -1));
  setInterval(() => {
    text = text.slice(-1) + text.slice(0, -1);

    textNode.data = text;
  }, 100);
};

animateString("textTitle");

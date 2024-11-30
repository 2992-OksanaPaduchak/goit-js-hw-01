function getElementWidth(content, padding, border) {
  const newcontent = parseFloat(content);
  const newpadding = parseFloat(padding);
  const newborder = parseFloat(border)
  return newcontent + newpadding * 2 + newborder * 2;
  
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 


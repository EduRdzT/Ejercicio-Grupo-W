export const checkbox = (element, conainerParent, checkboxStyle) => {
  const $elementClick = element.current,
    $elementParent = conainerParent.current.childNodes;

  $elementParent.forEach((el) => {
    el.style.color = checkboxStyle.backgroundColor;
    el.style.backgroundColor = "transparent";
  });
  $elementClick.style.color = checkboxStyle.color;
  $elementClick.style.backgroundColor = checkboxStyle.backgroundColor;
};

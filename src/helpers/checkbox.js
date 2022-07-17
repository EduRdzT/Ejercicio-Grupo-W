export const checkbox = (element, conainerParent, checkboxStyle) => {
  const $elementClick = element.current,
    $elementParent = conainerParent.current.childNodes;

  $elementParent.forEach((el) => {
    el.removeAttribute("style");
  });
  $elementClick.style.color = checkboxStyle.color;
  $elementClick.style.backgroundColor = checkboxStyle.backgroundColor;
};

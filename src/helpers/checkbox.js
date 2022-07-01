export const checkbox = (element, conainerParent) => {
  const $elementClick = element.current,
    $elementParent = conainerParent.current.childNodes;

  $elementParent.forEach((el) => {
    el.classList.remove("checkbox");
  });
  $elementClick.classList.add("checkbox");
};

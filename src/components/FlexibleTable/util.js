const closest = (el, selector, rootNode) => {
  let element = el;
  while (element) {
    const isRoot = element === rootNode || element === document.body;
    if (isRoot || (element.nodeType === 1 && element.matches(selector))) {
      if (isRoot) {
        element = null;
      }
      break;
    }
    element = element.parentNode;
  }
  return element;
};

const getScrollElement = (el) => {
  let element = el;
  do {
    const { overflow } = window.getComputedStyle(element);
    if (
      (overflow === 'auto' || overflow === 'scroll') &&
      element &&
      element.nodeType &&
      (element.offsetWidth < element.scrollWidth ||
        element.offsetHeight < element.scrollHeight)
    ) {
      break;
    }
    if (!element || !element.nodeType || element === document.body) {
      element = null;
      break;
    }
    element = element.parentNode;
  } while (element);
  return element;
};

const getDomIndex = (el, ignoreSelectors) => {
  return Array.from(el.parentNode.children)
    .filter((e) =>
      ignoreSelectors === '' ? true : !e.matches(ignoreSelectors)
    )
    .indexOf(el);
};

export { getScrollElement, closest, getDomIndex };

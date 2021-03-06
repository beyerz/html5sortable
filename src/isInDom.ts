/**
 * Test whether element is in DOM
 * @param {Element} element
 * @returns {boolean}
 */
export default (element: Element): boolean => {
  if (!element || element.nodeType !== 1) {
    throw new Error('Element is not a node element.')
  }

  return element.parentNode !== null
}

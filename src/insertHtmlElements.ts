/**
 * Insert node before or after target
 * @param {Element} referenceNode - reference element
 * @param {Element} newElement - element to be inserted
 * @param {String} position - insert before or after reference element
 */
let insertNode = (referenceNode: any, newElement: any, position: String = 'before') => {
  if ((referenceNode || {}).nodeType !== 1 || !referenceNode.parentElement || (newElement || {}).nodeType !== 1) {
    throw new Error('target and element must be a node')
  }
  referenceNode.parentElement.insertBefore(
    newElement,
    (position === 'before' ? referenceNode : referenceNode.nextElementSibling)
  )
}
/**
 * Insert before target
 * @param {Element} target
 * @param {Element} element
 */
let insertBefore = (target, element) => insertNode(target, element, 'before')
/**
 * Insert after target
 * @param {Element} target
 * @param {Element} element
 */
let insertAfter = (target, element) => insertNode(target, element, 'after')

export { insertBefore, insertAfter }

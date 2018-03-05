import {addData as _data} from './data' // yuk, data really needs to be refactored
import _filter from './filter'
/**
 * Filter only wanted nodes
 * @param {Element} sortableContainer
 * @param {Function} customSerializer
 * @returns {Array}
 */
export default (sortableContainer: Element, customSerializer: Function = (item, sortableContainer) => item): Array<object> => {
  // get the items in this sortable
  let sortableItems = _filter(sortableContainer.children, _data(sortableContainer, 'items'))

  return sortableItems
}

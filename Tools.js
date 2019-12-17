//Array array contains element elem
function ArrayContainsElem(array, elem) {
  for (arrayElem of array) {
    if (elem !== Object(elem)) {
      if (arrayElem == elem) return true;
    } else {
      if (arrayElem.id == elem.id) return true;
    }
  }
  return false;
}

//Generates a unique id
function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	)
}
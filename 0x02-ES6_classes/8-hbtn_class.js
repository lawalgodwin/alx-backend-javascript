export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](type) {
    let value = null;
    if (type === 'number') value = this._size;
    if (type === 'string') value = this._location;
    return value;
  }
}

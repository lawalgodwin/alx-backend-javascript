export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  //   override the default string representation of the object
  toString() {
    return `[object ${this._code}]`;
  }
}

export default class Building {
  constructor(sqft) {
    // check if an instance is created using the subclass of this abstract class
    // check if subclass implements the abstract method 'vacuationWarningMessage'
    // Note:this.constructor is also known as new.target
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

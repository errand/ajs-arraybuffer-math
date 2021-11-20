/**
 * Class representing a MathCharacter character logic.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class MathCharacter extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
    this._attack = 40;
  }

  /**
   * Set the Attack value depending on Distance
   */
  set attack(distance) {
    switch (distance) {
      case 2:
        this._attack -= +(this.attack * 0.1).toFixed(2);
        break;
      case 3:
        this._attack -= +(this.attack * 0.2).toFixed(2);
        break;
      case 4:
        this._attack -= +(this.attack * 0.3).toFixed(2);
        break;
      case 5:
        this._attack -= +(this.attack * 0.4).toFixed(2);
        break;
      default: throw new Error('Distanse can\'t be more than 5 and less than 1 square');
    }
    if (this.stoned) this._attack -= +(Math.log2(distance) * 5).toFixed(2);
  }

  /**
   * Get the Attack value
   */
  get attack() {
    return this._attack;
  }

  /**
   * Set the Stoned state of the Character
   */
  set stoned(stoned) {
    this._stoned = stoned;
  }

  /**
   * Get the Stoned state of the Character
   */
  get stoned() {
    return this._stoned;
  }
}

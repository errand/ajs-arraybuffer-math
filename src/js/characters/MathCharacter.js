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
    if (distance > 0 && distance < 6) {
      this._attack -= +(this.attack * ((distance - 1) / 10)).toFixed(2);
    } else {
      throw new Error('Distanse can\'t be more than 5 and less than 1 square');
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

/**
 * Class representing a Magician character.
 * @class
 * @extends Character
 */
import MathCharacter from './MathCharacter';

export default class Magician extends MathCharacter {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Magician') {
    super(name, type);
    this._attack = 10;
    this.defence = 40;
  }
}

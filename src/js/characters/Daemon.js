/**
 * Class representing a Daemon character.
 * @class
 * @extends Character
 */
import MathCharacter from './MathCharacter';

export default class Daemon extends MathCharacter {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Daemon') {
    super(name, type);
    this._attack = 10;
    this.defence = 40;
  }
}

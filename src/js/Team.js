/** @module Team
 * Class creating Team of Characters.
 */
export default class Team {
  /**
   * Create a point.
   */
  constructor() {
    this.members = new Set();
  }

  /**
   * Adds unique Character to the Team
   * @param {object} character - instance of Character class
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Team already has character ${character.type} - ${character.name}`);
    } else {
      this.members.add(character);
    }
  }

  /**
   * Adds several unique Character to the Team
   * @param {object} characters - an array of Characters
   */
  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  /**
   * Transforms members Set to Array
   * @return {array} - formatted array of members
   */
  toArray() {
    return Array.from(this.members);
  }
}

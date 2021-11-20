/**
 * Class representing a Math character logic.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Math extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type) {
    super(name, type);
    this.stoned = false;
    this._attack = 0;
  }

  /*

Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает, а именно: на ближайшую клетку 100%,
на 5 клетку от себя - 60% (соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)
Возможность насылать «дурман» на магов и демонов.

При это их сила атаки падает уже не только линейно, а по формуле: attack - log2(x) * 5, где x - это расстояние в клетках. attack рассчитывается с учётом п.1.
Пример: атака 100 единиц, атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).
Описание
Реализуйте классы Magician и Daemon с get/set stoned. При этом get/set attack должен учитывать логику, описанную в легенде.

Подсказка: используйте класс Math и наследование, чтобы не дублировать код.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
  *
  * */

  set attack(distance) {
    switch (distance) {
      case 2:
        this._attack -= this.attack * 0.1;
        break;
      case 3:
        this._attack -= this.attack * 0.2;
        break;
      case 4:
        this._attack -= this.attack * 0.3;
        break;
      case 5:
        this._attack -= this.attack * 0.4;
        break;
      default: throw new Error('Distanse can\'t be more than 5 and less than 1 square');
    }
    if (this.stoned) this._attack -= Math.log(distance) * 5;
  }

  get attack() {
    return this._attack;
  }
}

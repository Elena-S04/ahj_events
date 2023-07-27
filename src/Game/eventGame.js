import MovingGame from './movingGame';

export default class EventGame {
  constructor() {
    this.element = document.querySelector('.field');
    this.element.addEventListener('click', EventGame.onGoblinClick);

    this.Goblin = new MovingGame().moving();
  }

  static onGoblinClick(e) {
    if (e.target.classList.contains('item_has-goblin')) {
      document.getElementById('got').textContent = Number(document.getElementById('got').textContent) + 1;
      e.target.classList.remove('item_has-goblin');
    } else {
      document.getElementById('miss').textContent = Number(document.getElementById('miss').textContent) + 1;
      if (document.getElementById('miss').textContent > 4) {
        alert('Игра окончена, Вы проиграли. Начните сначала');
        document.getElementById('miss').textContent = 0;
        document.getElementById('got').textContent = 0;
      }
    }
  }
}

const game = new EventGame();
game.Goblin;

export default class MovingGame {
    moving() {
      setInterval(() => {
        this.goblin = document.querySelector('.item_has-goblin');
        const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);
  
        const nextGoblin = document.getElementById(`item${randomIndex}`);
        if (this.goblin) {
          this.goblin.classList.remove('item_has-goblin');
        }
        nextGoblin.classList.add('item_has-goblin');
      }, 1000);
    }
  }
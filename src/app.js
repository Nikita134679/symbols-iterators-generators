const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
  
  class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach(character => this.add(character));
    }
  
    toArray() {
      return Array.from(this.members);
    }
    *[Symbol.iterator]() {
      yield* this.members;
    }
  }
  const team = new Team();
  team.addAll(char);
  
  team[Symbol.iterator] = function() {
    let index = 0;
    const members = this.members;
    return {
      next() {
        if (index < members.size) {
          return {
            done: false,
            value: members.values().next().value
          };
        }
        return {
          done: true
        };
      }
    };
  }
  for (let character of team) {
    console.log(character);
  }
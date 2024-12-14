function solveCurTask(arr) {
  class Cat {
    name;
    age;

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const strCat of arr) {
    const [name, age] = strCat.split(' ');

    const cat = new Cat(name, age);
    cat.meow();
  }
}

solveCurTask(['Mellow 2', 'Tom 5']);
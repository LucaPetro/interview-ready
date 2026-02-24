// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export default class AnimalShelter {
    dogs: Animal[] = []
    cats: Animal[] = []
    all: Animal[] = []

    constructor() {
    }

    enqueue(type: AnimalType): void {
      const animal = new Animal(type)
      switch (animal.type) {
      case "cat":
        this.cats.push(animal)
        break;
      case "dog":
        this.dogs.push(animal)
        break;
      }

      this.all.push(animal)
    }

    dequeueAny(): Animal | undefined {
      const animal = this.all.shift()
      if (!animal) return;

      switch (animal.type) {
      case "cat":
        this.cats.shift()
        break;
      case "dog":
        this.dogs.shift()
        break;
      }

      return animal;
    }

    dequeueDog(): Animal | undefined {
      const idx = this.all.findIndex(a => a.type === 'dog')

      this.all.splice(idx, 1)

      return this.dogs.shift()
    }

    dequeueCat(): Animal | undefined {
      const idx = this.all.findIndex(a => a.type === 'cat')

      this.all.splice(idx, 1)

      return this.cats.shift()
    }
}


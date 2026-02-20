// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  #len: number | null;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
    this.#len = null;
  }

  push(value: T) {
    this.#len = null;
    if (!this.tail) {
      this.head = { value };
      this.tail = this.head
      return;
    }
    this.tail.next = { value }
    this.tail = this.tail.next
  }

  filter(fn: (node: Node<T>) => boolean): LinkedList<T> {
    const list = new LinkedList<T>()

    this.visit((node) => {
      if (fn(node)) {
        list.push(node?.value)
      }
    })

    return list;
  }

  visit(fn: (node: Node<T>, index?: number) => void): LinkedList<T> {
    let currentNode = this.head;
    let idx = 0
    while (currentNode) {
      fn(currentNode, idx)
      currentNode = currentNode.next
      idx++;
    }
    return this
  }

  first(fn: (node: Node<T>, index?: number) => boolean): Node<T> | null {
    let currentNode = this.head;
    let idx = 0;
    while (currentNode) {
      if (fn(currentNode, idx)) return currentNode;
      currentNode = currentNode.next;
      idx++;
    }
    return null;
  }

  remove(pos: number) {
    this.#len = null;
    if (pos === 0) {
      this.head = this.head?.next
    }

    let currentNode = this.head;
    let prev = currentNode;
    let idx = 0;

    while (currentNode && prev) {
      if (idx === pos && currentNode?.next) {
        prev.next = currentNode.next
      } 
      if (idx === pos && !currentNode?.next) {
        prev.next = undefined;
        this.tail = prev;
      }
      prev = currentNode;
      currentNode = currentNode.next;
      idx++;
    }

    return this.head;
  }

  merge(list: LinkedList<T>) {
    this.#len = null;
    if (!this.tail) {
      return list
    }

    this.tail.next = list.head;
    this.tail = list.head;
    return this
  }
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length(): number {
    if (!this.#len) {
      this.#len = 0
      let currentNode = this.head
      while (currentNode) {
        this.#len++;
        currentNode = currentNode.next;
      }
    }
    return this.#len;
  }
}

const list = new LinkedList();

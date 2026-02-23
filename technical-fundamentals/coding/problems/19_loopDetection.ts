// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function detectLoop<T>(
  head: Node<T> | undefined,
): Node<T> | null {
  if (!head?.next) return null;
  const set: Set<Node<T>> = new Set();

  let currentNode: Node<T> | undefined = head;
  while (currentNode) {
    if (set.has(currentNode)) return currentNode;
  
    set.add(currentNode);

    currentNode = currentNode.next
  }

  return null;
}

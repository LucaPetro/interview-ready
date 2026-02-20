// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  const list = new LinkedList(head)

  const length = list.length()

  let out;
  list.visit((node, idx) => {
    if (idx === length - k) out = node;
  })

  return out;
}

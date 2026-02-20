// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const set: Set<Node<T>> = new Set();

  const left = new LinkedList<T>(list1)
  const right = new LinkedList<T>(list2)

  left.visit((node) => set.add(node))

  return right.first((node) => set.has(node)) ?? undefined;
}

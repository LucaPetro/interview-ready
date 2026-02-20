// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

// export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
//   let dupesRemain = true
//   let currentNode = head;
//   while (dupesRemain) {
//     dupesRemain = false;
//     while(currentNode?.next) {
//       if (currentNode.value === currentNode.next.value) {
//         currentNode.next = currentNode.next.next;
//         dupesRemain = true;
//       } else currentNode = currentNode?.next;
//     }
//   }
//   return head;
// }

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  if (!head || !head.next) return head;
  
  let currentNode: Node<T> | undefined = head;

  while (currentNode) {
    if (currentNode.next && currentNode.value === currentNode.next.value) {
      let firstNode = currentNode
      while (currentNode.next && currentNode.value === currentNode.next.value) {
        currentNode = currentNode?.next
      }
      firstNode.next = currentNode.next
    }
    currentNode = currentNode.next
  }

  return head;
}
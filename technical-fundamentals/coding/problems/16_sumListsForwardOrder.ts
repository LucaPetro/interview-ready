// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  const outList = new LinkedList<number>();

  if (!list1 && !list2) return undefined;
  if (list1 && !list2) return list1;
  if (!list1 && list2) return list2;

  const left = new LinkedList<number>(list1);
  const right = new LinkedList<number>(list2)

  let firstNumber = 0;
  let digit = 1 * (10 ** (left.length() - 1))
  left.visit((node) => {
    firstNumber += node.value * digit;
    digit /= 10;
  })

  let secondNumber = 0;
  digit = 1 * (10 ** (right.length() - 1))
  right.visit((node) => {
    secondNumber += node.value * digit;
    digit /= 10;
  })

  let total = firstNumber + secondNumber;

  total.toString().split('').forEach((val) => outList.push(Number(val)))

  return outList.head
}

// const list1: Node<number> = {
//   value: 9,
//   next: { value: 9, next: { value: 9 } },
// };
// const list2: Node<number> = { value: 1 };

// console.dir(sumListsForwardOrder(list1, list2), { depth: null })
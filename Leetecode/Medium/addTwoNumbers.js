// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0); // Dummy node to simplify code
  let current = dummyHead;
  let carry = 0;

  // Iterate through the lists and add the values
  while (l1 !== null || l2 !== null || carry !== 0) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;

      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      let newNode = new ListNode(sum % 10);

      current.next = newNode;
      current = current.next;

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }

  return dummyHead.next; // Return the next node of dummy to skip dummy node
}

// Example usage:
// Input lists: [2,4,3] and [5,6,4]
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);

// Helper function to print the linked list
function printList(node) {
  let output = [];
  while (node !== null) {
      output.push(node.val);
      node = node.next;
  }
  console.log(output);
}

printList(result); // Output should be [7,0,8]

module.exports =  {addTwoNumbers, ListNode} ;


const { SinglyLinkedList } = require("../singlylinkedlist");

describe("singly linked list", () => {
  it("tests that [push adds a new node", () => {
    let list = new SinglyLinkedList();
    list.push("1");
    expect(list.length).toBeGreaterThan(0);
  });

  it("tests that pop removes last element in list", () => {
    let myList = new SinglyLinkedList();
    myList.push("1");
    myList.push("2");
    myList.push("3");
    myList.push("4");

    const previousLength = myList.length;
    myList.pop();
    const currentLength = myList.length;

    expect(myList.length).toEqual(currentLength);
  });
});

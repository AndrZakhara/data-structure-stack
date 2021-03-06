import Stack from '../src/index.js';

describe('tests for method clone', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  test(
    'should return a new stack where the length is equal to the length of the original stack',
    () => {
      const newStack = stack.clone();
      expect(newStack.length).toBe(3);
    });

  test('new stack must be instance of class Stack', () => {
    const newStack = stack.clone();
    expect(newStack).toBeInstanceOf(Stack);
  });
});
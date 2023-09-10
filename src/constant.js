export const CONSTANTS = {
  useStateQna1:
    "When you use count++, you are modifying the count variable directly, which doesn't inform React of the change. React is unaware of this change, so it won't trigger a re-render to reflect the updated value in your component's UI. To correctly update the state and ensure that React re-renders your component, you should always use the setCount function",

  useStateQna2_1:
    "Mutating State Directly: React's state management relies on immutability. When you use setCount, React internally handles state updates in an immutable way, ensuring that your component re-renders properly. When you do count++ directly, you are mutating the count variable, which is against React's principles.",

  useStateQna2_2:
    "Order of Evaluation: The count++ expression evaluates to the current value of count and then increments it by 1. When you write setCount(count++), it's equivalent to writing setCount(count) because the increment happens after the value is read. So, you won't see any change in the state because you're essentially setting it to its current value.",

  newStateQna1:
    "Now list.push(name) will work when state changes in your app, that is once click on Add Name and then click a backspace state changes and new name will be added to list. That is why it is better to do setList([...list, name])",
};

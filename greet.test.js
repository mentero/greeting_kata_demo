const greet = require('./greet.js');

test ("interpolates given name into greeting", () => {
  let name = "Bob"
  let result = greet(name)
  expect(result).toBe("Hello, Bob.")
});

test ("interpolates different name into greeting", () => {
  let name = "Alice"
  let result = greet(name)
  expect(result).toBe("Hello, Alice.")
});

test ("gives default response when name is not passed", () => {
  let name = null
  let result = greet(name)
  expect(result).toBe("Hello, my friend.")
})

test ("when name is all upcase it shouts to the user", () => {
  let name = "JERRY"
  let result = greet(name)
  expect(result).toBe("HELLO, JERRY!")
})

test ("when there are many names all are printed", () => {
  let names = ["Jill", "Jane"]
  let result = greet(names)

  expect(result).toBe("Hello, Jill and Jane.")
})

test ("when there are more than 2 names separate all but last by comma", () => {
  let names = ["Amy", "Brian", "Charlotte"]
  let result = greet(names)

  expect(result).toBe("Hello, Amy, Brian, and Charlotte.")
})

test ("show shoutings separetly", () => {
  let names = ["Amy", "BRIAN", "Charlotte"]
  let result = greet(names)

  expect(result).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})

test ("if name contains comma, split it", () => {
  let names = ["Bob", "Charlie, Dianne"]
  let result = greet(names)

  expect(result).toBe("Hello, Bob, Charlie, and Dianne.")
})


// Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, For example, when `name` is ["Bob", "\"Charlie, Dianne\""], then the method should return the string `"Hello, Bob and Charlie, Dianne."`.
test ("it does not split if escaped", () => {
  let names  = ["Bob", "\"Charlie, Dianne\""]
  let result = greet(names)

  expect(result).toBe("Hello, Bob and Charlie, Dianne.")
})
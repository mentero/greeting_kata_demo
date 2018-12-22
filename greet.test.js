greet = require("./greet.js")

test("interpolates name into greeting", () => {
  let name = "Bob"
  let result = greet(name)
  expect(result).toBe("Hello, Bob.")
})

test("interpolates another name into greeting", () => {
  let name = "Alice"
  let result = greet(name)
  expect(result).toBe("Hello, Alice.")
})

test("interpolates another name into greeting", () => {
  let name = null
  let result = greet(name)
  expect(result).toBe("Hello, my friend.")
})

test("interpolates another name into greeting", () => {
  let name = "JERRY"
  let result = greet(name)
  expect(result).toBe("HELLO JERRY!")
})

test("interpolates another name into greeting", () => {
  let names = ["Jill", "Jane"]
  let result = greet(names)
  expect(result).toBe("Hello, Jill and Jane.")
})

test("more than two names", () => {
  let names = ["Amy", "Brian", "Charlotte"]
  let result = greet(names)
  expect(result).toBe("Hello, Amy, Brian, and Charlotte.")
})

test("greets upcased names separately", () => {
  let names = ["Amy", "BRIAN", "Charlotte"]
  let result = greet(names)
  expect(result).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})

test("splits names with comma", () => {
  let names = ["Bob", "Charlie, Dianne"]
  let result = greet(names)
  expect(result).toBe("Hello, Bob, Charlie, and Dianne.")
})

test("does not split if escaped", () => {
  let names = ["Bob", "\"Charlie, Dianne\""]
  let result = greet(names)
  expect(result).toBe("Hello, Bob and Charlie, Dianne.")
})
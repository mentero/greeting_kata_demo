function greet(name) {
  if (Array.isArray(name)) {
    splitted_names = splitNames(name)
    let [shouts, names] = separateShouts(splitted_names)

    return greet_many(names) + greet_shouts(shouts)
  } else {
    return greet_one(name)
  }
}

// PRIVATE

function splitNames(names) {
  return names.flatMap((element) => {
    if (element.startsWith("\"") && element.endsWith("\"")) {
      return element.replace(/^\"/, "").replace(/\"$/, "")
    } else {
      return element.split(", ")
    }
  })
}

function separateShouts(names) {
  shouts = []
  names  = []

  splitted_names.forEach((element) =>
    isShout(element) ? shouts.push(element) : names.push(element)
  )

  return [shouts, names];
}

function isShout(name) {
  return name == name.toUpperCase()
}

function greet_many(names) {
  last_name = names.pop()
  oxford_comma = names.length > 1 ? "," : ""
  return `Hello, ${names.join(", ")}${oxford_comma} and ${last_name}.`
}

function greet_shouts(shouts) {
  return (shouts.length != 0) ? ` AND HELLO ${shouts.join(", ")}!` : ""
}

function greet_one(name) {
  if (name && isShout(name)) {
    return `HELLO, ${name}!`
  } else if (name) {
    return `Hello, ${name}.`
  } else {
    return "Hello, my friend."
  }
}

module.exports = greet;
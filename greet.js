function greet(maybe_names) {
  if (Array.isArray(maybe_names)) {
    let splitted_names = split_names(maybe_names)
    let [shouts, normal_names] = separate_shouts(splitted_names)

    return greet_many(normal_names) + greet_shouts(shouts)
  } else {
    return greet_one(maybe_names)
  }
}

function separate_shouts(names) {
    let shouts = []
    let normal_names = []
    
    names.forEach( element => {
      is_shout(element) ? shouts.push(element) : normal_names.push(element)
    })

    return [shouts, normal_names]
}

function split_names(names) {
  return names.flatMap( name => {
    if (name.startsWith("\"") && name.endsWith("\"")) {
      return name.replace(/^\"/, "").replace(/\"$/, "")
    } else {
      return name.split(", ")
    }
  })
}

function is_shout(name) {
  return name && name == name.toUpperCase() 
}

function greet_shouts(shouts) {
  return shouts.length > 0 ? ` AND HELLO ${shouts}!` : ""
}

function greet_many(names) {
  let last_name = names.pop()
  let oxford_comma = names.length > 1 ? "," : "" 
  let joined_names = names.join(", ")

  return `Hello, ${joined_names}${oxford_comma} and ${last_name}.`
}

function greet_one(name) {
  if (is_shout(name)) {
    return `HELLO ${name}!`
  } else if (name) {
    return `Hello, ${name}.`
  } else {
    return "Hello, my friend."
  }
}

module.exports = greet
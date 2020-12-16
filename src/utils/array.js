export const arrayReplace = (array, newObj, key = "id") => {
  return array.map(i => i[key] === newObj[key] ? newObj : i)
}

export const arrayDelete = (array, value, key = "id") => {
  return array.filter(i => i[key] !== value)
}


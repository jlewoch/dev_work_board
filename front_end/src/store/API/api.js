export const create = (section, data) => {
  return fetch(`http://localhost:9000/api/${section}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
export const update = (section, data) => {
  return fetch(`http://localhost:9000/api/${section}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
export const destroy = (section, data) => {
  return fetch(`http://localhost:9000/api/${section}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
export const get = section => {
  return fetch(`http://localhost:9000/api/${section}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}

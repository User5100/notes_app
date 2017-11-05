import * as axios from 'axios'

const BASE_URL = 'http://localhost:3000/notes'

export function getNotes () {
  return axios
		.get(BASE_URL)
		.then(res => res.data)
}

export const colors = [
  {
    id: 1,
    name: 'lightblue'
  },
  {
    id: 2,
    name: 'peru'
  },
  {
    id: 3,
    name: 'green'
  },
  {
    id: 4,
    name: 'yellow'
  }
]

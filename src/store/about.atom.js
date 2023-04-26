import axios from 'axios'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { BASE_URL, headers } from '../api'

// Create your atoms and derivatives
export const [participantsAtom] = atomsWithQuery(() => ({
  queryKey: ['about'],
  queryFn: async () =>
    axios
      .get(BASE_URL + process.env.REACT_APP_GIST_ID, {
        gist_id: process.env.REACT_APP_GIST_ID,
        headers: headers
      })
      .then((res) => JSON.parse(res.data.files['gistfile1.txt'].content))
}))

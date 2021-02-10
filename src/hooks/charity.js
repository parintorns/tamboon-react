import { useState } from 'react'
import axios from 'axios'

const endpoint = process.env.REACT_APP_ENDPOINT

export function useCharity() {
  const [charities, setCharities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getCharities() {
    const url = `${endpoint}/charities`

    setLoading(true)

    try {
      const response = await axios({
        url,
        method: 'get'
      })

      if (response.status === 200) {
        setCharities(response.data)
      }
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  return {
    charities,
    getCharities,
    loading,
    error
  }
}

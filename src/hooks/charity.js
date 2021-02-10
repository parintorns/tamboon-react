import { useState } from 'react'
import axios from 'axios'

const endpoint = process.env.REACT_APP_ENDPOINT

export function useCharity() {
  const [charities, setCharities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')

  async function getCharities() {
    const url = `${endpoint}/charities`

    setLoading(true)

    try {
      const response = await axios({
        url,
        method: 'get'
      })

      setCharities(response.data)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  async function pay(charitiesId, amount, currency) {
    const url = `${endpoint}/payments`

    setLoading(true)

    const data = {
      charitiesId,
      amount: Number(amount),
      currency
    }

    try {
      const response = await axios({
        url,
        method: 'post',
        data
      })

      setMessage(`Thank you for donate ${amount} ${currency}`)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  return {
    charities,
    getCharities,
    pay,
    loading,
    error,
    message
  }
}

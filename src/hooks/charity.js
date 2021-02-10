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

      const { data: charities } = response

      setCharities(charities)
    } catch (error) {
      setError({ message: 'Error on loading data' })
    }

    setLoading(false)
  }

  async function getCharityDonation(id) {
    const url = `${endpoint}/payments?charitiesId=${id}`

    setLoading(true)

    try {
      const response = await axios({
        url,
        method: 'get'
      })

      const { data } = response
      const total = data.reduce((a, c) => a + c.amount, 0)

      return total
    } catch (error) {
      setError({ message: 'Error on loading data' })
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
      setError({ message: 'Error on loading data' })
    }

    setLoading(false)
  }

  return {
    charities,
    getCharities,
    getCharityDonation,
    pay,
    loading,
    error,
    message,
    setMessage
  }
}

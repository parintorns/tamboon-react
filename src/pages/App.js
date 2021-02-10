/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useCharity } from 'hooks'

import Charity from 'components/Charity'
import Spinner from 'components/Spinner'
import Error from 'components/Error'

import { Title, Container, Content } from './styles'

function App() {
  const {
    charities,
    getCharities,
    pay,
    loading,
    error,
    message,
    setMessage
  } = useCharity()

  useEffect(() => {
    getCharities()
  }, [])

  const handleDonate = (charityId, amount, charityCurrency) => {
    pay(charityId, amount, charityCurrency)
  }

  return (
    <Container>
      <Title>Omise Tamboon React</Title>

      {loading && <Spinner />}

      {error && <Error message={error?.message} />}

      <Content>
        {charities?.map((charity, index) => (
          <Charity
            key={`charity-item-${index}`}
            charity={charity}
            onDonate={handleDonate}
            message={message}
            setMessage={setMessage}
          />
        ))}
      </Content>
    </Container>
  )
}

export default App

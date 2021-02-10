import React, { useEffect } from 'react'

import { useCharity } from 'hooks'

import Charity from 'components/Charity'
import Spinner from 'components/Spinner'
import Error from 'components/Error'

import { Title, Container, Content } from './styles'

function App() {
  const { charities, getCharities, loading, error } = useCharity()

  useEffect(() => {
    getCharities()
  }, [])

  const handleDonate = () => {}

  return (
    <Container>
      <Title>Omise Tamboon React</Title>

      {loading && <Spinner />}

      {error && <Error />}

      <Content>
        {charities?.map((charity, index) => (
          <Charity
            key={`charity-item-${index}`}
            charity={charity}
            onDonate={handleDonate}
          />
        ))}
      </Content>
    </Container>
  )
}

export default App

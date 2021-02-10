import React, { useEffect } from 'react'

import { useCharity } from 'hooks'

import Charity from 'components/Charity'
import Spinner from 'components/Spinner'
import Error from 'components/Error'

function App() {
  const { charities, getCharities, loading, error } = useCharity()

  useEffect(() => {
    getCharities()
  }, [])

  const handleDonate = () => {}

  return (
    <>
      <div>Omise Tamboon React</div>

      {loading && <Spinner />}

      {error && <Error />}

      {charities?.map((charity, index) => (
        <Charity
          key={`charity-item-${index}`}
          charity={charity}
          onDonate={handleDonate}
        />
      ))}
    </>
  )
}

export default App

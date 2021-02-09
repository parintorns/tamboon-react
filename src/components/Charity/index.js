import React, { useState } from 'react'

import {
  Wrapper,
  Image,
  Footer,
  Title,
  Button,
  Modal,
  ButtonClose,
  Label
} from './styles'

const payments = [10, 20, 50, 100]

export default function Charity(props) {
  const { charity, onDonate } = props
  const [visible, setVisible] = useState(false)
  const [amount, setAmount] = useState(0)

  return (
    <Wrapper>
      <Image />

      <Footer>
        <Title>{charity.name}</Title>

        <Button id="btn-donate" onClick={() => setVisible(true)}>
          Donate
        </Button>
      </Footer>

      <Modal visible={visible}>
        <ButtonClose id="btn-close" onClick={() => setVisible(false)} />

        <Label>{`Select the amount to donate (${charity.currency})`}</Label>

        {payments.map((amount, index) => (
          <label key={`amount-option-item-${index}`}>
            <input
              id={`amount-item-${index}`}
              type="radio"
              name="payment"
              value={amount}
              onClick={(e) => {
                setAmount(e.target.value)
              }}
            />

            {amount}
          </label>
        ))}

        <Button
          id="btn-pay"
          onClick={() => onDonate(charity.id, amount, charity.currency)}
        >
          Pay
        </Button>
      </Modal>
    </Wrapper>
  )
}

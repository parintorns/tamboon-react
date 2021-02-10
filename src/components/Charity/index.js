/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import {
  Wrapper,
  Image,
  Footer,
  Title,
  Button,
  Modal,
  ButtonClose,
  Label,
  Body,
  Option
} from './styles'

import Message from 'components/Message'
import { CloseIcon } from './icons'

const payments = [10, 20, 50, 100]

export default function Charity(props) {
  const { charity, onDonate, message, setMessage } = props
  const [visible, setVisible] = useState(false)
  const [amount, setAmount] = useState(10)

  const [paid, setPaid] = useState(false)

  const handlePay = () => {
    onDonate(charity.id, amount, charity.currency)

    setPaid(true)
  }
  useEffect(() => {
    if (message !== '') {
      setTimeout(() => {
        setMessage('')
        setPaid(false)
        setVisible(false)
      }, 2500)
    }
  }, [message])

  return (
    <Wrapper>
      <Image src={`/images/${charity.image}`} />

      <Footer>
        <Title>{charity.name}</Title>

        <Button id="btn-donate" onClick={() => setVisible(true)}>
          Donate
        </Button>
      </Footer>

      <Modal visible={visible}>
        <ButtonClose id="btn-close" onClick={() => setVisible(false)}>
          <CloseIcon />
        </ButtonClose>

        <Body>
          <Label>{`Select the amount to donate (${charity.currency})`}</Label>
          <Option>
            {payments.map((payment, index) => (
              <label key={`payment-${charity.id}-option-item-${index}`}>
                <input
                  id={`payment-${charity.id}-option-item-${index}`}
                  type="radio"
                  name="payment"
                  value={payment}
                  checked={amount === payment}
                  onChange={(e) => {
                    setAmount(Number(e.target.value))
                  }}
                />

                {payment}
              </label>
            ))}
          </Option>

          {!paid ? (
            <Button id="btn-pay" onClick={handlePay}>
              Pay
            </Button>
          ) : (
            <Message message={message} />
          )}
        </Body>
      </Modal>
    </Wrapper>
  )
}

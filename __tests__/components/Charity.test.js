import React from 'react'
import { shallow } from 'enzyme'

import CardDonate from '../../src/components/Charity'
import { Modal } from '../../src/components/Charity/styles'

let wrapper

const props = {
  charity: {
    id: 1,
    name: 'Charity Name',
    currency: 'USD'
  },
  onDonate: jest.fn()
}

beforeEach(() => {
  wrapper = shallow(<CardDonate {...props} />)
})

describe('Render', () => {
  it('should render CardDonate', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

describe('Actions', () => {
  it('should open donate dialog', () => {
    const btnDonate = wrapper.find({ id: 'btn-donate' })

    expect(btnDonate).toHaveLength(1)

    btnDonate.simulate('click')

    expect(wrapper.find(Modal).prop('visible')).toBe(true)
  })

  it('should close donate dialog', () => {
    const btnClose = wrapper.find({ id: 'btn-close' })

    expect(btnClose).toHaveLength(1)

    btnClose.simulate('click')

    expect(wrapper.find(Modal).prop('visible')).toBe(false)
  })

  it('should select amount', () => {
    const inputAmount = wrapper.find({ id: 'payment-1-option-item-0' })

    expect(inputAmount).toHaveLength(1)

    inputAmount.simulate('click', { target: { value: 10 } })

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('should make payment', () => {
    const btnPay = wrapper.find({ id: 'btn-pay' })

    expect(btnPay).toHaveLength(1)

    btnPay.simulate('click')

    expect(props.onDonate).toHaveBeenCalledWith(1, 10, 'USD')
  })
})

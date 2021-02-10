import React from 'react'
import { shallow } from 'enzyme'

import Message from '../../src/components/Message'

let wrapper

const props = {
  message: 'This is a message'
}

beforeEach(() => {
  wrapper = shallow(<Message {...props} />)
})

describe('Render', () => {
  it('should render Spinner', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import Spinner from '../../src/components/Spinner'

let wrapper

const props = {}

beforeEach(() => {
  wrapper = shallow(<Spinner {...props} />)
})

describe('Render', () => {
  it('should render Spinner', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

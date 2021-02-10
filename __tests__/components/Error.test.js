import React from 'react'
import { shallow } from 'enzyme'

import Error from '../../src/components/Error'

let wrapper

const props = {}

beforeEach(() => {
  wrapper = shallow(<Error {...props} />)
})

describe('Render', () => {
  it('should render Spinner', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

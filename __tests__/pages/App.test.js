import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/pages/App'

let wrapper

const props = {}

beforeEach(() => {
  wrapper = shallow(<App {...props} />)
})

describe('Render', () => {
  it('should render App', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

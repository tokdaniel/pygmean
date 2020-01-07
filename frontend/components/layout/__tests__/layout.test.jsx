import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../'

describe('With Snapshot Testing', () => {
  it('Runs', () => {
    const component = renderer.create(<Layout />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

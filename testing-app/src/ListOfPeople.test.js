import { mount } from 'enzyme'
import ListOfPeople from './ListOfPeople'
import React from 'react'
import renderer from 'react-test-renderer'

test('it renders the heading', () => {
  const wrapper = mount(<ListOfPeople people={[]} />)
  expect(wrapper.find('h2').text()).toEqual(`List of Jack's Friends`)
})

test('it matches the snapshot', () => {
  const tree = renderer.create(
    <ListOfPeople people={[
      { id: 1, name: 'Jack', colour: 'blue' },
    ]} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})


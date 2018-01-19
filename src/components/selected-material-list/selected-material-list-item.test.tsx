import * as React from 'react'
import * as renderer from 'react-test-renderer'

import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

import SelectedMaterialListItem, { SelectedMaterialListItemProps } from './selected-material-list-item'

describe('SelectedMaterialListItem', () => {
  const material = 'test material'
  const id = 0
  const callback = jest.fn()

  it('should render with a callback', () => {
    const props: SelectedMaterialListItemProps = {
      material, id, callback
    }
    const tree = renderer.create(
      <SelectedMaterialListItem {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render without a callback', () => {
    const props: SelectedMaterialListItemProps = {
      material, id
    }
    const tree = renderer.create(
      <SelectedMaterialListItem {...props} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a list item with a cancel icon if there is a callback', () => {
    const props: SelectedMaterialListItemProps = {
      material,
      id,
      callback
    }
    const listItem = Enzyme.shallow(
      <SelectedMaterialListItem {...props} />
    )
    expect(listItem.find('Icon')).toHaveLength(1)
  })

  it('renders no icon if there is no callback', () => {
    const props: SelectedMaterialListItemProps = {
      material, id
    }
    const listItem = Enzyme.shallow(
      <SelectedMaterialListItem {...props} />
    )
    expect(listItem.find('Icon')).toHaveLength(0)
  })
})
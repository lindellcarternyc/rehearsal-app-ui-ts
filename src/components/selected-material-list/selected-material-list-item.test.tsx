import * as React from 'react'
import * as renderer from 'react-test-renderer'

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
})
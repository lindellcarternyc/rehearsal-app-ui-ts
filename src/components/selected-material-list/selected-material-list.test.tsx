import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as enzyme from 'enzyme'
import * as adapter from 'enzyme-adapter-react-16'
enzyme.configure({adapter: new adapter()})

import SelectedMaterialList, { SelectedMaterialListProps } from './selected-material-list'
import SelectedMaterialListItem from './selected-material-list-item'

describe('SelectedMaterialList', () => {
  const material = [
    'test 1', 'test 2', 'test 3'
  ]
  const props: SelectedMaterialListProps = {
    material
  }
  it('should render a list with a removeCallback', () => {
    let _material = material
    const callback = (id: number) => {
      _material.slice(id, 1)
    }
    const _props: SelectedMaterialListProps = {...props, removeMaterial: callback}
    const list = renderer.create(
      <SelectedMaterialList {..._props} />
    )

    const tree = list.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a list without a callback', () => {
    const tree = renderer.create(
      <SelectedMaterialList {...props} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders the correct number of list items', () => {
    const list = enzyme.shallow(
      <SelectedMaterialList {...props}/>
    )
    expect(list.find(SelectedMaterialListItem)).toHaveLength(3)
  })
})
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import RehearsalPreviewListItem, {
  RehearsalPreviewListItemProps
} from './rehearsal-preview-list-item'

describe('RehearsalPreviewListItem', () => {
  it('should render a list item', () => {
    const props: RehearsalPreviewListItemProps = {
      startTime: '9:00',
      endTime: '13:00'
    }
    
    const div = document.createElement('div')

    ReactDOM.render(
      <RehearsalPreviewListItem {...props} />,
      div
    )
  })
})
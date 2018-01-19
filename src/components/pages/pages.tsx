// import * as React from 'react'

// import Page from '../page/page'

interface PagesProps {
  currentPage: string
  components: {[name: string]: JSX.Element}
}

const Pages = (props: PagesProps): JSX.Element | null => {
  const component = props.components[props.currentPage]

  if (component !== undefined) {
    return component
  } else {
    return null
  }
}

export default Pages
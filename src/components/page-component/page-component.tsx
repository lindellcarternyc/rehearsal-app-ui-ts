import * as React from 'react'
import { Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

interface PageComponentProps {
  content?: React.ReactNode
  // children
  title?: string
  subtitle?: string
  menuBar?: JSX.Element
}

const PageComponent = (props: PageComponentProps) => {
  const containerMarginTop = props.menuBar !== undefined ?
    '13rem' : '3rem'
  return (
    <div style={{marginTop: '3rem'}}>
      {props.menuBar && 
        (
          props.menuBar
        )
      }
      <Container style={{marginTop: containerMarginTop, marginBottom: '2rem'}}>
        {props.title &&
          <Header as='h2'>
            {props.title}
            <Header.Subheader content={props.subtitle} />
          </Header>
        }
        {props.content}
      </Container>
    </div>
  )
}

export default PageComponent
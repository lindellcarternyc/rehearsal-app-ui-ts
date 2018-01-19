import * as React from 'react'
import { Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

interface PageProps {
  children?: React.ReactNode
  title?: string
  subtitle?: string
  menuBar?: JSX.Element
}

const Page = (props: PageProps) => {
  const containerMarginTop = props.menuBar !== undefined ?
    '10rem' : '3.5rem'
  return (
    <div >
      {props.menuBar}
      <Container style={{marginTop: containerMarginTop, marginBottom: '2rem'}}>
        {props.title &&
          <Header as='h2'>
            {props.title}
            <Header.Subheader content={props.subtitle} />
          </Header>
        }
        {props.children}
      </Container>
    </div>
  )
}

export default Page
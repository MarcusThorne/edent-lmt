import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
`

const Card = styled.div`
  height: 100px;
  width: 100px;
`

function Cards() {
  return (
    <CardContainer>
      <Card>
        <h1>Title</h1>
      </Card>
    </CardContainer>
  )
}

export default Cards

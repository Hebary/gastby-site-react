
import * as React from "react"
import Layout from "../components/layout"
import IndexImg from "../components/indexImg"
import InitialContent from "../components/initialContent"
import useRooms from "../hooks/useRooms"
import RoomPreview from "../components/roomPreview"
import styled from "@emotion/styled"

const Title = styled.h1`
font-size: 5rem;
text-align: center;
margin: 4rem 0 0;
font-weight: 200;
text-transform: capitalize;
@media (max-width: 631px) {
  font-size: 4rem;
  margin-top: 0;
} 
`
const IndexPage = () => {

const data = useRooms()
  return (
    <Layout>
      <IndexImg />
      <InitialContent />

      <Title>find the best rooms best price</Title>
      <ul>
        {data.map(room => (
          <RoomPreview
            key={room.id}
            room={room}
          />
        ))}

      </ul>
    </Layout>
  )

  
}

export default IndexPage

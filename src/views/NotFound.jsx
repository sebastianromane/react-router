// nonexistent url view
import { Container } from "react-bootstrap";
import React from 'react'

const NotFound = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
    </Container>
  )
}

export default NotFound
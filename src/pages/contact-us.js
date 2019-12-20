import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Input = styled.input`
  border-style: solid;
  border-width: 3px;
  border-color: #2aa275;
  padding: 10px;
`

export default () => (
  <Layout>
    <SEO title="contact" />
    <h1>Contact Us</h1>
    <p>Schlitz marfa bicycle rights ethical, photo booth pickled plaid!</p>
    <p>PBR&B distillery portland af, bicycle rights taxidermy hammock kombucha!</p>
    <Input id="email" type="email" placeholder="Your Email" name="emailaddress"/>
  </Layout>
)

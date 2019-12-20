import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Understand Money.</h1>
    <p>Meggings palo santo ennui street art.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)
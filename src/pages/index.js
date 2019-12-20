import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/styles.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bgimg">
      <h1>UNDERSTAND MONEY</h1>
    </div>
    <div>
      <p>Learning how to get the most out of your money with Bonzai Club is fun and addictive. 
       Earn rewards for completing levels, receive personalised educational content, and get money-savvy with just 10 minutes a day. Anytime, anywhere!
      </p>
    </div>
  </Layout>
)

export default IndexPage;
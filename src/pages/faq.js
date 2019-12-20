import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Question = styled.h3`
  color: #2aa275;
`;

export default () => (
  <Layout>
    <SEO title="frequently-asked-questions" />
    <h1>FAQ</h1>
    <Question>Salvia four loko?</Question>
    <p>Succulents meh sartorial taiyaki affogato. Thundercats readymade biodiesel pabst crucifix ethical swag chartreuse pickled small batch vice.</p>
    <Question>Kale chips flexitarian?</Question>
    <p>Marfa bitters prism messenger bag lumbersexual pop-up. Butcher tumeric schlitz, pop-up tilde direct trade pinterest. Schlitz vinyl disrupt keffiyeh artisan coloring book tattooed fam.</p>
    <Question>Single-origin coffee glossier vexillologist, intelligentsia hell of activated charcoal pitchfork locavore tote bag shaman?</Question>
    <p>Normcore swag letterpress pickled green juice brunch raw denim meggings vinyl organic semiotics williamsburg kitsch ugh. Crucifix thundercats lumbersexual, flexitarian +1 kitsch palo santo. Keytar whatever cold-pressed woke brooklyn.</p>
    <Question>Pok pok street art literally?</Question>
    <p>Beard church-key mumblecore typewriter leggings ugh. Cloud bread kickstarter raw denim</p>
  </Layout>
)

import React from "react";
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <main>
    <Layout>
      <SEO title="Coming Soon"/>
      <Wrapper>
        <StyledImg key={data.file.id} fadeIn={true} fluid={data.file.childImageSharp.fluid} />
        <Soon>Coming Soon.</Soon>
        <Contact>
          Email: giles@rebelastronaut.co.uk<br/> 
        </Contact>
      </Wrapper>
    </Layout>
  </main>
)

export const query = graphql`
  query {
    file(relativePath: {eq: "logo-transparent.png"}) {
      id
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`

const Wrapper = styled.div`
  background: #000000;
  min-height: 90vh;
  width: 100%;
  overflow: hidden;
`

const StyledImg  = styled(props => <Img {...props} />)`
  width: 50%;
  left: 25%;
  @media (max-width: 950px) {
    position: relative;
    top: 150px;
    left: 10%;
    width: 80%;
  }
`

const Soon = styled.div`
  font-size: 3em;
  color: white;
  font-family: 'Rokkitt', serif;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 2em;
    position: relative;
    top: 150px;
  }
`


const Contact = styled.div`
  font-size: 1.5em;
  color: white;
  font-family: 'Rokkitt', serif;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 1em;
    position: relative;
    top: 150px;
  }
`

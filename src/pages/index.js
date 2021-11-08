import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import "normalize.css"
import "../assets/css/main.css"

import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
export default function Home() {
  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            ></StaticImage>
            <div className="hero-container">
              <div className="hero-text">
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
        <AllRecipes />
        </main>
      </Layout>
    </>
  )
}

export const TestStyled = styled.h3`
  color: orange;
  font-size: 10px;
  background-color: #000;
`

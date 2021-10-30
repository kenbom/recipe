import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "normalize.css"
import "../assets/css/main.css"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Layout>
        <TestStyled>
          <h3>Hello world! What a beautiful view!</h3>
        </TestStyled>
      </Layout>
    </>
  )
}

export const TestStyled = styled.h3`
  color: orange;
  font-size: 10px;
  background-color: #000;
`

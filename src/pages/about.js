import React from 'react'
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"

const About = () => {
    return (
      <Layout>
        <main classNamae="page">
          <section className="about-page">
            <article>
              <h2>I'm baby coloring book poke taxidermy</h2>
            </article>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
          </section>
          <Link to="/contact" className="btn" />
        </main>
        <StaticImage 
        src="../assets/images/about.jpeg" 
        alt="Person Pouring"
        className="about-img"
        placeholder="blurred"
        />
        


        
      </Layout>
    )
}

export default About

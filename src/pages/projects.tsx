import React from 'react'
import { Trail } from '../components/Animations/Trail'
import { Blockquote } from '../components/Blockquote/Blockquote'
import Layout, { Display } from '../components/Layout'
import { ListContainer } from '../components/ListContainer/ListContainer'
import { SEO } from '../components/seo'
import { VisibilitySensor } from '../components/VisibilitySensor/VisibilitySensor'

const Projects: React.FC = () => (
  <Layout display={Display.column}>
    <SEO title="Projects" />
    <section>
      <h2>Projects</h2>
      <p className="description">Some of the projects I’ve been working on</p>
      <div className="test">
        <ListContainer />
      </div>
    </section>
  </Layout>
)

export default Projects

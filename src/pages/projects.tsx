import React from 'react'
import { Trail } from '../components/Animations/Trail'
import { Blockquote } from '../components/Blockquote/Blockquote'
import Layout, { Display } from '../components/Layout'
import { ListContainer } from '../components/ListContainer/ListContainer'
import { SEO } from '../components/seo'

const Projects: React.FC = () => (
  <Layout display={Display.column}>
    <SEO title="Projects" />
    <section>
      <Trail title={`Projects`} />
      <p className="description">Check out what I’ve been working on</p>
      <div className="test">
        <ListContainer />
      </div>
    </section>
  </Layout>
)

export default Projects

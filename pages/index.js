import Layout from "../components/Layout";
import React from "react";
import Link from "next/link";

class Index extends React.Component {

  render() {
    return (
      <Layout>

          <div className="spacer _70"></div>
          <div className="parent">
            <div className="me">
              <h1>Anderson Leite</h1>
              <div className="circle01"></div>
              <div className="circle01 c2"></div>
              <div className="circle01 c3"></div>
            </div>
            <div className="description">
              <p>
                Currently working as a Senior Frontend Developer at <a target="_blank" href="https://www.apple.com/">Apple</a> in San Francisco, California.
                Previous to that, I was a Tech Team Lead at <a target="_blank" href="https://www.rga.com/">R/GA</a> where I worked with Google, Nike, Samsung and TIM.
                I’m passionate about web development from design to development.
                Thanks for stopping by, please <a target="_blank" href="https://twitter.com/anderson_leite">get in touch</a>.
              </p>
            </div>
          </div>

          <div className="areas">

            <div className="area">
              <h2>Linked in</h2>
              <p className="summary">Let's get in touch! I'll be happy to chat about web development and discuss new ideas.</p>
              <a className="area-link" target="_blanket" href="https://www.linkedin.com/in/leiteanderson/">
                <p>Linkedin</p>
                <div className="area-link-underline"></div>
              </a>
            </div>
            <div className="area">
              <h2>Projects</h2>
              <p className="summary">Work in <progress></progress>.</p>
              <Link href="/blog"><a className="area-link">
                {/*<p>work in progress</p>*/}
                <div className="area-link-underline"></div>
              </a></Link>
            </div>
            <div className="area">
              <h2>Codepen</h2>
              <p className="summary">I'm always coding some ideas on Codepen to explore animations, interactions, etc.</p>
              <a className="area-link" target="_blanket" href="https://codepen.io/andersonleite/">
                <p>Codepen</p>
                <div className="area-link-underline"></div>
              </a>
            </div>
            <div className="area">
              <h2>Photos</h2>
              <p className="summary">Work in <progress></progress>.</p>
              <Link href="/blog"><a className="area-link">
                {/*<p>work in progress</p>*/}
                <div className="area-link-underline"></div>
              </a></Link>
            </div>

          </div>

      </Layout>
    )
  }
}




export default Index

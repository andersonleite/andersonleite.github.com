import Layout from "../components/Layout";
import React from "react";
import Links from "../components/Links";

class Index extends React.Component {

  render() {
    return (
      <Layout>

        <div className="info-container">
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
            <Links />
          </div>
        </div>



      </Layout>
    )
  }
}




export default Index

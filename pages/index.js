import Layout from "../components/Layout";
import React from "react";
import PostItem from "../components/Post";
import Link from "next/link";

const Index = () => (
  <Layout>
    <section>
      <div className="social-links">
        <a className="social-link" target="_blank" href="https://www.instagram.com/andersonleite/">
          <div className="social-link-name">Instagram</div>
          <div className="social-link-underline"></div>
        </a>
        <a className="social-link" target="_blank" href="https://twitter.com/anderson_leite">
          <div className="social-link-name">Twitter</div>
          <div className="social-link-underline"></div>
        </a>
        <a className="social-link" target="_blank" href="https://github.com/andersonleite">
          <div className="social-link-name">Github</div>
          <div className="social-link-underline"></div>
        </a>
      </div>
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
        <div className="area">
          <h2>About this site</h2>
          <p className="summary">This is a web application is developed using React, Next.js, styled-components, Appolo, Yoga, GraphQL, Prisma, Heroku. wow!</p>
          <a className="area-link" target="_blank" href="https://github.com/andersonleite">View source</a>
        </div>
        <div className="area">
          <h2>Go to the Blog</h2>
          <p className="summary">I've been writing about web development web development web development since 2009.</p>
          <Link href="/blog"><a className="area-link">View posts</a></Link>
        </div>
        <div className="area">
          <h2>Codepen</h2>
          <p className="summary">I've been writing about web development web development web development since 2009.</p>
          <a className="area-link" target="_blanket" href="https://codepen.io/andersonleite/">Codepen</a>
        </div>
        <div className="area">
          <h2>Contact me</h2>
          <p className="summary">I've been writing about web development web development web development since 2009.</p>
          <a className="area-link" target="_blanket" href="https://www.linkedin.com/in/leiteanderson/">Linkedin</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Index

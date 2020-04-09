import Layout from "../components/Layout";
import React from "react";
import PostItem from "../components/Post";
import Link from "next/link";

class Index extends React.Component {

  toggleWork() {
    const work = document.querySelector('.work');
    work.classList.toggle('show')
  }

  render() {
    return (
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

          <div className="work">

            {/* APPLE ======== */}
            <div className="work-sub">
              <div className="logo">
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-512.png" alt="" width={20}/>
              </div>
              <div>
                <a href="http://www.apple.com/today" target="_blank">
                  <img className="case" src="https://images.squarespace-cdn.com/content/v1/58c8104186e6c04b4462649b/1521222559237-XO6UKG55CCL81WYCIPD6/ke17ZwdGBToddI8pDm48kDJ1VjlnFMJOXDLjfA_Mbfx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCvyAd1-5UQFnp8aARaJsULOfkQOx_uiEnv7E0FKSARKqIvygzshuTAfgev80IHLQ/Today+At+Apple?format=1000w" alt="" />
                </a>
              </div>
              <div>
                <p>
                  I joined the Retail team at Apple for the development of the <a target="_blank" href="http://www.apple.com/today">Today at Apple</a> platform. We have launched many phases of the project so far,
                  the last one was featuring <a href="https://www.apple.com/today/feature/augmentedrealities/" target="_blank">Augmented Reality</a> experiences in the stores. My responsabilities at the project
                  goes from implementing frontend production code, new features, code reviews and deployments.
                </p>
                <br/>
                <p>
                  Technologies: React, Node.js, Typescript, SSR, Webpack, SASS.
                </p>
              </div>
            </div>

            {/* R/GA ======== */}
            <div className="work-sub">
              <div className="logo">
                <span className="rga"></span>
              </div>
              <div>
                <div className="cases no-gap">
                  <div className="work-img no-gap">
                    <a href="https://www.rga.com/work/case-studies/tim-mini-blablablametro" target="_blank">
                      <img className="case" src="/static/images/timbeta.png" alt="" />
                    </a>
                  </div>
                  <div className="work-img no-gap">
                    <a href="https://www.rga.com/work/case-studies/nike-vem-junto" target="_blank">
                      <img className="case" src="/static/images/vemjunto.png" alt="" />
                    </a>
                  </div>
                  <div className="work-img no-gap">
                    <a href="https://www.rga.com/work/case-studies/samsung-galaxy-11" target="_blank">
                      <img className="case" src="/static/images/galaxy.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="no-gap">
                  <p className="work-copy">
                    At R/GA I learned how collaboration is important for creative projects. Working as a technologist in creative teams composed by UX/Visual designers, copywriters and producers, I would
                    brainstorm and prototype ideas, for example, calculating happiness based on your smile with face recognition technics for Pepsico, to social media dashboards and virtual foosball table prototypes.
                  </p>
                  <br/>
                  <ul>
                    <li>The <a href="https://www.timbeta.com.br" target="_blank">TIM Beta</a> platform is a world award winner project developed for one of the biggest mobile carrier companies in Brazil. I had the pleasure to work
                      with amazing UX and Visual designers, being a technologist on the creative team. My responsibilities were to develop prototypes, define features, create ranking algorithms, etc. We won many awards with this project, including
                      a <a href="https://www.webbyawards.com/winners/2013/social/general-excellence-categories/customer-service/tim-beta/?/" target="_blank">Webby Award</a>.</li>
                    <br/>
                    <li>Another great project I participated from the conception to final production product was the <a
                      href="https://www.rga.com/work/case-studies/nike-vem-junto" target="_blank">Nike Vem Junto</a> website. This platform allowed people to create thematic races and invite people to join. My responsibilities
                    were from the conception of the project (at Nike Portland HQ) to the implementation. As a Tech Team Lead I worked as a Creative Technologist with UX/Visual Designers and copywriters to idealize and deliver the experience.</li>
                    <br/>
                    <li>Samsung was another brand that I had the opportunity to do prototype and production work. One of the projects that I really enjoyed to work was a web experience of a foosball table game controlled with your phone.
                    The <a href="https://www.rga.com/work/case-studies/samsung-galaxy-11" target="_blank">Galaxy 11</a> is another example of projects I worked for Samsung.</li>
                  </ul>
                  <br/>
                  <p>
                    Technologies: Javascript, Angular, Backbone, SASS, Ruby, Rails, Java.
                  </p>
                </div>
              </div>
            </div>

            {/* LABS ======== */}
            <div className="work-sub">
              <div className="logo">
                <span className="labs"></span>
              </div>
              <div>
                <div className="cases no-gap">
                  <div className="work-img no-gap">
                    <a href="https://www.amazon.com/Desenvolvimento-Jogos-para-Android-imagina%C3%A7%C3%A3o-ebook/dp/B00WL1G4WY" target="_blank">
                      <img className="case" src="/static/images/14bis.png" alt="" />
                    </a>
                  </div>
                  <div className="work-img no-gap">
                    <a href="https://www.youtube.com/watch?v=bd_IR_80HOA" target="_blank">
                      <img className="case" src="/static/images/labs_bubblin.png" alt="" />
                    </a>
                  </div>
                  <div className="work-img no-gap">
                    <a href="https://art-gallery-249520.appspot.com" target="_blank">
                      <img className="case" src="/static/images/labs_art.png" alt="" />
                    </a>
                  </div>
                  <div className="work-img no-gap">
                    <a href="https://www.novonerd.com.br/resenha-de-livro-olhar-com-malicia/" target="_blank">
                      <img className="case" src="/static/images/labs_olhar.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="no-gap">
                  <p className="work-copy">
                    I have the pleasure to be one of those people who love what they do for work. I have always a personal idea/project that I'm working on.
                  </p>
                  <br/>
                  <ul>
                    I wrote a book about how to <a href="https://www.amazon.com/Desenvolvimento-Jogos-para-Android-imagina%C3%A7%C3%A3o-ebook/dp/B00WL1G4WY" target="_blank">develop games using Android</a>. The book teaches you how to create a game where you control a spaceship and need to shoot meteors that are coming to
                    Earth. <a href="https://www.youtube.com/watch?v=bd_IR_80HOA" target="_blank">Bubblin</a> is a game that I developed in my spare time with friends. This game was featured at Apple Store and some game magazines.

                    <li>I like to create small projects to test technologies, user interactions, simple design, stories, etc. <a
                      href="https://art-gallery-249520.appspot.com" target="_blank">Art Gallery</a> is a simple mobile/responsive implementation of a photo gallery with animations and transitions in pure javascript.</li>
                    <br/>
                    <li>All this time working with so many creative people around made me want to explore other creative areas, like creative writing. I wrote a short novel called <a
                      href="https://www.novonerd.com.br/resenha-de-livro-olhar-com-malicia/" target="_blank">Olhar com Malicia</a>. It's a romance writen in Portuguese in 11 chapters.</li>
                    <br/>
                    <br/>
                    <li>Thanks for reading! You can find more about my carreer on <a href="https://www.linkedin.com/in/leiteanderson/" target="_blank">Linkedin</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="areas">

            <div className="area">
              <h2>Work</h2>
              <p className="summary">From prototypes to production code, I love to be part of collaborative teams. </p>
              {/*<a className="area-link" id="toggle-work" onClick={this.toggleWork}>*/}
              <a className="area-link" target="_blanket" href="https://www.linkedin.com/in/leiteanderson/">
                <p>Linkein</p>
                <div className="area-link-underline"></div>
              </a>

            </div>
            <div className="area">
              <h2>Go to the Blog</h2>
              <p className="summary">I've been writing about web development with different technologies on this blog since 2009.</p>
              <Link href="/blog"><a className="area-link">
                <p>View posts</p>
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
              <h2>Contact me</h2>
              <p className="summary">Let's get in touch! I'll be happy to chat about web development and discuss new ideas.</p>
              <a className="area-link" target="_blanket" href="https://www.linkedin.com/in/leiteanderson/">
                <p>Linkedin</p>
                <div className="area-link-underline"></div>
              </a>
            </div>

          </div>

        </section>
      </Layout>
    )
  }
}




export default Index

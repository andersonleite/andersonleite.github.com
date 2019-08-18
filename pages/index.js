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
                  Currently working as a Senior Frontend Developer at <a target="_blank" href="https://www.apple.com/">Apple</a> in San Francisco, California.
                  Previous to that, I was a Tech Team Lead at <a target="_blank" href="https://www.rga.com/">R/GA</a> where I worked with Google, Nike, Samsung and TIM.
                  I’m passionate about web development from design to development.
                  Thanks for stopping by, please <a target="_blank" href="https://twitter.com/anderson_leite">get in touch</a>.
                </p>
                <br/>
                <p>
                  Technologies: test,test,test,test,test,test,test,test.
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
                    Currently working as a Senior Frontend Developer at <a target="_blank" href="https://www.apple.com/">Apple</a> in San Francisco, California.
                    Previous to that, I was a Tech Team Lead at <a target="_blank" href="https://www.rga.com/">R/GA</a> where I worked with Google, Nike, Samsung and TIM.
                    I’m passionate about web development from design to development.
                    Thanks for stopping by, please <a target="_blank" href="https://twitter.com/anderson_leite">get in touch</a>.
                  </p>
                  <br/>
                  <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </ul>
                  <br/>
                  <p>
                    Technologies: test,test,test,test,test,test,test,test.
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
                    Currently working as a Senior Frontend Developer at <a target="_blank" href="https://www.apple.com/">Apple</a> in San Francisco, California.
                    Previous to that, I was a Tech Team Lead at <a target="_blank" href="https://www.rga.com/">R/GA</a> where I worked with Google, Nike, Samsung and TIM.
                    I’m passionate about web development from design to development.
                    Thanks for stopping by, please <a target="_blank" href="https://twitter.com/anderson_leite">get in touch</a>.
                  </p>
                  <br/>
                  <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="areas">

            <div className="area">
              <h2>Work</h2>
              <p className="summary">From prototypes to production code, I love to be part of collaborative teams. </p>
              <a className="area-link" id="toggle-work" onClick={this.toggleWork}>
                <p>View work</p>
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

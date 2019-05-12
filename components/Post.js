import PostStyle from "./styles/PostStyle";

const Post = () => (

  <PostStyle>
    <h2>UI development with Cycle | Refactoring the code (part 4)</h2>
    <p><small>03 january 2017</small></p>

    <h3>Cycle.js: Refactor (part 4)</h3>

    <p>
      This is the 4th part of a blog post series about RxJS and
        Cycle.js. <a href="/2017/01/03/ui-rx-cycle-part-I.html">Understanding RxJS (part 1)
      </a>, <a href="/2017/01/03/ui-rx-cycle-part-II.html">Meet Cycle.js (part 2)</a> and <a
        href="/2017/01/03/ui-rx-cycle-part-I.html">Cycle UI with RxJS and Cycle.js (part 3)</a>.
    </p>

    <h3>About this refactor</h3>
    <p>After I wrote this code using Cycle.JS and the blog posts, I received some cool
      feedback from <a href="https://twitter.com/chadrien">Hadrien de Cuzey</a> on how to improve it.
      I will share here and comment what I learned after that.
      If you wanna see it live, go to this <a href="https://jsbin.com/feqapa/edit?js,output">JSBin</a>.
    </p>

    <p>Now, let's see the implementation.</p>

    <h3>The new code</h3>
    Look below to the new code we have. In the top of the file we can see the first big difference:
    <span>CycleHTTPDriver</span>. This was for me the most important learning here. We can
    consider the HTTP requests as Observables and use the default code on <span>Cycle.js</span> to make
    the requests.

    <p>
      The other interesting point here is the use of <span>hyperscript</span> on view function.
      I've been exploring to see what's the best solution/good practice, but I fount that using
      the html helper elements (div, h1, p, etc) or the h function is basically a personal choice.
    </p>

    <script src="https://gist.github.com/andersonleite/238778d09fe51984df42e499f36b8830.js"></script>

    <h3>The Diff</h3>

    <p>
      In order to better understand the differece on the suggestions I created an online diff
      file. You can check it clicking on the image below.
    </p>

    <a href="https://www.diffchecker.com/eBMrYCJC" target="blank">
      <img width="300px" src="../static/images/diff.png" />
    </a>

    <p>
      Thanks again to <a href="https://twitter.com/chadrien">Hadrien de Cuzey</a> for the
      feedback and help here!
    </p>

  </PostStyle>
)

export default Post


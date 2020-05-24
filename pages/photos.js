import Layout from "../components/Layout";

export default function Photos() {
  return(
      <div>
        <Layout>
          {/*<p>Black Book</p>*/}

          <div className={`row`}>
            <div className="column">
              <img src="/photography/blackbook/001.jpg" style={{width:"100%"}} />
                <img src="/photography/blackbook/002.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/003.jpg" style={{width:"100%"}} />
                        <img src="/photography/blackbook/023.jpg" style={{width:"100%"}} />
                          <img src="/photography/blackbook/007.jpg" style={{width:"100%"}} />
            </div>
            <div className="column">
              <img src="/photography/blackbook/008.jpg" style={{width:"100%"}} />
                <img src="/photography/blackbook/009.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/010.jpg" style={{width:"100%"}} />
                    <img src="/photography/blackbook/011.jpg" style={{width:"100%"}} />
                      <img src="/photography/blackbook/012.jpg" style={{width:"100%"}} />
                        <img src="/photography/blackbook/013.jpg" style={{width:"100%"}} />
            </div>
            <div className="column">
              <img src="/photography/blackbook/020.jpg" style={{width:"100%"}} />
                <img src="/photography/blackbook/015.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/016.jpg" style={{width:"100%"}} />
                    <img src="/photography/blackbook/017.jpg" style={{width:"100%"}} />
                      <img src="/photography/blackbook/018.jpg" style={{width:"100%"}} />
                        <img src="/photography/blackbook/019.jpg" style={{width:"100%"}} />

            </div>
            <div className="column">
              <img src="/photography/blackbook/023.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/022.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/021.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/014.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/003.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/004.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/005.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/006.jpg" style={{width:"100%"}} />
              <img src="/photography/blackbook/007.jpg" style={{width:"100%"}} />

            </div>
          </div>
        </Layout>
      </div>
  )
}


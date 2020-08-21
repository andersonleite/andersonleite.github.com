import Layout from "../components/Layout";
import React, { Component } from 'react';


class Photos extends Component {
  componentDidMount() {

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
  render() {
  return(
      <div>
        <Layout>

          <div className={'photo-container'}>

            <button type="button" className="collapsible">RICO GR - 28mm</button>
            <div className="content">
              <img src="/photography/01/1.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/2.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/4.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/6.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/9.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/11.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/13.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/15.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/20.jpeg" style={{width: '200px'}} />
            </div>

            <button type="button" className="collapsible">Pentax K100 - 50mm</button>
            <div className="content">
              <img src="/photography/01/3.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/7.jpeg" style={{width: '200px'}} />
            </div>

            <button type="button" className="collapsible">Sony A7 - 50mm</button>
            <div className="content">
              <img src="/photography/01/5.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/8.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/10.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/12.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/14.jpeg" style={{width: '200px'}} />

              <img src="/photography/01/16.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/17.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/18.jpeg" style={{width: '200px'}} />
              <img src="/photography/01/19.jpeg" style={{width: '200px'}} />
            </div>

            <button type="button" className="collapsible">Black Book</button>
            <div className="content">
              <div className={`row`}>
                <div className="column">
                  <img src="/photography/blackbook/000.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/001.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/005.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/009.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/013.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/017.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/021.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/025.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/029.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/033.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/037.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/041.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/045.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/046.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/050.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/054.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/058.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/060.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/068.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/072.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/076.jpg" style={{width:"100%"}} />

                </div>
                <div className="column">
                  <img src="/photography/blackbook/002.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/006.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/010.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/014.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/018.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/022.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/026.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/030.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/034.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/038.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/042.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/051.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/055.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/059.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/061.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/069.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/073.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/077.jpg" style={{width:"100%"}} />
                </div>
                <div className="column">
                  <img src="/photography/blackbook/003.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/007.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/011.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/015.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/019.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/023.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/027.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/031.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/035.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/039.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/043.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/048.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/052.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/056.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/062.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/066.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/070.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/074.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/078.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/081.jpg" style={{width:"100%"}} />
                </div>
                <div className="column">
                  <img src="/photography/blackbook/004.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/008.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/012.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/016.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/020.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/024.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/028.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/032.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/036.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/040.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/044.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/049.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/053.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/057.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/063.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/067.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/071.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/075.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/079.jpg" style={{width:"100%"}} />
                  <img src="/photography/blackbook/080.jpg" style={{width:"100%"}} />
                </div>
              </div>
            </div>







          </div>


        </Layout>
      </div>
  )}
}

export default Photos

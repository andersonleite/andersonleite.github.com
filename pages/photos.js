import Layout from "../components/Layout";
import PhotosStyle from "../components/styles/PhotosStyle";


export default function Photos() {
  return(
    <PhotosStyle>
      <div>
        <Layout>
          <p>Black Book</p>

          <div className={`row`}>
            <div className="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width:"100%"}} />
                <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{width:"100%"}} />
                  <img src="https://www.w3schools.com/w3images/falls2.jpg" style={{width:"100%"}} />
                    <img src="https://www.w3schools.com/w3images/paris.jpg" style={{width:"100%"}} />
                      <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:"100%"}} />
                        <img src="https://www.w3schools.com/w3images/mist.jpg" style={{width:"100%"}} />
                          <img src="https://www.w3schools.com/w3images/paris.jpg" style={{width:"100%"}} />
            </div>
            <div className="column">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{width:"100%"}} />
                <img src="https://www.w3schools.com/w3images/ocean.jpg" style={{width:"100%"}} />
                  <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width:"100%"}} />
                    <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style={{width:"100%"}} />
                      <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{width:"100%"}} />
                        <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{width:"100%"}} />
            </div>
            <div className="column">
              <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width:"100%"}} />
                <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{width:"100%"}} />
                  <img src="https://www.w3schools.com/w3images/falls2.jpg" style={{width:"100%"}} />
                    <img src="https://www.w3schools.com/w3images/paris.jpg" style={{width:"100%"}} />
                      <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:"100%"}} />
                        <img src="https://www.w3schools.com/w3images/mist.jpg" style={{width:"100%"}} />
                          <img src="https://www.w3schools.com/w3images/paris.jpg" style={{width:"100%"}} />
            </div>
            <div className="column">
              <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{width:"100%"}} />
                <img src="https://www.w3schools.com/w3images/ocean.jpg" style={{width:"100%"}} />
                  <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width:"100%"}} />
                    <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style={{width:"100%"}} />
                      <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{width:"100%"}} />
                        <img src="/underwater.jpg" style={{width:"100%"}} />
            </div>
          </div>
        </Layout>
      </div>
    </PhotosStyle>
  )
}


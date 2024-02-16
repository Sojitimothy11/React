import Portfolio from "./portfolio";
import src from "../images/photo1.png"

const Home=()=>{

  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 desription">
              <h1>ADEYEMO ADESOJI TIMOTHY<br/><br/> A WEB DEVELOPER</h1>
              <p>A Resident of Number 6, Emmanual Kolawole street Lagos-Mainland. </p>

            <a href="mailto:timothysoji1@gmail.com">  <button className="btn btn-lg hire btn-primary">HIRE ME</button></a>
           <a href="./portfolio"><button className="btn btn-lg view">VIEW PORTFOLIO</button></a>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img src={src} alt="src" width="50%"/>


            </div>
        </div>
    </div>

  )
}

export default Home;
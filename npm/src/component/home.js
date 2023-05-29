import src from "../images/photo1.png"

const Home=()=>{
  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 desription">
              <h1>I AM ADEYEMO ADESOJI <br/><br/> A WEB DESIGNER</h1>
              <p>A Resident of Number 6, Emmanual Kolawole street Lagos-Mainland. </p>

              <button className="btn btn-lg hire btn-primary">HIRE ME</button>
              <button className="btn btn-lg view">VIEW PORTFOLIO</button>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img src={src} alt="src" width="50%"/>


            </div>
        </div>
    </div>

  )
}

export default Home;
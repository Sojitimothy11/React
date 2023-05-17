import src from "../images/photo2.png"

const Portfolio=()=>{
  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 desription">
              <h1>PORTFOLIO</h1>
              <h4>AVAILABLE FOR EMPLOYMENT AND OPPORTUNITIES</h4>
      </div>        

            <div className="col-12 col-md-6 text-center">
              <img src={src} alt="src" width="50%" />


            </div>
        </div>
    </div>

  )
}

export default Portfolio;
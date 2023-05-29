import src from "../images/photo6.png"

const Services=()=>{
  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 desription">
              <h1>SERVICES</h1>
              <h4>UI/UX DESIGN</h4>
              <h4>DIGITAL MARKETING</h4>
              <h4>FULL STACK WEB DEVELOPMENT</h4>
            </div>

            <div className="col-12 col-md-6 text-center services">
              <img src={src} alt="src" width="50%"/>
            </div>
        </div>
    </div>

  )
}

export default Services;
import src from "../images/photo1.png"

const About=()=>{
  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 desription">
              <h1>ABOUT ME</h1>
              <p>I am open-minded and willing to learn, and strongly believe in the power of unity and collaboration in creating successful productions. In addition to my artistic abilities, I also have experience in management and information communication technology.</p>
            </div>

            <div className="col-12 col-md-6 text-center aboutMe">
              <img src={src} alt="src" width="40%"/>
            </div>
        </div>
    </div>

  )
}

export default About;
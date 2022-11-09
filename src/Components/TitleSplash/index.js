import Video from "./splashBG.mp4";
import './styles.scss';
  
  const TitleSplash = () => {
      return (
      <header>
        <div  className="container-fluid videoContainer">
          <video playsInline autoPlay muted className="videoBG">
            <source src={Video} type="video/mp4" />
          </video>
          <div className="col-12 headerContent text-center">
            <h1>mfk.</h1>
            <a href="#about"><h3>learn more</h3></a>
          </div>
        </div>
      </header>
      )
  }
  
  export default TitleSplash
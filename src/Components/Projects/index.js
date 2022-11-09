import ProjectCarousel from './ProjectCarousel';
import './styles.scss';

const Projects = () => {
  return (
    <section className='projects'>
      <div className="container" id="portfolio">
        <div className="row">
          <div className="col-12">
            <h1>Projects</h1>
            <p className="noteBelow fs-6 fst-italic">*NB: Our iO Academy group were called the Cuttlefish, so please excuse all the sea-related naming puns!</p>
          </div>
          <div>
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
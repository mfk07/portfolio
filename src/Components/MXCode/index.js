import MXCodeCarousel from './MXCodeCarousel';
import './styles.scss';

const MXCode = () => {
  return (
    <section className='mxcode'>
      <div className="container" id="portfolio">
        <div className="row">
          <div className="col-12">
            <h1>MXCode Projects</h1>
            <p className="mxNoteBelow fs-6 fst-italic">*NB: Several projects are still protected by NDAs as they are not yet in the public domain. A stock image has been used in these instances.</p>
          </div>
          <div>
            <MXCodeCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MXCode;
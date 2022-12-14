import Laptop from "./Laptop.jpeg";
import './styles.scss';

const About = () => {
    return (
        <div className="container about" id="about">
            <div className="row">
                <div className="col-12">
                    <h1 className="welcomeTitle">Welcome!</h1>
                </div>
            </div>
            <div className="row flex-row-reverse">
            <div className="col-lg-4 align-self-center">
                    <img src={Laptop} className="img-fluid aboutImage" alt="a laptop ready for work" />
                </div>
                <div className="col-lg-8">
                    <p className="mb-4">I'm Maria and I am venturing into the world of full-stack web development. After 15 years of working in Education and Children's Services, I decided I wanted a better work/life balance and my journey into web development began. I joined the <a href="https://io-academy.uk/courses/full-stack-track/" target="blank">iO Academy Full-Stack Track</a> in July 2022 and have been building up my portfolio through weekly tasks and challenges. </p>
                    <p className="mb-4">I hail from Australia and have been living in the UK for the last 10 years, most of those spent in the South-East. I have a 1-year-old daughter who keeps me on my toes, and two cats (who think they are human!), Einstein and Archimedes. It's hard to tell who rules the roost these days!</p>
                    <p>Please take a look at some of my projects in my <a href="#portfolio">portfolio</a> below, or drop me an <a href="mailto:maria@mxcode.co.uk">email</a> if you have any further questions.</p>
                </div>
            </div>
        </div>
    )
}

export default About
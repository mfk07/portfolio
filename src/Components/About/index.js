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
                    <p className="mb-4">I'm Maria and I am a full-stack web developer based in Haywards Heath, West Sussex. I hail from Australia and have been living in the UK for the last 11 years, with most of those spent in the South-East. I have a 2-year-old daughter who keeps me on my toes, and two cats (who think they are human!), Einstein and Archimedes. It's hard to tell who rules the roost these days!</p>
                    <p className="mb-4">After 15 years of working in Education and Children's Services, I decided I wanted a better work/life balance and my journey into web development began. In early 2022 my wife (a dev of 9+ years) and I started our own small business, <a href="https://www.mxcode.co.uk" target="blank">MXCode</a>, a contract-based web development agency. My experience at the time was basic, so I made the decision to join the <a href="https://io-academy.uk/courses/full-stack-track/" target="blank">iO Academy Full-Stack Track</a> in July 2022, giving me a solid foundation in my journey of web and software development. I also completed my Scrum Master training as part of the course. After graduating from iOAcademy in October 2022 and building on my confidence with MXCode, I am now eager to expand my experience and knowledge by taking my first role in an established agency or company to see where this journey can take me next.</p>
                    <p>Please take a look at some of my projects in my <a href="#portfolio">portfolio</a> below, or drop me an <a href="mailto:maria@mxcode.co.uk">email</a> if you have any further questions.</p>
                </div>
            </div>
        </div>
    )
}

export default About
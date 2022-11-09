import AFL from './AFL.jpg';
import Quotlefish from './Quotlefish.jpg';
import DunkinBisquids from './DunkinBisquids.jpg';
import Seamail from './Seamail.jpg';

export const projects = [
    {
        title: 'AFL Collection',
        date: 'July 2022',
        description: 'The first real project of the Full Stack Track, we were tasked with developing individual sites displaying a collection of our choosing. We were heading towards the Australian Rules Football grand final, and so I decided to \'collect\' AFL grandfinal winners over the last 20 years. The site pulls data in from a MySQL database and displays the results using PHP, HTML and CSS. The data is also able to be edited or deleted from the front-end, and new grand final results added using the form at the bottom. These actions dynamically update the database in real-time.',
        url: "https://2022-mariak.dev.io-academy.uk/afl_grandfinal/",
        git: "https://github.com/mfk07/afl_grandfinals",
        tech: 'CSS | HTML | MySQL | PHP',
        images: AFL,
    },
    {
        title: 'Quotlefish',
        date: 'August 2022',
        description: 'A group-developed game utilising a MySQL database and powered by JavaScript alongside HTML and CSS. As a team, we worked together to create an interactive and engaging game. This was our first project working in a Scrum, with me acting as the qualified Scrum-Master. We made use of event handlers, modals and async functions to ensure smooth game play and easy user interface. Extra functionality such as a score counter and timer added to the overall appeal of the game, challenging players to get their best score in 30 seconds.',
        url: "https://dev.io-academy.uk/projects/2022-july/quotlefish/",
        git: "https://github.com/iO-Academy/2022-jul-guess-the-film",
        tech: 'CSS | HTML | JavaScript | JSON | MySQL',
        images: Quotlefish
    },
    {
        title: 'Seamail',
        date: 'August 2022',
        description: 'Combining the speed of React with the simplicity of Bootstrap, Seamail consumes an API and acts as the front-end for an email client. Though still in the early stages of development, the app allows users to differentiate between read and unread emails in the inbox, compose new emails and see all sent mail. The database updates dynamically throuhg user inputs.',
        url: "https://2022-seamail.dev.io-academy.uk/",
        git: "https://github.com/iO-Academy/2022-jul-seamail",
        tech: 'Bootstrap | CSS | HTML | JavaScript | React | SASS',
        images: Seamail
    },
    {
        title: 'Dunkin\' Bisquids',
        date: 'September 2022',
        description: 'An OOP project utilising SOLID principles to create a voting platform. We used hydrator entity patterns with composer to manage dependencies, styled the site with Bootstrap and dynamically updated the database in real-time to display the \'most dunked\' and \'most flunked\' biscuits. Clicking a biscuit opens a modal with additional information about the biscuit and a link to its Wikipedia page.',
        url: "https://dev.io-academy.uk/projects/2022-july/dunkin-bisquids/index.php#19",
        git: "https://github.com/iO-Academy/2022-jul-DunkinBisquids",
        tech: 'Bootstrap | CSS | HTML | MySQL | OOP | PHP', 
        images: DunkinBisquids
    },
];


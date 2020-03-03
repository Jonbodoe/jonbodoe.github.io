import jquery from '../../img/jquery-icon.svg';
import react from '../../img/react-brands.svg';
import css from '../../img/css3-brands.svg';
import html from '../../img/html5-brands.svg';
import bootstrap from '../../img/bootstrap-brands.svg';
import javascript from '../../img/js-brands.svg';
import php from '../../img/php-brands.svg';
import mysql from '../../img/database-solid.svg'
import adobe from '../../img/adobe.svg'


const web = "web"
const webDev = 'Web Development';
const webDesign = 'Web Design'

const illustration = 'illustration';
const graphic = 'graphics';
const typography = "Typography";
const concept = "Concept";
const digital = 'Digital';
const paint = "Paint";

const works = [

    // WEBBBBBBBBB
    {
        mainImg: 'railpix1.png',
        title: 'Content Management System',
        topic: 'RailPix',
        url: 'rail-pix',
        objective: 'Created a content management system using PHP / MySQL with CRUD functionalities',
        process: 'The requirements were that it had to be written in PHP with MySQL as a backend database. It involved utilizing techniques by importing and exporting components, as well as being able to use CRUD functionalities through the front-end interface that connects to MySQL. It also required to use dynamic data by using super-globals to determine the output on specific pages as well as using an encrypted login system. The database itself had to be created specifically to be rational to other databases, as well being separated based on its use-case.',
        design: 'The hardest aspect of designing a website is knowing the website\'s capabilities when Bootstrap. Throughout the designing process, I kept in mind how Bootstrap v4 works as a grid-like system and to adapt my UI\'s and widgets to their style.',
        development: 'When it came to development, making the PHP code more concise and refactored was quite a difficult task. As an aspiring developer, I try my best to minimize redundancies unless it\'s necessary or I couldn\'t find a way out. I implemented cases of separating everything into components, making functions perform one task only, and minimize call results from the MySQL database when necessary.',
        secondaryImg: 'railpix3.png',
        result: 'As a result, I built a photo tracking CMS plateform for tracking trains and its documented location',
        ternaryImg: 'railpix4.png',
        resultImg: 'railpix.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [bootstrap, php, mysql, javascript],
        supportImg: true,
        detailId: 1,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/RailPix',
        website: 'http://132.148.130.34/~jonathan/railpix/index.php',
        wireframes: true, 
        wireframesLink: 'https://projects.invisionapp.com/prototype/tracks-ck2qiytln006j02013mmzxwqb'
    },
    {
        mainImg: 'robotics.png',
        title: 'Website Development',
        topic: 'Intuitive Robotics',
        url: 'robotics',
        objective: 'Created developed dynamic website with PHP and Javascript functionalities',
        process: 'The concept of this project was to collaborate on a website that best utilizes responsive-design using HTML, CSS, Bootstrap, and Javascript. We had 3 members collaborating on this project, myself, Lesley Stiefel, and Sam Andrews. We delegated one group leader, Sam Andrew and we worked together based on our strengths in web design and development. I primarily focused on Web development and assisted on creating visual assests.',
        design: '',
        development: '',
        secondaryImg:'app.png',
        result: '',
        ternaryImg: 'app.png',
        resultImg: 'app.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, bootstrap, javascript],
        supportImg: true,
        listImgs: ['robotics1.png, robotics2.png, robotics3.png'],
        detailId: 2,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/FIRST',
        website:'https://jonbodoe.github.io/FIRST/src/index.html'
    },

    //  NOT COMPLETEDDDD //

    // {
    //     mainImg: 'airbnb.jpg',
    //     title:'',
    //     topic:'',
    //     description: '',
    //     objective: '',
    //     process:'',
    //     result:'',
    //     category: web,
    //     subCategory: webDev,
    //     primary: false,
    //     tools: 'Bootstrap, Javascript, Googlemaps Api',
    //     supportImg: false,
    //     detailId: null,
    //     githubRepo: true,
    //     githubLink: ''
    // },

    //  NOT COMPLETEDDDD //

    // {
    //     mainImg: 'artBoard.jpg',
    //     title:'',
    //     topic:'',
    //     description: '',
    //     objective: '',
    //     process:'',
    //     result:'',
    //     category: web,
    //     subCategory: webDev,
    //     primary: false,
    //     tools: 'Bootstrap, Javascript, React.Js, Redux, React-Router',
    //     supportImg: true,
    //     detailId: null,
    //     githubRepo: true,
    //     githubLink: ''
    // },




    {
        mainImg: 'reactlayout.png',
        title: 'React UI Web Application',
        topic: 'React Layout',
        url: 'react-layout',
        description: '',
        objective: 'Practicing to use React.JS Web Application involving state and props',
        process: '',
        design: '',
        development: '',
        secondaryImg:'',
        result: '',
        ternaryImg: '',
        resultImg: '',
        category: web,
        subCategory: webDev,
        primary: false,
        tools: [css, react],
        supportImg: true,
        detailId: null,
        githubRepo: true,
        githubLink: ''
    },
    {
        mainImg: 'concept.png',
        title: 'UX Design and Web Development',
        topic: 'Writers Block',
        url: 'writers-block',
        description: '',
        objective: 'Implement UX practices with classmates while creating a website w/ responsive design',
        process: '',
        design: '',
        development: '',
        secondaryImg:'',
        result: '',
        ternaryImg: '',
        resultImg: '',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, javascript],
        supportImg: true,
        detailId: 3,
        githubRepo: true,
        githubLink: ''
    },

    // Need to Redesign //

    {
        mainImg: 'adventure.png',
        title: 'Choose Your Adventure Project',
        topic: 'Day Dream',
        url: 'day-dream',
        description: '',
        objective: 'To lean how to use Javascript with conditional logic, seperation of concerns, closures and MVC practices',
        process: '',
        design: '',
        development: '',
        secondaryImg:'',
        result: '',
        ternaryImg: '',
        resultImg: '',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [javascript, jquery],
        supportImg: true,
        detailId: 4,
        githubRepo: true,
        githubLink: ''
    },

    // 

    {
        mainImg: 'herbie.png',
        title: 'Landing Pages',
        topic: 'Web Design',
        url: 'web-design',
        description: '',
        objective: 'To learn how to create visuals for landing pages that can be turned be created in development',
        process: '',
        design: '',
        development: '',
        secondaryImg:'',
        result: '',
        ternaryImg: '',
        resultImg: '',
        category: web,
        subCategory: webDesign,
        primary: false,
        tools: [adobe],
        supportImg: true,
        githubRepo: true,
        githubLink: ''
    },
    // {
    //     mainImg: 'newsBins.jpg',
    //     title:'',
    //     topic:'',
    //     description: '',
    //     objective: '',
    //     process:'',
    //     result:'',
    //     category: web,
    //     subCategory: webDesign,
    //     primary: false,
    //     tools: 'Illustrator',
    //     supportImg: true,
    //     githubRepo: true,
    //     githubLink: ''
    // },


    // GRAPHICSSSSSSSs



    // NOT COMPLETED
    {
        mainImg: 'itDontStop.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: typography,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'fitc.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: typography,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'life.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: concept,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'freight.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: concept,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'newsBins.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: concept,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'deskCode.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: concept,
        primary: false,
        tools: 'Illustrator',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'septa.jpg',
        title: '',
        topic: '',
        url: '',
        description: '',
        objective: '',
        process: '',
        result: '',
        category: graphic,
        subCategory: concept,
        primary: true,
        tools: 'Illustrator',
        supportImg: true,
        githubRepo: null,
        githubLink: ''
    },


    // Illustrationssnnnsnsnnsnsns


    {
        mainImg: 'shootinDice.jpg',
        description: '',
        category: illustration,
        subCategory: paint,
        primary: false,
        tools: 'Masonite Board, Paint',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'trainAndDragons.jpg',
        description: '',
        category: illustration,
        subCategory: paint,
        primary: false,
        tools: 'Hardstock paper, Paint, Ink',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'kodak.jpg',
        description: '',
        category: illustration,
        subCategory: digital,
        primary: false,
        tools: 'Photoshop',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
    {
        mainImg: 'stayChill.jpg',
        description: '',
        category: illustration,
        subCategory: paint,
        primary: false,
        tools: 'Masonite Board, Paint',
        supportImg: false,
        githubRepo: null,
        githubLink: ''
    },
]
export default works;


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
        mainImg: 'railpix.png',
        title: 'Content Management System',
        topic: 'RailPix',
        url: 'rail-pix',
        objective: 'To create a content management system using PHP / MySQL with CRUD functionalities',
        process: 'The requirements were that it had to be written in PHP with MySQL as a backend database. It involved utilizing techniques by importing and exporting components, as well as being able to use CRUD functionalities through the front-end interface that connects to MySQL. It also required to use dynamic data by using super-globals to determine the output on specific pages as well as using an encrypted login system. The database itself had to be created specifically to be rational to other databases, as well being separated based on its use-case.',
        result: 'As a result, I built a photo tracking CMS plateform for tracking trains and its documented location',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [bootstrap, php, mysql, javascript],
        supportImg: true,
        listImgs: ['railpix1.png, railpix2.png, railpix3.png'],
        detailId: 1,
        githubRepo: true,
        githubLink: ''
    },
    {
        mainImg: 'robotics.png',
        title: 'Website Design & Development',
        topic: 'Intuitive Robotics',
        url: 'robotics',
        objective: 'To create a responsive design website with PHP and Javascript functionalities',
        process: 'Talk about me and sam discussing starting a little company',
        result: '',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, bootstrap, javascript],
        supportImg: true,
        listImgs: ['robotics1.png, robotics2.png, robotics3.png'],
        detailId: 2,
        githubRepo: true,
        githubLink: ''
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
        result: '',
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
        result: '',
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
        result: '',
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
        result: '',
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


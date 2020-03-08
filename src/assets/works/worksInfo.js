import jquery from '../../img/jquery-icon.svg';
import react from '../../img/react-brands.svg';
import css from '../../img/css3-brands.svg';
import html from '../../img/html5-brands.svg';
import bootstrap from '../../img/bootstrap-brands.svg';
import javascript from '../../img/js-brands.svg';
import php from '../../img/php-brands.svg';
import mysql from '../../img/database-solid.svg'


const web = "web"
const webDev = 'Web Development';
// const webDesign = 'Web Design'

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
        date: '2019 / Junior Project',
        objective: 'Created a content management system using PHP / MySQL with CRUD functionalities',
        process: 'The requirements were that it had to be written in PHP with MySQL as a backend database. It involved utilizing techniques by importing and exporting components, as well as being able to use CRUD functionalities through the front-end interface that connects to MySQL. It also required to use dynamic data by using super-globals to determine the output on specific pages as well as using an encrypted login system. The database itself had to be created specifically to be rational to other databases, as well being separated based on its use-case.',
        design: 'The hardest aspect of designing a website is knowing the website\'s capabilities when Bootstrap. Throughout the designing process, I kept in mind how Bootstrap v4 works as a grid-like system and to adapt my UI\'s and widgets to their style.',
        development: 'When it came to development, making the PHP code more concise and refactored was quite a difficult task. As an aspiring developer, I try my best to minimize redundancies unless it\'s necessary or I couldn\'t find a way out. I implemented cases of separating everything into components, making functions perform one task only, and minimize call results from the MySQL database when necessary.',
        secondaryImg: 'railpix3.png',
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
        mainImg: 'robotics.jpg',
        title: 'Website Development',
        topic: 'Intuitive Robotics',
        url: 'robotics',
        date: '2019 / Junior Project',
        objective: 'Created developed dynamic website with PHP and Javascript functionalities',
        process: 'The concept of this project was to collaborate on a website that best utilizes responsive-design using HTML, CSS, Bootstrap, and Javascript. We had 3 members collaborating on this project, myself, Lesley Stiefel, and Sam Andrews. We delegated one group leader, Sam Andrew and we worked together based on our strengths in web design and development. I primarily focused on Web development and assisted on creating visual assests.',
        design: 'With the wireframes we collaborated on how to focus on the brand image. For the homepage we took references from several start up companies, brand websites, and even portfolio pages to understand how to make an appealing homepage with the right amount of important information shown and what should be shown towards the users',
        development: 'For myself I focused with the Web Development of the project as well as assisting Lesley and Sam with website and mobile designs. This project was focused on an idea, a mobile application that helps firefighters maintain forest fires using google maps api and PWA development. With the time constraint we were only able to make a functioning website, and mobile designs, however it taught us the value of how to efficiently work towards an end goal and be accepting of each others opinions. ',
        secondaryImg: 'robotics3.png',
        ternaryImg: 'robotics1.png',
        resultImg: 'robotics2.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, bootstrap, javascript],
        supportImg: true,
        listImgs: ['robotics1.png, robotics2.png, robotics3.png'],
        detailId: 2,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/FIRST',
        website: 'https://jonbodoe.github.io/FIRST/src/index.html'
    },

    {
        mainImg: 'reactlayout.png',
        title: 'React UI Web Application',
        topic: 'React Layout',
        url: 'react-layout',
        date: '2019 / Personal Project',
        objective: 'Practicing to use React.JS Web Application involving state and props',
        process: 'The concept of this project is to implement what I’ve learn from React.JS into a personal project. Throughout my web development journey I wanted to learn what does it mean building UI components within a website or app. I use freeCodeCamp, Codecademy, and YouTube tutorials trying to understand how React.JS works. ',
        design: '',
        development: 'I created a layout customizer on the website that allows users to change color palettes, typefaces, and the content itself dynamically on the page. I had to understand how React Components work using JSX, state and props to pass on to other components. It also gave me a brief introduction of how lifecycles work by using the lifecycle method “componentdidmount”. Despite some of its redundancies and some violations of mutating state directly, I learned how to use best practices moving forward by reading more into the documentation and implementing those changes in current projects.',
        secondaryImg: 'reactlayout1.png',
        ternaryImg: 'reactlayout2.png',
        resultImg: 'reactlayout.png',
        category: web,
        subCategory: webDev,
        primary: false,
        tools: [css, react],
        supportImg: true,
        detailId: null,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/ReactLayout',
        website: 'https://jonbodoe.github.io/ReactLayout/'
    },
    {
        mainImg: 'concept.jpg',
        title: 'UX Design and Web Development',
        topic: 'Writers Block',
        url: 'writers-block',
        date: '2019 / Sophmore Project',
        objective: 'Implement UX practices with classmates while creating a website w/ responsive design',
        process: 'The concept of this project was to use some UX processes when designing and developing the website. The project is a two part project where you are creating two sites, one showing the process of creating a website and the other is the finished website product itself. The website will show a list of images I’ve taken during my high school days of exploring the city',
        design: 'When creating this site, I had to make sure my designed wire frames were not overly complicated. I had to make sure that the designs I created is doable with a reasonable amount of CSS written. ',
        development: 'This class was a introduction to basic web design and development, using languages such as HTML, CSS and some JavaScript. We had to make sure our websites fit the criteria of having sound HTML structures as well as creating a responsive website',
        secondaryImg: 'concept1.jpg',
        ternaryImg: 'concept5.png',
        resultImg: 'concept2.jpg',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [html, css, javascript],
        supportImg: true,
        detailId: 3,
        githubRepo: true,
        githubLink: 'https://github.com/Jonbodoe/Process-Project',
        website: 'https://jonbodoe.github.io/Process-Project/indexprocess.html'
    },

    // Need to Redesign //

    {
        mainImg: 'adventure.png',
        title: 'Choose Your Adventure Project',
        topic: 'Day Dream',
        url: 'day-dream',
        date: '2018 / Sophmore Project',
        objective: 'To use Javascript basic conventions with MVC practices',
        process: 'For this project I wanted to use JavaScript to create an interactive story of Pixel images I’ve created. I wanted to experiment what JavaScript was capable of doing outside of just basic website interactivity. ',
        design: 'Creating each pixel image was quite difficult as developing the project in some cases. I wanted to maintain a retro gaming style so I had to make sure the styles of the images as well as the website itself matched the style',
        development: 'Previously I did a similar project of this in my introduction to JavaScript. However I wanted to use some of the practices I’ve learned over the years and recreate it more efficiently. I applied a MVC-like practice, reduce redundancies,  as well as trying to reuse components / functions more ',
        secondaryImg: 'adventure.png',
        ternaryImg: 'adventure.png',
        resultImg: 'adventure.png',
        category: web,
        subCategory: webDev,
        primary: true,
        tools: [javascript, jquery],
        supportImg: true,
        detailId: 4,
        githubRepo: true,
        githubLink: ''
    },


    // GRAPHICSSSSSSSs
    {
        mainImg: 'herbie.png',
        title: 'Landing Pages',
        topic: 'Personal Project',
        level: '2019',
        url: 'web-design',
        description: 'Practiced how to make landing pages for real & hypothetical brands',
        concept: 'When I first started learning web development and design, I wanted to get a better understanding of how to design visually appealing landing pages. I looked at several web design wireframes to understand that the visuals of the background can influence the overall feeling of the web design. I wanted to use photographs, my graphic illustrations and practiced different color palettes to create these landing web pages',
        listImg: ['city.png', 'herbie.png', 'artboard.png'],
        category: graphic,
        subCategory: typography,
        link:'',
        tools: 'Illustrator',
    },
    {
        mainImg: 'septathumb.png',
        title: 'Septa Branding Guidlines',
        topic: 'Student Project',
        level: 'Sophmore / 2018',
        url: 'septa',
        description: 'Created Branding Guildlines for Septa, possible logo designs and mobile UI designs',
        concept:'I wanted to design SEPTA’s Guidelines because it was an open canvas. Based on research SEPTA does not really follow or publicized a formal branding guiltiness for their company. Since I am a commuter to Thomas Jefferson University, primarily using SEPTA as a means to get to class, I thought it would cool to create a brand new guidelines for SEPTA. For this project there were 3 parts, creating logos, typography and color, and user interfaces for mobile and web.',
        logos: 'For the logos redesigns, I focused on using old railroad companies such as Chess Seaboard, Illinois Central, etc.. to help produce an appropriate transportation logo. In some of the logos I tried to represent the main railroad map of SEPTA, the cross like shape of BSL and MFL, and others represent the rail lines itself.',
        type: 'For typography I followed the concept of using railroad companies as a reference but also wanted to give it a more modern twist. I wanted to utilize both serif and san-serif when it comes to the typography of the brand while maintaining the regular color scheme of SEPTA. ',
        web: 'For SEPTA’s user interfaces for web, I wanted to create a more modern approach to their current website. Using more 2D elements, text over background images, fluid-sized designs, and etc..',
        objective: '',
        process: '',
        horizontalImgs: true,
        listImg: ['septa1.png', 'septa2.png', 'septa3.png', 'septa4.png', 'septa5.png', 'septa6.png'],
        category: graphic,
        subCategory: concept,
        tools: 'Illustrator',
    },
    {
        mainImg: 'trains.png',
        title: 'Concept Graphics',
        topic: 'Personal Project',
        level: '2019',
        url: 'concept-graphics',
        description: 'Created conceptual 2D graphics regarding environmental spaces, compositions, and colors',
        objective: '',
        process: '',
        listImg: ['landing2.png', 'trains.png', 'newsBins.png'],
        secondaryImg: 'life.jpg',
        category: graphic,
        subCategory: concept,
        link:'conceptgraphics.pdf',
        tools: 'Illustrator',
    },
    {
        mainImg: 'fitcthumb.png',
        title: 'FITC 2018 Conference',
        topic: 'Student Project',
        url: 'fitc',
        level: 'Freshman / 2018',
        description: 'Designed a hypothetical poster for the web development conference FITC',
        objective: '',
        process: '',
        horizontalImgs: true,
        listImg: ['fitc1.png', 'fitc2.png', 'fitc3.png'],
        category: graphic,
        subCategory: typography,
        primary: false,
        tools: 'Illustrator',
        supportImg: true,
    },


    // Illustrationssnnnsnsnnsnsns

    {
        mainImg: 'dice.jpg',
        title: 'Shootin\' Dice',
        description: 'Bad Dog and Big Bird doin\' bad things.',
        category: illustration,
        subCategory: paint,
        tools: 'Masonite Board, Paint',
    },
    {
        mainImg: 'dragon.jpg',
        title: 'Trains N Dragons',
        description: 'Trains and Dragons',
        category: illustration,
        subCategory: paint,
        tools: 'Hardstock paper, Paint, Ink',
    },
    {
        mainImg: 'kodak.png',
        title: 'Kodak',
        description: 'a boy with a wolf',
        category: illustration,
        subCategory: digital,
        tools: 'Photoshop',
    },
    {
        mainImg: 'chill.jpg',
        title: 'Stay Chill',
        description: 'A bird throwing up a peace sign',
        category: illustration,
        subCategory: paint,
        tools: 'Masonite Board, Paint',
    },
]

export default works;


// Figure out design solution for graphic design
// Wait til i get my pc back to re-do photos

// PHP project needs to add redirects


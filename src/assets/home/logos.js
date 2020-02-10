import React, {
  // useState, useEffect 
} from 'react';

const logos = [
  {
    title: 'React.Js',
    class: 'fab fa-react fa-6x',
    link: 'https://reactjs.org/'
  },
  {
    title: 'Javascript',
    class: 'fab fa-js fa-6x',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    title: 'PHP',
    class: 'fab fa-php fa-6x',
    link: 'https://www.php.net/'
  },
  {
    title: 'MySQL',
    class: 'fas fa-database fa-6x',
    link: 'https://www.mysql.com/'
  }
].map((logo) => {
  return <div className="col-sm-1 bg-dark d-flex h-100 justify-content-center" key={title}>
    <div className="align-self-center text-primary">
      <a href={logo.link} target="_blank" rel="noopener noreferrer">
        <i className={logo.class}></i>
        <h6 className="py-3 text-center font-weight-bolder">{logo.title}</h6>
      </a>
    </div>
  </div>
})
export default logos
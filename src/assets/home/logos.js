import React, {
  // useState, useEffect 
} from 'react';

const logos = [
  {
    title: 'React.Js',
    class: 'fab fa-react fa-7x p-2',
  },
  {
    title: 'Javascript',
    class: 'fab fa-js fa-7x p-2',
  },
  {
    title: 'PHP',
    class: 'fab fa-php fa-7x p-2',
  },
  {
    title: 'MySQL',
    class: 'fas fa-database fa-7x p-2',
  },
].map((logo) => {
  return <div className="d-flex h-100 justify-content-center" key={logo.title}>
    <div className="align-self-center text-light">
      <i className={logo.class}></i>
      {/* <h6 className="py-3 text-center font-weight-bolder">{logo.title}</h6> */}
    </div>
  </div>
})
export default logos
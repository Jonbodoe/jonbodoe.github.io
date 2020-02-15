import React from 'react';
import {
  //   BrowserRouter as Router,
  useParams
} from "react-router-dom";
import categories from '../home/category'

export default function WorkTitle() {
  // const [color, setColor ] = useState('')
  let { subId } = useParams();
  // console.log('hello')
  // useEffect(()=> {
  //   console.log(color)
  // })
  let title = categories.map(element => {
    return <React.Fragment key={element.id}>
      {subId === element.id ? element.title : ''}
    </React.Fragment>
  });
  // let background = categories.map(element => {
  //   return <React.Fragment key={element.id}>
  //     {subId === element.id ? element.img : ''}
  //   </React.Fragment>
  // });
  // let style = {
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundImage: `url(${background})`
  // }
  return <div className="text-center py-5 header-topic">
      <h1 className="font-weight-bolder pt-5 text-white">{subId.toUpperCase()}</h1>
      <h3 className="text-white">{title}</h3>
    </div>

}
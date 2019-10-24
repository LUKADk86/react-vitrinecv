import React from 'react';
import {Works, Workpart, Parttitle, Partdesc, Line, Workparticon} from './style';
import axios from 'axios'


class Work extends React.Component {
  state={
    workship:[]
  }


componentDidMount(){
  axios.get('js/data.json')
  .then(res=>this.setState({workship: res.data.works}))
}


  render(){
    const {workship}=this.state;
    const workList=workship.map((workitem)=>{
      return(
        <Workpart first={workitem.id} key={workitem.id} >
        <Workparticon className={workitem.icon_name}></Workparticon>
        <Parttitle>{workitem.title}</Parttitle>
        <Line/>
        <Partdesc>
            {workitem.body}
        </Partdesc>
    </Workpart>
      );
    })
   
  return (
    <Works>
    
            <div className="container">
              {workList}
            </div>
              
     </Works>
               
  );
}
}

export default Work;

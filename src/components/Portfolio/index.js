import React, {useState, useEffect} from 'react';
import {Portfolios, Portfoliotitle, Span, Overlay,Overlayspan, Img, Item, List, Box} from './style'
import Axios from 'axios';




const Portfolio=()=> {
 const [images, setImages] = useState([]);
 useEffect(() => {
   Axios.get('js/data.json').then((res)=>{
     setImages(res.data.portfolio)
   });
  
 }, [])
 const portoimages= images.map((item)=>{
  return(
    <Box key={item.id}>
    <Img src={item.image}alt=""/>
    <Overlay>
        <Overlayspan>
            Show Image
        </Overlayspan>
    </Overlay>
</Box>
  );
})
  return (
    <Portfolios>

      <Portfoliotitle><Span>My </Span>Portfolio</Portfoliotitle>
      <List>
          <Item>All</Item>
          <Item>HTML</Item>
          <Item>Photoshop</Item>
          <Item>Wordpress</Item>
          <Item>Mobile</Item>
      </List>
      
      <div>
          
          {portoimages}
          
      </div>
    
</Portfolios>
  );
}

export default Portfolio;

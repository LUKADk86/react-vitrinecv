import React from 'react';
import {Homeness, Information, Title, Info, Desc, Descspan, Btn } from './style'


const Home=()=> {
  return (
    <Homeness>
            <div className="container">
                <Information>
                    <Title className="home-title margin-bottom">Lounis KHADIR</Title>
                    <Info className="home-info">WEB developer</Info>
                    <Desc>
                        Iam a trainer <Descspan>React beginner</Descspan> and Back-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Desc>
                    <Btn className="home-btn">Let's Begin</Btn>
                </Information>
            </div>
        </Homeness>
  );
}

export default Home;

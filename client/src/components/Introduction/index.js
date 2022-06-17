import React from 'react'
import { Section,Container } from '../UI/Public'
import { BtnStyle } from '../UI/Button'
import { Title } from '../UI/Public'

import { IntroWrapper,ImageWrapper,TextStyle,TextWrapper } from './Intro'


const Intro = () => {
  return (
     <Section higher>
      <Container widther>

        <IntroWrapper>
            <ImageWrapper>
                <img src={require('../../image/Infosvg/undraw_Eating_together_re_ux62.png')}/>
            </ImageWrapper>
            <TextWrapper>
                <Title>GOOD FOOD FOR YOU</Title>
                <TextStyle>loremfasfasggpfdsgdsbdvrpwerpq</TextStyle>
                <BtnStyle >GO TO SHOP</BtnStyle>
            </TextWrapper>
        </IntroWrapper>  
      </Container> 
    </Section> 
 
  )
}

export default Intro
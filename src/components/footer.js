import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return (

            <StyleWrapper>
                <ContentWrapper> </ContentWrapper>
            </StyleWrapper>
        );
    }

}


export default Footer;

const StyleWrapper = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;

`
const ContentWrapper = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  background: 	#000000;
  color: white;
  padding-top: 30px;
  font-family: 'Rokkitt', serif;
  text-align: center;
`

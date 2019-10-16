import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    render() {
        return (
          <header>
            <StyleWrapper>
                <ContentWrapper>  </ContentWrapper>
            </StyleWrapper>
          </header>
        );
    }

}


export default Header;

const StyleWrapper = styled.div`
  // height: 100px;
  // width: 100%;
  overflow: hidden;

`
const ContentWrapper = styled.div`
  // height: 100px;
  // width: 100%;
  overflow: hidden;
  background: 	#000000;
  color: white;
  padding-top: 30px;
  font-family: 'Concert One', cursive;
  text-align: center;
`

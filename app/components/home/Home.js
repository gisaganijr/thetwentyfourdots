import React from 'react';
import styled from 'styled-components';
import NavigationMenu from "../navigation-menu/NavigationMenu"
import ContactMenu from "../ContactMenu/ContactMenu"
import "slick-carousel/slick/slick.css";
import HeaderMobile from '../header/mobile-header/HeaderMobile';
import { isWideScreen } from 'utils/isWideScreen';

function Home(props) {
  const slider = {index: '2', fontColor: '#ffffff', bgColor: '#138E91'};
    

  function renderDisplay(width) {
 
    return (
      // For Smaller Screen
      // <React.Fragment>
      //   <div>
      //     <HeaderMobile />
      //     <SlickCarousel mobile></SlickCarousel>
          
      //     {/* <ContactMenu></ContactMenu> */}
      //   </div>
      // </React.Fragment>

      
      // For Bigger Screen
      <React.Fragment>
        <div>aaaaaaaaaaaaaaaaaaaaa
{/*             
          <SlickCarousel></SlickCarousel>
          <NavigationMenuWrapper>
            <NavigationMenu slider={slider}></NavigationMenu>
          </NavigationMenuWrapper> */}
          
          {/* <ContactMenu></ContactMenu> */}
        </div>
      </React.Fragment>
    )
    
  }
  return ( 
    <div>
      {renderDisplay(props.width)}
    </div>
  )
}

export default Home
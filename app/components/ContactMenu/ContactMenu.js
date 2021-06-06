
import React, {useState} from 'react';
import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import CustomIconButton from 'components/CustomIconButton';
import { margin, iconSizeConfig } from 'variables';

import { ReactComponent as Behance } from 'components/icons/behance.svg';
import { ReactComponent as Facebook } from 'components/icons/facebook.svg';
import { ReactComponent as Linkedin } from 'components/icons/linkedin.svg';
import { ReactComponent as Instagram } from 'components/icons/instagram.svg';

export default function ContactMenu({selectedSlider, marginRight}) {
    const style = { display: "block", zIndex: 999, margin: "0 4px" }

    return (  
        <>
          <CustomIconButton icon={Instagram} style={style} onClick={()=> window.open("https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fthetwentyfourdots%2F%3Ffbclid%3DIwAR0uoOO0HTEQ-tZ3HFR494cO3qiywnc2SGB6mePBEbA5XQuyWvWT9GoIoc0&h=AT1LCqzhIdQUfS9FkW0xQKOWKyxTSBLfCEpx2iYWYqb0G7Vk0Sgri7lUI_fJVmeOULoPzvCY5b41JovGCstp3qdJleoxeoUoRWIasHzxGSZ0j46PVW-bP3g-lRwYFZNXhzI", "_blank")}/>
          <CustomIconButton icon={Linkedin} style={style} />
          <CustomIconButton icon={Behance} style={style} onClick={()=> window.open("https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.behance.net%2Fthetwentyfourdots%3Ffbclid%3DIwAR2ZaEZjq3CAkWR7uCQMtcHYWV5ccxg67oCA1kgKN11rnwSua-9omtiNcuI&h=AT1LCqzhIdQUfS9FkW0xQKOWKyxTSBLfCEpx2iYWYqb0G7Vk0Sgri7lUI_fJVmeOULoPzvCY5b41JovGCstp3qdJleoxeoUoRWIasHzxGSZ0j46PVW-bP3g-lRwYFZNXhzI", "_blank")}/>
          <CustomIconButton icon={Facebook} style={style} onClick={()=> window.open("https://www.facebook.com/DotsCreative/", "_blank")}/>
        </>
    );
}

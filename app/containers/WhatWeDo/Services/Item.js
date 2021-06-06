import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { contentMargin, contentMarginSmall, colors, divider } from 'variables';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { ReactComponent as DashBig } from 'images/DashBig.svg';
import { ReactComponent as CircleFilled } from 'images/CircleFilled.svg';
import P from 'components/P';
import CustomGrid  from 'components/CustomGrid';
import CustomSVG from 'components/CustomSVG';
import { useSpring, config, animated } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops'
import { render } from 'react-testing-library';
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';

const useStyles = makeStyles(theme => ({
  itemTextRoot: { 
    margin: '0px!important'
  },
  iconAlignItemsFlexStart: { 
    marginTop: '0px!important'
  },
  iconRoot: { 
    minWidth: 'unset!important',
    marginRight: '12px!important'
  },
}));

const StyledText = styled.h4`
  color: ${props => props.color};
`;

const ButtonWrapper = styled.div`
  ${props => props.isWideScreen && {
    position: "absolute",
    bottom: "0",
    left: "0",
  }}
`

const TitleAndServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.leftMargin && {"padding-left": props.leftMargin}}
`

const DashAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0rem 2rem 0rem 1rem;
`

const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`
const Item = ({widthCat, isWideScreen, idx, item, aniProps}) => {
  const classes = useStyles();
  const itemRef = useRef();
  const logoViewBox = item.logoViewBox.split(' ')
  const imageSizeForSmallScreen = '180px';
  const imageSize = isWideScreen ? '120px' : imageSizeForSmallScreen;
  const imageGridWidth = isWideScreen ? '100%' : imageSizeForSmallScreen;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkIfScrolled();
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  function handleScroll(e) {
    checkIfScrolled();
  }

  function checkIfScrolled() {
    const adjustment = 0.20;
    if (itemRef && itemRef.current !== null && itemRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolled(true);
    }
  }

  const getPageContent = (aniProps) => {
    return (
      <Grid 
        ref={itemRef} 
        key={item.id} 
        item sm={12} 
        style={{ width: '100%' }}
      >
        <Grid container
          direction="row"
          justify={isWideScreen ? "flex-start" : "center"}
          alignItems={isWideScreen ? "center" : "flex-start"}
          spacing={0}
          style={{
            width: '100%',
            ...aniProps ? aniProps : { opacity: 0 }} 
          }
        >
          <CustomGrid item md={2} sm={4} xs={12} 
            {...!isWideScreen ? { flex: true, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } : null}
          >
            <div 
              style={{
                width: imageSize, minWidth: imageSize, maxWidth: imageSize, 
                margin: !isWideScreen ? `${contentMargin}px 0px` : '0px',
                color: colors.veryDarkGray 
              }}
            >
              <CustomSVG 
                component={item.logo} 
                viewBox={item.logoViewBox} 
              />
            </div>
          </CustomGrid>
          { isWideScreen ?
            <>
              <Grid item lg={3} md={4} sm={4} xs={12} style={{width: '100%'}}>
                  <DashAndTitleWrapper >
                    <P 
                      fontType="bold" size="lg" widthCat={widthCat}
                      style={{ color: item.titleColor, minWidth: '100px', textAlign: 'center' }}
                    >
                      {item.title}
                    </P>
                    <div style={{width: '40px', minWidth: '40px', maxWidth: '40px', display: 'flex', color: item.titleColor }}>
                      <CustomSVG 
                        component={DashBig} 
                        viewBox="0 0 40 1" 
                        width={40}
                        height={1}
                      />
                    </div>
                  </DashAndTitleWrapper> 
              </Grid>
              <Grid item md={6} sm={12} style={{width: '100%'}}>
                <p>{item.longText}</p>
              </Grid>

              <Grid item md={2} sm={12} style={{width: '100%'}}>&nbsp;</Grid>
              <Grid item lg={3} md={4} sm={12} style={{width: '100%'}}>&nbsp;</Grid>
              
              <Grid item md={6} sm={12} style={{width: '100%'}}>
                {renderServices()}
              </Grid>
            </>
            :
            <>
              <Grid item sm={8} xs={12} style={{width: '100%', minHeight: '200px'}}>
                  <TitleAndServicesWrapper leftMargin={widthCat !== 'xs' ? contentMargin : undefined}>
                    <P 
                      fontType="bold" size="md" 
                      style={{ color: item.titleColor, marginTop: widthCat === 'xs' ? contentMargin : '0px'}}
                      noMargin={true}
                    >
                      {item.title}
                    </P>
                    <p>{item.longText}</p>
                    {renderServices()}
                  </TitleAndServicesWrapper>
              </Grid>
            </>
            
          }
          
          </Grid>
      </Grid>
    )
  }
  
  const renderServices = () => {
    function renderContent(item, aniProps) {
      return (
        <List 
          dense={true} 
          style={{
            ...aniProps ? aniProps : { opacity: 0 } 
          }}
        >
          <ListItem 
            key={`${item.title}-service-${item.id}`} 
            disableGutters={true} 
            alignItems="flex-start"
          >
            {!isWideScreen && 
              <ListItemIcon
                classes={{
                  root: classes.iconRoot,
                  alignItemsFlexStart: classes.iconAlignItemsFlexStart
                }}
              >
                <div style={{ marginTop: '15px', width: '10px', minWidth: '10px', maxWidth: '10px', height: '1px', display: 'flex', color: colors.veryDarkGray }}>
                  <CustomSVG 
                    component={DashBig} 
                    viewBox="0 0 10 1" 
                    width="10"
                    height="1"
                  />
                </div>
              </ListItemIcon>
            }
            <ListItemText
              classes={{
                root: classes.itemTextRoot
              }}
            >
              <P noMargin={true} style={{ color: colors.veryDarkGray }} fontType="bold" widthCat={widthCat}>
                {item.title}
              </P>
            </ListItemText>
          </ListItem>
        </List>
      )
    }
    
    return (
      isScrolled ?
        <Transition
          items={item.services} 
          keys={item => item.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={config.gentle}
          trail={250}
        >
          {item => props => renderContent(item, props)}
        </Transition>
      :
        item.services.map((service, idx) => {
          renderContent(service);
        })
    )
  }

  return (
    <CustomSpring
      startAni={isScrolled}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      spinnerColor={colors.veryDarkGray}
      config={{...config.gentle, duration: 1000}}
      renderAni={(aniProps) => getPageContent(aniProps)}
    />
  )

/* 
  return (
    isScrolled ? (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{...config.gentle, duration: 1000 }}
      >
        { props => (
            getPageContent(props)
        )}
      </Spring>
      
    ) : 
      getPageContent()
  ) */
}

export default React.memo(Item);
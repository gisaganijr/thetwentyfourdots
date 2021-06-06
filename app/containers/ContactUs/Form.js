import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { contentMargin, colors, outlinedButton } from 'variables';
import { config } from 'react-spring/renderprops';
import { CustomSpring, Curtain } from 'components/Spring/';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import CustomTextField from 'components/CustomTextField';
import { Checkbox, FormControlLabel , Grid } from '@material-ui/core'
import { minHeightOfContentWrappers } from './helpers';

const MainWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  min-height: ${minHeightOfContentWrappers};
  padding-top: ${props => props.isWideScreen ? '65px' : '24px'};
`

const Form = forwardRef(({isWideScreen}, ref) => {
  const [startAni, setStartAni] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setStartAni(true), 3000);
  }, [])

  return (
      <MainWrapper ref={ref} maxWidth={isWideScreen ? '50%' : '100%'} isWideScreen={isWideScreen}>
        <CustomSpring
          startAni={startAni}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.slow}}
          spinnerColor={colors.white}
          noLoader={true}
          renderAni={(aniProps) => (
            <div
              style={{
                ...aniProps ? {...aniProps} : { opacity: 0 } 
              }}
            >
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item md={6} xs={12}>
                  <CustomTextField 
                    label="NAME"
                    fullWidth
                    value=''
                    placeholder="Your name"
                    isWideScreen={isWideScreen}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                    <CustomTextField 
                      label="EMAIL"
                      fullWidth
                      value=''
                      placeholder="Leave us your email?"
                      isWideScreen={isWideScreen}
                    />
                </Grid>

                <Grid item xs={12}>
                    <CustomTextField 
                      label="COMPANY"
                      fullWidth
                      value=""
                      placeholder="Your company name"
                      isWideScreen={isWideScreen}
                    />
                </Grid>

                <Grid item xs={12}>
                    <CustomTextField 
                      label="DON'T BE SHY"
                      fullWidth
                      value=''
                      multiline
                      rows={5}
                      placeholder="Tell us about the project"
                      isWideScreen={isWideScreen}
                    />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    style={{ display:'table', marginRight: '0px'}}
                    control={
                      <div style={{display:'table-cell'}}>
                        <Checkbox                      
                          variant="outlined"
                          label={""}
                          onChange={(e) => {
                          }}
                        />          
                      </div>
                    }
                    label="By submitting this form you accept the conditions of Privacy policy of thetwentyfourdots"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomOutlinedButton {...outlinedButton.dark} bold={true} size="small">
                    Submit
                  </CustomOutlinedButton> 
                </Grid>

              </Grid>
            </div>
          )}
        />

        
      </MainWrapper>
  )
})

export default React.memo(Form);
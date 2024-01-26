
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Switch } from 'antd';
import { useState } from 'react';



export default function CustomizedSwitches() {
    const[isOn, setIsOn] = useState(false);

    const handleSwitchChange = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    }

    function switchDisplay(){
      return isOn? "ON" : "OFF";
    }

    return (
        <>
           <div className = "container">
                  <div className='second-container'>
                      <div className = "heading">
                            <p>The switch is :</p>
                            <h1>{switchDisplay()}</h1>
                        </div>
                          <FormGroup className = "theSwitch">
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Typography>Off</Typography>
                              <Switch
                              checked = {isOn}
                              onChange = {handleSwitchChange}
                              inputProps={{ 'aria-label': 'ant design' }} />
                              <Typography>On</Typography>
                            </Stack>
                      </FormGroup>
                  </div>
              </div>
        </>
    );
  }

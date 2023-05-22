import slider1 from "../assets/slider1.png"
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Contactus from "./Contactus/Contactus";
import Footer from "./Footer";
import { interiorImageList } from "../constants";
import { Card, CardContent, CardMedia, Typography, Tabs, Tab, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Interior = () => {
    const [activeImage, setActiveImage] = useState(1)
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div style={{width: `100%`}}>
            <div style={{height: `100vh`, background: `url(${slider1})`, backgroundSize: `cover`, display: `flex`, alignItems: `center`}}>
                <div style={{width: `50%`, height: `100%`, display: `flex`, alignItems: `center`}}>
                    <div style={{display: `flex`, flexDirection: `column`, color: `white`, justifyItems: `center`, padding: `30px`}}>
                        <h1 style={{fontSize: `60px`, fontWeight: `bolder`}}>BUILD YOUR</h1>
                        <br />
                        <h1 style={{fontSize: `60px`, fontWeight: `bolder`}}>DREAM</h1>
                        <br />
                        <h1 style={{fontSize: `80px`, fontWeight: `bolder`}}>INTERIOR</h1>
                    </div>
                </div>
                <div style={{width: `50%`, height: `100%`}}>
                    <Contactus title="Consult With Our Designer"/>
                </div>
            </div>
            <div style={{width: `60%`, margin: `auto`, display: `flex`, flexDirection: `column`, padding: `50px`}}>
                <div style={{padding: `20px`}}>
                    <span>Why Choose Us?</span>
                </div>
                <Grid container spacing={2} alignItems='center' justifyContent='center'>
                    <Grid xs={6} sm={6} md={3}>
                        <Card sx={{ border: "none", boxShadow: "none"}}>
                            <CardMedia
                                component="img"
                                height="100"
                                image="https://cdn-icons-png.flaticon.com/512/72/72907.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Price match guarantee
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6} sm={6} md={3}>
                        <Card sx={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn-icons-png.flaticon.com/512/2693/2693560.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                45 day move-in guarantee
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6} sm={6} md={3}>
                        <Card sx={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://st2.depositphotos.com/1431107/11748/v/950/depositphotos_117484076-stock-illustration-10-year-warranty-icon.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                15 year warranty
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6} sm={6} md={3}>
                        <Card sx={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn-icons-png.flaticon.com/512/310/310831.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                146 quality checks
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className="interior-designs">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {interiorImageList.map((item, index) => {
                                return <Tab label={item.name} {...a11yProps(index)}/>
                            })}
                        </Tabs>
                    </Box>
                    {interiorImageList.map((item, index) => {
                        return(
                            <TabPanel value={value} index={index}>
                                {item.name}
                            </TabPanel>
                        )
                    })}
                </Box>
            </div>
            <div>
                <div>
                    <h2>Packages</h2>
                </div>
            </div>
            <div className="get-estimate">
                <span>Get your estimate for the dream house now!</span>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Interior;
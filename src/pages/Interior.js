import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Contactus from "./Contactus/Contactus";
import Footer from "./Footer";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography, AppBar, Tabs, Tab, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    edgeFriction: 0,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false }
      }
    ]
  };

const pic1 = "https://assets.architecturaldigest.in/photos/622768e998dec323c94b61bb/16:9/w_1615,h_908,c_limit/How%20to%20design%20a%20small%20living%20room.jpg";
const pic2 = "https://media.designcafe.com/wp-content/uploads/2019/12/17055334/minimalistic-living-room-interior.jpg"
const pic3 = "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
const pic4 = "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80"

const bed1 = "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkcm9vbSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
const bed2 = "https://assets-news.housing.com/news/wp-content/uploads/2022/01/25201250/Master-bedroom-design-A-pictorial-guide-FB-1200x700-compressed.jpg"
const bed3 = "https://i.pinimg.com/originals/39/d8/b8/39d8b8d4037a1c1acc02d3183398eab4.jpg"
const bed4 = "https://loveincorporated.blob.core.windows.net/contentimages/gallery/bee3a290-e386-4480-939e-72659232b588-MM_black_bedroomideas.jpg"

const pictures = {
    livingRoom: [pic1, pic2, pic3, pic4],
    bedroom: [bed1, bed2, bed3, bed4],
    kitchen: [],
    bathroom: [],
    diningRoom: [],
    poojaRoom: []
}

const locations = [
    {name: 'Living Room', id: 'livingRoom'}, 
    {name: 'Bedroom', id: `bedroom`}, 
    {name: 'Kitchen', id: 'kitchen'}, 
    {name: 'Bathroom', id: `bathroom`}, 
    {name: 'Dining Room', id: 'diningRoom'}, 
    {name: 'Pooja Room', id: `poojaRoom1`}, 
    {name: 'Pooja Room', id: `poojaRoom2`},
    {name: 'Pooja Room', id: `poojaRoom3`},
    {name: 'Pooja Room', id: `poojaRoom4`},
    {name: 'Pooja Room', id: `poojaRoom`},
    {name: 'Pooja Room', id: `poojaRoom`},
]

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

    const [activeLoc, setActiveLoc] = useState({name: 'Living Room', id: 'livingRoom'});
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
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
                <Box sx={{ bgcolor: 'background.paper'}}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            {locations.map((item, index) => {
                                return <Tab label={item.name} {...a11yProps(index)} />
                            })}
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        {locations.map((item, index) => {
                            return <TabPanel>{item.name}</TabPanel>
                        })}   
                    </SwipeableViews>
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
import mainImage from '../../assets/promoterBanner.jpg'
import parking from '../../assets/parkingPlan.jpg'
import house from '../../assets/housePlan.jpg'
import map from '../../assets/map.png'
import buildingRender from '../../assets/promoterHouse.png'
import promoterFrontView from '../../assets/promotersFrontView.png'
import Footer from '../Footer'
import React, { useState } from "react";
import logoFull from '../../assets/logo.png'
import 
{ 
    Button, Modal, Box, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Grid, Typography 
} from '@mui/material'
import Contactus from '../Contactus/Contactus'
import { promoter_specDetails, promoters_payment_schedule, promoter_gmapURL, siteDistances, aboutProject } from '../../constants'

const style = {
    position: 'absolute',
    overflowY:'auto',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `auto`,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 0,
  };

  
const contactStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `auto`,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 0,
  };

const bannerStyles = {
    width: `100%`,
    height: `95vh`,
    background: `url(${mainImage})`,
    backgroundSize: `cover`,
    display: 'flex',
    alignItems: `center`,
    justifyContent: `center`,
    color: `white`,
    // backgroundColor: `#777777`,
    backgroundColor: `rgba(0,0,0,.6)`,
    backgroundBlendMode: 'multiply',
}

const Promoter = () => {
    
    const [activeLoc, setActiveLoc] = useState({name: 'Structure', id: 'structure'});
    const [contactModal, setContactModal] = useState(false);
    const [modalImage, setModalImage] = useState("")
    const [planModal, setPlanModal] = useState(false)

    const handleOpen = () => setContactModal(true);
    const handleContactClose = () => setContactModal(false);
    const handleGalleryClose = () => setPlanModal(false)
    
    const locations = [
        {name: 'Structure', id: 'structure'}, 
        {name: 'Flooring', id: `flooring`}, 
        {name: 'Painting', id: 'painting'}, 
        {name: 'Doors and Windows', id: `doorsAndWindows`}, 
        {name: 'Plumbing and Sanitary', id: `plumbing`}, 
        {name: 'Electrical', id: 'electrical'}, 
    ]

    const openImageModal = (image) => {
        setPlanModal(true)
        setModalImage(image)
    }
    
    return(
        <div className="promoters">
            <div style={bannerStyles}>
                <div className='promoter-header-logo'>
                    <img src={logoFull}></img>
                </div>
                <div className='promoter-header-content'>
                    <div className='promoter-header-content-logo'>
                        <p>"Nandavanam"</p>
                    </div>
                    <div className="promoter-header-misc">
                        <Grid container rowSpacing={2}>
                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>CMDA Approved</p>
                            </Grid>
                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>3 Floors</p>
                            </Grid>
                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>2 BHK</p>
                            </Grid>

                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>901 SQ.FT</p>
                            </Grid>
                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>6 Units</p>
                            </Grid>
                            <Grid xs={4}>
                                <p style={{paddingLeft: `60px`}}>February 2024</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className='promoter-about'>
                <h1>About project</h1>
                <p>{aboutProject}</p>
            </div>
            <div className='promoter-spec'>
                <h1>Project Specifications</h1>
                <div className='promoter-spec-div'>
                    <div style={{width: `20%`, display: `flex`, flexDirection: `column`, height: `100%`, borderBottom: `1px solid #eeeeee`}}>
                        {locations.map(item => {
                            return(
                                <div
                                    className={activeLoc.name === item.name ? 'promoter-spec-tabs-selected': 'promoter-spec-tabs'}
                                    onClick={() => {setActiveLoc(item)}}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className='promoter-spec-content'>
                        <ul style={{height: `100%`, margin: `10px`}}>
                            {promoter_specDetails[activeLoc.id].map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='promoter-plan'>
                <div className='promoter-plan-left'>
                    <h2>Project Gallery</h2>
                </div>
                <div className='promoter-plan-right'>
                    <img src={parking} onClick={() => openImageModal(parking)}/>
                    <img src={house} onClick={() => openImageModal(house)} />
                    <img src={buildingRender} onClick={() => openImageModal(buildingRender)} />
                    <img src={promoterFrontView} onClick={() => openImageModal(promoterFrontView)} />
                </div>
                <Modal
                    open={planModal}
                    onClose={handleGalleryClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <img src={modalImage} style={{maxWidth: `50vw`, overflow: `auto`}}/>
                    </Box>
                </Modal>
            </div>
            <div className='promoter-location'>
                <div className='promoter-location-left'>
                    <div className='promoter-location-left-top'>
                        <h2>Site Location</h2>
                    </div>
                    <div className='promoter-location-left-bottom'>
                        <table class="table table-sm">
                            <tbody>
                                {siteDistances.map(item => {
                                    return(
                                        <tr style={{color: `white`}}>
                                            <td>{item.place}</td>
                                            <td>{item.dist}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='promoter-location-right'>
                    <a href={promoter_gmapURL} target='_blank'><img src={map} /></a>
                </div>
            </div>
            <div className='promoter-payment'>
                <h2>Payment Schedule</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope='col'>Split Up</th>
                            <th scope='col' style={{textAlign: `right`}}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promoters_payment_schedule.map(item => {
                            if (item.name !== "Total")
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td style={{textAlign: `right`}}>{item.percent}</td>
                                    </tr>
                                )
                            else
                                return(
                                    <tr>
                                        <th>{item.name}</th>
                                        <th style={{textAlign: `right`}}>{item.percent}</th>
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='promoter-appointment'>
                <h1>Make an appointment with us for more details and site visits!</h1>
                <button type="button" class="btn btn-light m-3" onClick={handleOpen} >Book an Appointment</button>
                <Modal
                    open={contactModal}
                    onClose={handleContactClose}
                >
                    <Box sx={contactStyle}>
                        <Contactus 
                            title="Get in touch with us to know more about the project!"
                        />
                    </Box>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}
export default Promoter
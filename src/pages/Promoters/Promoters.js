import mainImage from '../../assets/promoterBanner.png'
import parking from '../../assets/parkingPlan.png'
import house from '../../assets/housePlan.png'
import map from '../../assets/map.png'
import Footer from '../Footer'
import React, { useState } from "react";
import logoFull from '../../assets/logo.png'
import 
{ 
    Button, Modal, Box, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Grid  
} from '@mui/material'
import Contactus from '../Contactus/Contactus'
import { promoter_specDetails, promoters_payment_schedule, promoter_gmapURL } from '../../constants'



const modalStyle = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // bgcolor: 'background.paper',
    // boxShadow: 24,
    // width: '40%',
    // p: 0,
    // m: 0
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
    backgroundColor: `rgba(0,0,0,.6)`,
    backgroundBlendMode: 'multiply',
}
  


const Promoter = () => {
    
    const [activeLoc, setActiveLoc] = useState({name: 'Structure', id: 'structure'});
    const [contactModal, setContactModal] = useState(false);
    const [modalImage, setModalImage] = useState("")
    const [planModal, setPlanModal] = useState(false)

    const handleOpen = () => setContactModal(true);
    const handleClose = () => setContactModal(false);
    
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
                                <p>CMDA Approved</p>
                            </Grid>
                            <Grid xs={4}>
                                <p>3 Floors</p>
                            </Grid>
                            <Grid xs={4}>
                                <p>2 BHK</p>
                            </Grid>

                            <Grid xs={4}>
                                <p>900 SQ.FT</p>
                            </Grid>
                            <Grid xs={4}>
                                <p>6 Units</p>
                            </Grid>
                            <Grid xs={4}>
                                <p>November 2023</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div>
                <span>About project</span>
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
                    <div style={{width: `80%`, color: `black`, fontSize: `15pt`, height: `100%`, paddingLeft: `20px`}}>
                        <ul style={{height: `100%`, margin: `0px`}}>
                            {promoter_specDetails[activeLoc.id].map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='promoter-plan'>
                <img src={parking} onClick={() => openImageModal(parking)}/>
                <img src={house} onClick={() => openImageModal(house)} />
                <Modal
                    open={planModal}
                    onClose={() => setPlanModal(false)}
                    closeAfterTransition
                    disableEnforceFocus
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <div style={{width: `50% `}}>
                        <img src={modalImage}/>
                    </div>
                </Modal>
            </div>
            <div className='promoter-location'>
                <span>Site Location</span>
                <div className='promoter-location-map'>
                    <a href={promoter_gmapURL} target='_blank'><img src={map} /></a>
                </div>
            </div>
            <div className='promoter-payment'>
                <span>Payment Schedule</span>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Split up</TableCell>
                                <TableCell align="left">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {promoters_payment_schedule.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.percent}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='promoter-appointment'>
                <span>Make an appointment with us for more details and site visits!</span>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={contactModal}
                    onClose={handleClose}
                    closeAfterTransition
                    disableEnforceFocus
                    // BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    {/* <Button style={{top: `0`, right: `0`, color: `white`}}>X</Button> */}
                    <Box sx={modalStyle}>
                        <Contactus />
                    </Box>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}
export default Promoter
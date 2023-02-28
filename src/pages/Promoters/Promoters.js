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

const specDetails = {
    structure: [
        'All exterior walls  are with 9” thick in CM 1:6', 
        'All partition walls will be of 4 ½” thick in CM 1:4 reinforced with 6mm dia Plain bar at every five course intervals',
        'Inner Wall plastering will be of in CM 1:4, Outer wall plastering will be of 1:5 and ceiling plastering will be in CM 1:3'
    ],
    flooring: [
        'vitrified tile of size 2"x2" vitrified tiles(Basic price per sqft Rs 90/)',
        'Toilet flooring will be of 1"x 1" size Johnson/Kajaria or equivalent ceramic tiles.  (Basic Price Rs.75/sq.ft)',
        'Glazed tiles for walls of bathroom  will be of size 12”x16” up to roof  height (Basic Price Rs. 80/sq.ft)',
        'Kitchen table finished by Jet black granite (Basic rate per sqft Rs.180/) with S.S. sink  Carysil make. 2 ft hight wall tiles will be provided. Kitchen and utility wall tile basic rate Rs.75/- per sqft'
    ],
    painting: [
        'All inner room walls & Ceilling will be finished with two coat of Asian Premium Emulsion paint over two coat of JK wall care and one coat of primer Asian or equalent',
        'All exterior walls  will be finished with two coat of Asian Ace Emulsion paint over 2 coats of primer',
        'Main door Varnish finish, Other door frames 1 coat primer , 2 coats putty and 2 coat Asian or Nippon  Enamel paint'
    ],
    doorsAndWindows: [
        '6” x 4” teak frame with teak panel doors, and all other  door frames will be of 4”x2½” Ghana Teak  wood and 30mm thick manufactured teak door',
        'All toilet door frames will be of 4”x 3”Teak frame wood and flush door with laminated finish',
        'All windows & Ventilators will be of UPVC open model with mild 16 mm steel grills at 1.75 kg per sqft'
    ],
    plumbing: [
        'The concealed water lines are CPVC  and open water lines are UPVC pipes',
        'The sewer lines are using 4” PVC pipes for closet line and 2.5” dia for waste water line',
        'Parryware sanitary fittings',
        'All toilet sunken  will be finished with a coat of water proof plastering to avoid any leakage and seepage',
    ],
    electrical: [
        'For all switches & sockets are Legrand – Lincaus brand',
        'Entire wiring will be of  “RR cables” fire proof',
        'Provision for switch over to inverter will be provided',

    ]
}

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

const mapURL = 'https://www.google.co.in/maps/@12.937502,80.1557643,15z/data=!5m1!1e1?hl=en&authuser=0'

const rows = [
    {name: "Booking", percent: "10%"},
    {name: "Agreement", percent: "5%"},
    {name: "Basement Completion", percent: "15%"},  
    {name: "Registration of UDS", percent: "10%"},
    {name: "Stilt Floor Completion", percent: "10%"},
    {name: "First Floor Roof Completion", percent: "10%"},
    {name: "Second Floor Roof Completion", percent: "15%"},
    {name: "Number 8", percent: "15%"},
    {name: "Flooring", percent: "5%"},
    {name: "Handing Over", percent: "5%"},
    {name: "Total", percent: "100%"},
];

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
                            {specDetails[activeLoc.id].map(item => {
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
                    <a href={mapURL} target='_blank'><img src={map} /></a>
                </div>
            </div>
            <div className='promoter-payment'>
                <span>Payment Schedule</span>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Split up</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.percent}</TableCell>
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
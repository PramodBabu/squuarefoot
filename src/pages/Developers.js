import Contactus from "./Contactus/Contactus";
import Footer from "./Footer";
import Timeline from "./Timeline";

const Developer = () => {
    return(
        <div className="developers">
            <div className="developers-banner">
                <div className="developers-banner-text">
                    <h1>Build your dream house</h1>
                </div>
                <div className="developers-banner-contact">
                    <Contactus title="Talk with the developers"/>
                </div>
            </div>
            <div className="developers-appointment">
                <h1>Make an appointment to meet with us</h1>
            </div>
            <div className="developers-timeline">
                <h1>How our Timeline works!?</h1>
                <Timeline />
            </div>
            <Footer />
        </div>
    )
}

export default Developer;
import logoFull from '../assets/logo.png'

const Footer = () => {
    return(
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xs-12 footer-about-company">
                        <a href="/">
                            <img className='footer-logo' src={logoFull}></img>
                        </a>
                    </div>
                    <div class="col-lg-4 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                            <li><a href="/developers">Developers</a></li>
                            <li><a href="/interior">Interiors</a></li>
                            <li><a href="/promoters">Promoters</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
                        <p><i class="fa fa-envelope-o mr-3"></i>squuarefoot@gmail.com</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col copyright">
                    <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
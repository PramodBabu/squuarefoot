import logo from '../assets/logoSymbol.png'
import logoText from '../assets/logoText.png'

const Navbar = () => {

  return(
    <div className="navbar navbar-default navbar-custom">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img class="navbar-img1" src={logo}></img>
            <img class="navbar-img2" src={logoText}></img>
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="">About Me</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contacts</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
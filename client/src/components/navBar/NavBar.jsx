import './navBar.css';
import home from '../../image/home.png';
// import logo2 from '../../image/logo2.png';

export function NavBar () {
    return (
        <div className="navBar" id="home">
            <header class="image-bg1" data-parallax="scroll" data-image-src="http://img03.deviantart.net/5b62/i/2016/333/b/5/img_1242bis_by_trin003-daq0py8.jpg">

        <nav class="navbar navbar-default navbar-fixed-top" data-spy="affix" data-offset-top="100">
          <div class="container">

            <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand page-scroll" href="#home">
                    {/* <img class="logo-blanc" src={logo} alt="Logo NTS Design"/> */}
                    <img class="home-btn" src={home} alt="home"/>  
              </a>
            </div>
              
            <div class="collapse navbar-collapse pull-right" id="myNavbar">
                <ul class="nav navbar-nav">
                  
                    <li class="hidden"><a class="page-scroll" href="#home"></a></li>
                    <li><a class="page-scroll" href="#about">About</a></li>
                    <li><a class="page-scroll" href="#folio">Portfolio</a></li>
                    <li><a class="page-scroll" href="#skills">Skills</a></li>
                    <li><a class="page-scroll" href="#cv">Courses</a></li>
                    <li><a class="page-scroll" href="#contact">Contact</a></li>
                </ul>
                <div class="social-network pull-right">
                <a href="https://www.linkedin.com/in/victor-pinto-fullstack/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/Victorpintowake" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                <a href="https://www.instagram.com/victorwake/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a> 
                <a href="https://github.com/victorwake" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a> 
              </div>
            </div>

          </div>

        </nav>

        <div class="container back-titre">
                <h1>Victor Pinto</h1>
                <p class="sous-titre">Developer Front-End & Back-End</p>
        </div>
      </header>
        </div>
    )
}
import './footer.css'
import map from '../../image/map.png'

export function Footer () {
    return (
        <div className="footer">
            <footer id="contact" data-parallax="scroll" data-image-src="http://img02.deviantart.net/115d/i/2016/336/d/4/feet_by_trin003-daqai2n.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Contact</h2>
                            <p>please contact me for more information.
                                </p> 
								<p class="conclusion">See you soon!</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <form role="form" id="footer-form" method="post" action="index.php">
									            <div class="form-group has-feedback">
										    <label class="sr-only" for="name2">Name</label>
										    <input type="text" class="form-control" id="name2" placeholder="Votre nom" name="name2" value="Name" required></input>
                                            {/* <p class='text-danger'>errName</p> */}
										    <i class="fa fa-user form-control-feedback"></i>
									        </div>
									        <div class="form-group has-feedback">
										    <label class="sr-only" for="email2">Email address</label>
										    <input type="email" class="form-control" id="email2" placeholder="Votre email" name="email2" value="Email" required></input>
                                            {/* <p class='text-danger'>$errEmail</p> */}
										    <i class="fa fa-envelope form-control-feedback"></i>
									        </div>
									        <div class="form-group has-feedback">
										            <label class="sr-only" for="message2">Message</label>
										            <textarea class="form-control" rows="8" id="message2" placeholder="Laissez votre message" name="message2" value='message' required></textarea>
                                                    {/* <p class='text-danger'>$errMessage</p> */}
										            <i class="fa fa-pencil form-control-feedback"></i>
								            </div>
									            <input type="submit" value="Send" name="submit" class="btn btn"></input>
                                                <div class="form-group">
                                                    <div class="col-sm-10 col-sm-offset-2">   
                                                    </div>
                                                    </div>
								        </form>
                                                </div>
                                                             <div class="col-md-6">
                                               <div class="row">
                                                   <img  src={map} alt="Carte de La ville de Lille"></img>
                                            </div>
                                   </div>
                                       <div class="row">
                                         <p class="email"><i class="fa fa-envelope" aria-hidden="true"></i></p>
                                         <p class="email">victorpintowake@gmail.com</p>
                                             <p class="social-network">
                                                <a href="https://www.linkedin.com/in/victor-pinto-fullstack/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a> 
                                                <a href="https://www.facebook.com/Victorpintowake" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                                <a href="https://www.instagram.com/victorwake/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a> 
                                                <a href="https://github.com/victorwake" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                                            </p>
                            
                                            </div>
                                          </div>
                                          </div>
                                         <div class="row">
                                     <p class="cr">©Copyright 2023 Victor Pinto</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
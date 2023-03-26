import './cv.css'

export function Cv () {
    return(
      <section class="cv" id="cv">
          <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>My courses</h2>
                    <img src="http://orig11.deviantart.net/bb6f/f/2016/335/5/0/jobs_icon_by_trin003-daq8q1f.png" alt="Icon expérience professionnelle"></img>
                    <div class="row"> 
                       <div id="myCarousel" class="carousel slide" data-interval="false">                  
                          <div class="carousel-inner" role="listbox">
                            <div class="item active">
                              <div class="col-md-4 col-sm-push-1">
                                  <p>Soy Henry<br/>
                                    <span class="date">ago. 2022 - feb. 2023</span><br/>
                                    Certification Full Stack Web Developer</p>
                              </div>
                              <div class="col-md-4">
                                  <p>Egg Cooperation <br/>
                                    <span class="date">jul. 2021 - may. 2022</span><br/>
                                    Certification Web Full Stack</p>
                              </div>
                              <div class="col-md-4 col-sm-pull-1">
                                  <p>Centro de e-Learning UTN FRBA<br/>
                                    <span class="date">may. 2021 - nov. 2021</span><br/>
                                    Certification Professional Webmaster</p>
                              </div>
                            </div>

                            <div class="item">
                              <div class="col-md-4 col-sm-push-1">
                                  <p>r/Argentina-programa <br/>
                                    <span class="date">ene. 2022 - abr. 2022</span><br/>
                                    SeProgramar</p>
                              </div>
                            </div>

                          </div>

                         
                          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                    </div> 
                    
                    <img src="http://orig02.deviantart.net/3a25/f/2016/335/a/4/school_icon_by_trin003-daq8p9q.png" alt="Icon expérience professionnelle"></img>
                    <div class="row">
                       <div id="myCarousel2" class="carousel slide" data-interval="false">
                          <div class="carousel-inner" role="listbox">
                            <div class="item active">
                              <div class="col-md-4 col-sm-push-1">
                              <p>EES N°3<br/>
                                    <span class="date">mar.2005 - nov.2007</span><br/>
                                    Bachiller en gestión y administración</p>
                              </div>
                              <div class="col-md-4">
                                  <p>Universidad Nacional Guillermo Brown<br/>
                                    <span class="date">feb. 2022 - (Cursando)</span><br/>
                                    Tecnicatura en programación</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <a href="https://github.com/victorwake/porfolio/raw/main/client/src/image/CV-VictorPinto-2023.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    class="btn btn-warning" 
                    role="button"
                    >CV download</a>
                </div>
            </div>
          </div>
      </section>

    )
}
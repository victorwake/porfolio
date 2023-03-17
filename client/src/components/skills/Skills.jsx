import './skills.css'
import html from '../../image/skills/html5.png'
import css from '../../image/skills/css.png'
import js from '../../image/skills/js.png'
import react from '../../image/skills/react.png'
import redux from '../../image/skills/redux.png'
import sequelize from '../../image/skills/sequelize.png'
import java from '../../image/skills/java.png'
import springboot from '../../image/skills/springboot.png'
import postgres from '../../image/skills/postgres.png'
import mysql from '../../image/skills/mysql.png'
import node from '../../image/skills/node.png'
import bootstrap from '../../image/skills/bootstrap.png'

export function Skills () {
    return (
        <section class="skills" id="skills">
          <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Skills</h2>
                        
                    <div class="row">
                        <div class="col-md-2">
                            <div class="circle">
                            <img src={html} alt="Logo HTML5"></img>
                            </div>
                            <h3>HTML5</h3>
                        </div>
                        <div class="col-md-2">
                            <img src={css} alt="Logo CSS3"></img>
                            <h3>CSS3</h3>
                        </div>
                        <div class="col-md-2">
                            <img src={js} alt="Logo JavaScript"></img>
                            <h3>JavaScript</h3>
                        </div>
                        <div class="col-md-2">
                            <img src={react} alt="Logo jQuery"></img>
                            <h3>React js</h3>
                        </div>
                        <div class="col-md-2">
                            <img src={redux} alt="Logo Redux"></img>
                            <h3>Redux</h3>
                        </div>
                        <div class="col-md-2">
                            <img src={sequelize} alt="Logo Sequelize"></img>
                            <h3>Sequelize</h3>
                        </div>
                        
                    </div> 
                    <div class="row"> 
                    <div class="col-md-2 ">
                            <img src={node} alt="Logo Node"></img>
                            <h3>Node</h3>
                        </div>
                        <div class="col-md-2 ">
                            <img src={java} alt="Logo Java"></img>
                            <h3>Java</h3>
                        </div>
                        <div class="col-md-2 ">
                            <img src={springboot} alt="Logo Springboot"></img>
                            <h3>Springboot</h3>
                        </div>
                        <div class="col-md-2 ">
                            <img src={postgres} alt="Logo Postgres"></img>
                            <h3>Postgres</h3>
                        </div>
                        <div class="col-md-2 ">
                            <img src={mysql} alt="Logo MySQL"></img>
                            <h3>MySQL</h3>
                        </div>
                        <div class="col-md-2 ">
                            <img src={bootstrap} alt="Logo Bootstrap"></img>
                            <h3>Bootstrap</h3>
                        </div>
                    </div> 
                </div>
            </div>
          </div>
      </section>
    )
}
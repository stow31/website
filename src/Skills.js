import { useState } from 'react';
import { LanguageList } from './data/_languages'
import { DatabaseList } from './data/_database'
import { SystemList } from './data/_system'
import { VersionList } from './data/_version'

import './Skills.css'

function Skills() {

  const [skillTab, setSkilltab] = useState("language")

  const handlesSkillTab = (e) => {
    let tab = "";
    if (e.target.className !== ""){
      tab = assignClassName(e.target.className)
    } else {
      tab = assignClassName(e.target.parentElement.className)
    }
    setSkilltab(tab)
  }

  const assignClassName = (className) => {
    return className.slice(0, className.indexOf('-'))
  }


  return (
    <div className="Content Content-skills">
        <h1>Skill</h1>
        <div className="tabs" onClick={ (e)=>handlesSkillTab(e) }>

          <div className={`language-tab ${skillTab === 'language' && 'active'}`}>
            <h3>Languages & Frameworks</h3>
          </div>

          <div className={`database-tab ${skillTab === 'database' && 'active'}`}>
            <h3>Database</h3>
          </div>

          <div className={`service-tab ${skillTab === 'service' && 'active'}`}>
            <h3>Version Management & Services</h3>
          </div>
          
          <div className={`system-tab ${skillTab === 'system' && 'active'}`}>
            <h3>System Experience</h3>
          </div>
          
        </div>

        {
          skillTab === "language" ?
            <div className="language">
              <div className="grid">
                {
                  LanguageList.map( skill =>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}${skill.imageUrl}`} alt={skill.altTag} />
                      <div>{skill.title}</div>
                    </div>
                  )
                }
              </div>
            </div>
          : skillTab === "database" ?
            <div className="database">
              <div className="grid">
                {
                  DatabaseList.map( skill =>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}${skill.imageUrl}`} alt={skill.altTag} />
                      <div>{skill.title}</div>
                    </div>
                  )
                }
              </div>
            </div>
          : skillTab === "service" ?
            <div className="service">
              <div className="grid">
                {
                  VersionList.map( skill =>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}${skill.imageUrl}`} alt={skill.altTag} />
                      <div>{skill.title}</div>
                    </div>
                  )
                }
              </div>
            </div>
          : skillTab === "system" ?
            <div className="system">
              <div className="grid">
                {
                  SystemList.map( skill =>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}${skill.imageUrl}`} alt={skill.altTag} />
                      <div>{skill.title}</div>
                    </div>
                  )
                }
              </div>
          </div> :
          ""              
        }
    </div>
  );
}
  
  export default Skills;
  
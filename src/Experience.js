import { useState } from 'react';

import './Experience.css'

function Experience() {

  const [experienceTab, setExperiencetab] = useState("work")

  const handlesExperienceTab = (e) => {
    let tab = "";
    if (e.target.className !== "") {
      tab = assignClassName(e.target.className)
    } else {
      tab = assignClassName(e.target.parentElement.className)
    }
    setExperiencetab(tab)
  }

  const assignClassName = (className) => {
    return className.slice(0, className.indexOf('-'))
  }

  return (
    <div class="Content Content-experience">
      <h1>Experience</h1>
      <div className="Content Content-experience">
        <div className="tabs" onClick={(e) => handlesExperienceTab(e)}>
          <div className={`education-tab ${experienceTab === 'education' && 'active'}`}>
            <h3>Education</h3>
          </div>
          <div className={`work-tab ${experienceTab === 'work' && 'active'}`}>
            <h3>Work</h3>
          </div>
        </div>

        {
          experienceTab === "education" ?
            <div className="experience education">
              <div className="experience-grid">
                <div>
                  <img src="/image/education/ga-logo.png" alt="" />
                </div>
                <div>
                  <h3>Software Engineering Immersive</h3>
                  <div>2021 General Assembly</div>
                </div>
              </div>
              <div className="experience-grid">
                <div>
                  <img src="/image/education/sydney-uni.png" alt="" />
                </div>
                <div>
                  <h3>Bachelor of Science | Environmental Science</h3>
                  <div>2017 University of Sydney</div>
                </div>
              </div>
            </div>
            : experienceTab === "work" ?
              <div className="experience work">
                <div className="experience-grid">
                  <div>
                    <a href="https://www.stockland.com.au" target="_blank" rel="noreferrer">
                      <img src="/image/work/stockland.png" alt="Stockland Logo" />
                    </a>
                  </div>
                  <div>
                    <h3>FRONT END DEVELOPER</h3>
                    <div>Stockland</div>
                    <div>2022 - current</div>
                    <div>
                      <ul>
                        <li>Participate in the initial set-up and implementation of a new pattern library including setting up design patterns with reusable design tokens to use across all components to keep consistent design and scalable component builds.</li>
                        <li>Adapt and build approximately 30 website components into the new pattern library using maintainable and high-quality code to complete website re-platform of the entire Stockland business unit.</li>
                        <li>Align all new components with WCAG 2.0 AA accessibility guidelines, internal SEO standards and cross-platform compatibility while following a consistent and scalable design pattern.</li>
                        <li>Work closely with a multi-functional team of designers, business analysts and website product managers to build components following business and design requirements using Figma and Azure DevOps.</li>
                        <li>Work closely with backend developers to integrate all components from the pattern library into the CMS platform.</li>
                        <li>Onboard and share knowledge with new team members while promoting and using best practices.</li>
                        <li>Worked with an Agile methodology with daily stand-ups, keeping track of user stories and bugs in Azure Devops, and participating in fortnightly sprint planning.</li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience-grid">
                  <div>
                    <a href="https://www.stockland.com.au" target="_blank" rel="noreferrer">
                      <img src="/image/work/stockland.png" alt="Stockland Logo" />
                    </a>
                  </div>
                  <div>
                    <h3>JUNIOR FULL STACK DEVELOPER</h3>
                    <div>Stockland</div>
                    <div>2021 - 2022</div>
                    <div>
                      <ul>
                        <li>
                          Delivering high quality software solutions in the iterative development process of the Website and innovative applications
                        </li>
                        <li>
                          Solve technical problems, identify root causes and quickly resolve issues
                        </li>
                        <li>
                          Conduct testing and QA
                        </li>
                        <li>
                          Participating in development and running of automation test cases
                        </li>
                        <li>
                          Ensuring all documentation (e.g. requirements, design, testing, operations, interface, user guide, etc.) is developed & maintained
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience-grid">
                  <div>
                    <a href="https://www.thedailyedited.com" target="_blank" rel="noreferrer">
                      <img src="/image/work/tde.jpeg" alt="The Daily Edited" />
                    </a>
                  </div>
                  <div>
                    <h3>TECHNICAL PROJECT MANAGER</h3>
                    <div>The Daily Edited</div>
                    <div>2016 - 2021</div>
                    <div>
                      <ul>
                        <li>
                          Implemented new software by identifying shortcomings in processes, data and behaviour. As a result of the shortcoming, I conducted reviews of internal processes and requirements. I evaluated these against products available in the market to assist with the issue, reviewing their integration requirements and financial impact on the business. The evaluation of options were presented to the directors, to enable their decision making in support of a system. When the business progressed with the product, I was responsible for the integration, user story testing, workflow breakdowns and training plans. Examples of systems include:
                          <ul>
                            <li>
                              A point-of-sale system that resulted in daily customers served to increase by 22%
                            </li>
                            <li>
                              An inventory management system that resulted in the average discrepancies during stocktake decrease by 41%
                            </li>
                            <li>
                              A loyalty program that resulted in the repeat purchase rate increase by 11%.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Worked closely with the design team to implement creative website content including campaign and promotional landing pages using HTML, CSS and JavaScript to increase brand awareness and boost sales. When linking promotions and/or campaigns to a custom-built landing page we saw the bounce rate decreased by 15% compared to linking it to a category or home page.
                        </li>
                        <li>
                          Debugged upgrades and features through systematic tests to develop and maintain quality standards. Enabling the successful deployment of 96% of all upgrades and features.
                        </li>
                        <li>
                          Created standardised system of ongoing data reviews for project and promotion evaluation, using Google Analytics, Microsoft Excel and Hotjar. Enabled projects and promotions over time to be more data-driven.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              : <></>
        }
      </div>
    </div>

  );
}

export default Experience;

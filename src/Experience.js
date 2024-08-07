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
          <div className={`freelance-tab ${experienceTab === 'freelance' && 'active'}`}>
            <h3>Freelance</h3>
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
                        <li>Adapt and build over 50 website components into the new pattern library using maintainable and high-quality code to complete website re-platform of the entire Stockland business unit.</li>
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
                    <h3>FULL STACK DEVELOPER</h3>
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
            : experienceTab === "freelance" ? 
              <div className="experience freelance">
                <div className='experience-grid'>
                  <div className='client-logos'>
                    <a href="https://www.haddaddrilling.com.au" target="_blank" rel="noreferrer">
                      <img src="/image/work/haddad-drilling.png" alt="Haddad Drilling Logo" />
                    </a>
                    <a href="https://www.stevecordony.com" target="_blank" rel="noreferrer">
                      <img src="/image/work/steve-cordony.png" alt="Steve Cordony Logo" />
                    </a>
                    <a href="https://www.rosedalefarm.net.au" target="_blank" rel="noreferrer">
                      <img src="/image/work/rosedale-farm.png" alt="Rosedale Farm Logo" />
                    </a>
                    <a href="https://www.ingeniumpeople.com.au/" target="_blank" rel="noreferrer">
                      <img src="/image/work/ingenium-people.png" alt="Ingenium People Logo" />
                    </a>
                    <a href="https://lovelisacelebrant.com/" target="_blank" rel="noreferrer">
                      <img src="/image/work/love-lisa.png" alt="Love Lisa Celebrant Logo" />
                    </a>
                  </div>
                  <div>
                    <h3>WEB DEVELOPER AND TECHNICAL CONSULTANT</h3>
                    <div className='clients'>
                      <div className='client'>
                        <div className='name'>Haddad Drilling</div>
                        <div>React, Tailwind, Git, CPanel, Microsoft, AWS</div>
                        <a href="https://www.haddaddrilling.com.au/" target="_blank" rel="noreferrer">https://www.haddaddrilling.com.au</a>
                        <div>2023 - current</div>
                      </div>
                      <div className='client'>
                      < div className='name'>Steve Cordony</div>
                        <div>Squarespace, HTML, CSS</div>
                        <a href="https://www.stevecordony.com" target="_blank" rel="noreferrer">https://www.stevecordony.com</a>
                        <div>2021 - current</div>
                      </div>
                      <div className='client'>
                        <div className='name'>Rosedale Farm</div>
                        <div>Squarespace, HTML, CSS</div>
                        <a href="https://www.rosedalefarm.net.au" target="_blank" rel="noreferrer">https://www.rosedalefarm.net.au</a>
                        <div>2022 - current</div>
                      </div>
                      <div className='client'>
                        <div className='name'>Ingenium People</div>
                        <div>Wix, HTML, CSS</div>
                        <a href="https://www.ingeniumpeople.com.au/" target="_blank" rel="noreferrer">https://www.ingeniumpeople.com.au</a>
                        <div>2022 - current</div>
                      </div>
                      <div className='client'>
                        <div className='name'>Love Lisa Celebrant</div>
                        <div>Wordpress, HTML, CSS</div>
                        <a href="https://lovelisacelebrant.com" target="_blank" rel="noreferrer">https://lovelisacelebrant.com</a>
                        <div>2019</div>
                      </div>
                    </div>
                    
                    <div>
                      <ul>
                        <li>Provided technical consultation and support, analysing business requirements and translating them into technical specifications, resulting in tailored web solutions that meet and exceed client expectations.</li>
                        <li>Optimized website performance and SEO by implementing best practices in code efficiency, site architecture, and content management, leading to improved page load times and higher search engine rankings.</li>
                        <li>Led the integration of third-party APIs and services into websites, including payment gateways, social media platforms, and booking system, enhancing the functionality and interactivity of offerings.</li>
                        <li>Built and customised a website using platforms such as Sqarespace and Wix, leveraging the platform's theme and implementing custom CSS to enhance the site's design and functionality, ensuring a unique and visually appealing user experience</li>
                        <li>Configured and managed business email systems using platforms like Google Workspace and Microsoft 365, ensuring secure and reliable communication channels for the organization.</li>
                        <li>Registered and managed domain names through various domain registrars, implementing DNS settings and SSL certificates to ensure secure and professional online presence.</li>
                        <li>Perform web development including developing a custom website using React and TailwindCSS, implementing responsive design principles to ensure optimal performance and user experience across devices.</li>
                        <li>Deployed the website to cPanel, managing server configuration, domain setup, and ensuring a smooth deployment process for seamless site access.</li>
                        <li>Integrated AWS Amplify for backend functionality, including authentication, data storage, and API management, to provide a robust and scalable backend infrastructure.</li>
                        <li>Optimized website performance and security by implementing best practices in coding, configuring HTTPS, and utilizing AWS services to enhance reliability and speed.</li>
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


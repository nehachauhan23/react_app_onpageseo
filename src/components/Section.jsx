import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Navbar"
import './layout.css'
import { faCircleCheck, faCircleExclamation  } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"

const Section = () => {
  const location = useLocation();
  const results = location.state;
 
 const onpagescore = results.tasks[0].result[0].items[0].onpage_score;
  const checks = results.tasks[0].result[0].items[0].checks;
  const checksObj = Object.entries(checks);
  const cache = results.tasks[0].result[0].items[0].cache_control.cachable;
  const duplicate_content = results.tasks[0].result[0].items[0].duplicate_content;
  const duplicate_description = results.tasks[0].result[0].items[0].duplicate_description;
  const duplicate_title = results.tasks[0].result[0].items[0].duplicate_title;
  function cleanHeading(string) {   
    let capitalise = string.charAt(0).toUpperCase() + string.substring(1);
    string =  capitalise.replace(/^(has|is)/i, ' ');
    string = string.replace(/check/g, '');
    return string.replace(/_/g, ' ');
  } 
  return (
    <>
        <Navbar/>
        <section className="results-div">
            <div className="container mt-5 px-5">
                <h4>OnPage Results</h4>
                <hr />
                <div className="row">
                   <div className="col-lg-3">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                              <h5 className="card-title">On-Page Score </h5>
                              <p className="card-text">{ onpagescore > 50 ? 'Your on-page score is good!' : 'On-page score is bad, Please fix' }</p>
                              <p className="text-success fw-bold fs-4">{onpagescore}</p>
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                              <h5 className="card-title">Cache </h5>
                              <p className="card-text">{ cache ? 'Good you have cache enabled ' : ' you do not have cache control ' }</p>
                              {cache? 
                                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#24a833"}} size="xl" />
                                   :
                                  <FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{color: "#fc2222",}} />
                              }
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                              <h5 className="card-title">Duplicate Title </h5>
                              <p className="card-text">{ duplicate_title ? 'Warning you have duplicate title' : 'Great! You do not have duplicate title ' }</p>
                              {(!duplicate_title)? 
                                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#24a833"}} size="xl" />
                                   :
                                  <FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{color: "#fc2222",}} />
                              }
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                              <h5 className="card-title"> Duplicate description </h5>
                              <p className="card-text">{ duplicate_description ? 'Warning you have duplicate description' : ' Great! You do not have duplicate description ' }</p>
                              {(!duplicate_description)? 
                                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#24a833"}} size="xl" />
                                   :
                                  <FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{color: "#fc2222",}} />
                              }
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center mb-3">
                            <div className="card-body">
                              <h5 className="card-title">Duplicate content </h5>
                              <p className="card-text">{ duplicate_content ? 'Warning you have duplicate content' : ' Great! You do not have duplicate content ' }</p>
                              {(!duplicate_content)? 
                                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#24a833"}} size="xl" />
                                   :
                                  <FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{color: "#fc2222",}} />
                              }
                            </div>
                          </div>
                    </div>
                </div>
                <hr />
                <h4>SEO Checks</h4>
                <hr />
                <div className="row">

                {
                checksObj.map(([key, value]) => {
                  return(
                    <div className="col-lg-3">
                      <div className="card text-center mb-3">
                        <div className="card-body">
                          <h5 className="card-title">{ cleanHeading(key) }</h5>
                          <p className="card-text">{ value? 'You have ' : 'You do not have ' }{cleanHeading(key)} in your website </p>
                          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#24a833"}} size="xl" />
                        </div>
                      </div>
                    </div>
                  )
                     
                }

                )}
                </div>
             
            </div>     
        </section> 
    </>
  )
}

export default Section
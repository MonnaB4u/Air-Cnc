import React from 'react';
import './TravelDetails.css'
import { faArrowTurnRight, faChevronRight, faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const TravelDetails = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex-around">
                <div className="house-rules-nav appartmentDetails ">
                    <ul>
                        <li>1. Reviews house rules   <FontAwesomeIcon icon={faChevronRight} /></li>
                        <li className="gray">2. Who is Coming   <FontAwesomeIcon icon={faChevronRight} /></li>
                        <li className="gray">3. Confirm and pay</li>
                    </ul>
                </div>

                <div className="flex-center gap ml">

                    <div className="travel-container m-bt">
                        <h3>Travel for work?</h3>
                        <div className="d-flex">
                            <div className="">
                                <p>Say hello to your host</p>
                                <p>Let Rowdra know a little about yourself and why you're coming</p>
                            </div>
                            <div className="">
                                <img className="travel-header-img" src={require(`../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg`)} alt="" />
                            </div>
                        </div>
                        <div className="">
                            <textarea name="" id="" cols="30" rows="10" />
                        </div>
                             <button style={{"borderRadius":"5px", "margin":".5rem 0"}} className="btn bg">Continue</button>
                    </div>

                    <div className="travel-rules-form">
                        <div className="house-rules-card">

                            <div className="house-card-header">
                                <div className="">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.</p>
                                    <div className="house-review">
                                        <FontAwesomeIcon className="hicon" icon={faStarOfDavid} />
                                        <h4>4.9</h4>
                                        <p>(20 reviews)</p>
                                    </div>

                                </div>
                                <div className="house-card-header-img">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/305557557.jpg?k=b24639d9b2c61120016ca77de449260d2f85d2f81756a8e8856dbc63eac0daed&o=&hp=1" alt="" />
                                </div>
                            </div>

                            <div className="card-header-in-secti">
                                <h5>Dates</h5>
                                <div className="card-date-input ">
                                    <input type="date" placeholder='' />
                                    <FontAwesomeIcon className="hicon" icon={faArrowTurnRight} />
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="card-header-in-secti">
                                <h5>Guests</h5>
                                <select className="card-date-drop" name="cars" id="cars">
                                    <option value="volvo">3 guests</option>
                                    <option value="saab">4 guests</option>
                                    <option value="mercedes">5 guests</option>
                                    <option value="audi">6 guests</option>
                                </select>
                            </div>

                            <div className="space-between border">
                                <small>$34 x 4 nights</small>
                                <small>$146</small>
                            </div>
                            <div style={{ "margin": "2rem 0" }} className="space-between border">
                                <small>Cleaning fee</small>
                                <small>$10</small>
                            </div>
                            <div className="space-between border">
                                <small>Service fee</small>
                                <small>$21</small>
                            </div>
                            <div style={{ "margin": "2rem 0" }} className="space-between">
                                <h4>Total</h4>
                                <h4>$167</h4>
                            </div>
                            <button onClick={()=>navigate('/payment')} className="card-btn bg">Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TravelDetails;

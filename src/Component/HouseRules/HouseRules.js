import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HouseRules.css'
import { faArrowTurnRight, faChevronRight, faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const HouseRules = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="house-rules-nav appartmentDetails ">
                <ul>
                    <li>1. Reviews house rules   <FontAwesomeIcon icon={faChevronRight} /></li>
                    <li className="gray">2. Who is Coming   <FontAwesomeIcon icon={faChevronRight} /></li>
                    <li className="gray">3. Confirm and pay</li>
                </ul>
            </div>
            <div className=" flex-center gap appartmentDetails">

                <div className="house-rules-details house-rules">
                    <div className=" house-rules-header">
                        <h1>Review house rules</h1>
                        <p>3 nights in Dhaka</p>
                        <div className="d-flex gap4 house-rules-header">
                            <div className="d-flex ">
                                <div className="house-rules-date">
                                    <p>APR</p>
                                    <p>13</p>
                                </div>
                                <div className="gray">
                                    <p>Monday check-in</p>
                                    <p>After 12.00 Pm</p>
                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="house-rules-date">
                                    <p>APR</p>
                                    <p>13</p>
                                </div>
                                <div className="gray">
                                    <p>Monday check-in</p>
                                    <p>After 12.00 Pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <p className="gray">Self check-in with building staff</p>
                        </div>

                        <div className="house-rules-header border-bottom">
                        </div>

                        <div className="d-flex house-rules-header">
                            <div className="iconhw">
                                <img src={require('../../images/ic_child_friendly_48px.png')} alt="" />
                            </div>
                            <p>Suitable for Children and infants</p>
                        </div>

                        <div className="d-flex house-rules-header">
                            <div className="iconhw">
                                <img src={require('../../images/ic_pets_48px.png')} alt="" />
                            </div>
                            <p>Pets allowed</p>
                        </div>

                        <div className="d-flex house-rules-header">
                            <div className="iconhw"><img src={require('../../images/forbidden.png')} alt="" /></div>
                            <p>No parties or events</p>
                        </div>

                        <div className="d-flex house-rules-header">
                            <div className="iconhw"><img src={require('../../images/ic_smoking_rooms_48px.png')} alt="" /></div>
                            <p>Smoking allowed</p>
                        </div>

                    </div>

                </div>

                <div className="house-rules-form">
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
                        <button  onClick={()=>navigate('/travellingDetails')} className="card-btn bg">Reserve</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HouseRules;

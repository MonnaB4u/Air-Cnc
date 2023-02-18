import React, { useState } from 'react';
import './AppartmentDetails.css'
import homeData from '../../Data/HomeData'
import { useNavigate, useParams } from 'react-router-dom';

const AppartmentDetails = () => {
    const [home, setHome] = useState(homeData)
    const navigate = useNavigate()
    const { id } = useParams()
    const findData = home.find(data => data.id === id)

    return (
        <div>

            <div className="appartmentNav">
                <div className="details-nav">
                    <div className="nav-head">
                        <ul>
                            <li className="text-color">Aircnc</li>
                        </ul>
                    </div>
                    <div className="nav-head2">
                        <ul>
                            <li>Dhaka Division,Bangladesh</li>
                            <li>Apr 13-17</li>
                            <input type="text" placeholder='3 Guest' />
                        </ul>
                    </div>
                    <div className="nav-left-ul">
                        <ul>
                            <li>Help</li>
                            <li>Log in</li>
                            <button className="login-btn">Sign up</button>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="appartmentHeaderImg border">
                <div className="appartmentHeaderimage1 ">
                    <img src="https://blog.wattsense.com/content/images/2020/04/proptechs-smart-buildings.jpg" alt="" />
                </div>
                <div className="image2">
                    <img src={require(`../../../images/photo-1522708323590-d24dbb6b0267.jpeg`)} alt="" />
                </div>
            </div>


            <div className="appartmentDetails flex-space-around" >

                <div className="details">
                    <div className="details-head">
                        <div className="details-head-title">
                            <h2>{findData.name}</h2>
                            <div className="details-head-title-div">
                                <h4>Dhaka, Bangladeh</h4>
                                <ul>
                                    <li>4 guests</li>
                                    <li>2 bedroom</li>
                                    <li>2 bed</li>
                                    <li>2 bath</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <img className="details-header-img" src={require(`../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg`)} alt="" />
                        </div>
                    </div>

                    <div className="border">

                        <div className="details-des">
                            <img src={require("../../../images/home.png")} alt="" />
                            <div className="">
                                <h3>Entire Home</h3>
                                <p>You will have the condominium to yourself</p>
                            </div>
                        </div>

                        <div className="details-des">
                            <img src={require("../../../images/checkmark-square-2.png")} alt="" />
                            <div className="">
                                <h3>Self Check-in</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="details-des">
                            <img src={require("../../../images/solid.png")} alt="" />
                            <div className="">
                                <h3>Sparkling clean</h3>
                                <p>Repudiandae expedita distinctio omnis veniam, aperiam sint deserunt laboriosam id name</p>
                            </div>
                        </div>
                        <div className="details-des">
                            <img src={require("../../../images/single-01.png")} alt="" />
                            <div className="">
                                <h3>Rowdra is aSuperhost</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?  blanditiis itaque nemo! Eius, autem iure sequi cum inventore expedita!</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-paragraph">
                        <p style={{ "margin": "2rem 0" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur maiores rerum enim! Sapiente, eaque quam! Nostrum suscipit quas nihil, architecto natus, obcaecati magnam accusantium, repellendus voluptatum quaerat numquam porro!</p>

                        <p style={{ "margin": "2rem 0" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur maiores rerum enim! Sapiente, eaque quam! Nostrum suscipit quas nihil, architecto natus, obcaecati magnam accusantium, repellendus voluptatum quaerat numquam porro!</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur maiores rerum enim! Sapiente, eaque quam! Nostrum suscipit quas nihil, architecto natus, obcaecati magnam accusantium, repellendus voluptatum quaerat numquam porro!</p>

                    </div>
                </div>

                <div className="appartment-form">

                    <div className="appartment-form-card">

                        <div className="card-header">
                            <h3>$34/</h3>
                            <small>Night</small>
                        </div>

                        <div className="card-header-in-secti">
                            <h5>Dates</h5>
                            <div className="card-date-input ">
                                <input type="date" placeholder='' />
                                <span>/</span>
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
                        <button onClick={() =>navigate(`/appartmentDetails/${findData.id}/details/${findData.id}`)} className="card-btn bg">Reserve</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AppartmentDetails;

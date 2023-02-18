import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css'
const Details = () => {
        const navigate = useNavigate()
    return (

        <main className="Details-main">
            <div className="details-nav">

                <div className="nav-head">
                    <ul>
                        <li onClick={()=>navigate('/')}  href="/" className="text-color">Aircnc</li>
                    </ul>
                </div>

                <div className="nav-head2">
                    <ul>
                        <li>Dhaka Division,Bangladesh</li>
                        <li>Apr 13-17</li>
                        <input type="text" placeholder='3 Guest' />
                    </ul>
                </div>

                <div className="nav-head3">
                    <ul>
                        <li>Help</li>
                        <li>Log in</li>
                        <button>Sign up</button>
                    </ul>
                </div>

            </div>

            <div className="details-header">
                <div onClick={()=>navigate('/houseRules')}  className="details-flex1">

                    <div className="details-head1">
                        <p>252 stays Apr 13-17 3 guests</p>
                        <h3>Stay is Dhaka Division</h3>
                    </div>

                    <div className="details-head2">
                        <ul>
                            <li>Cancellation flexibility</li>
                            <li className="type">Type of place</li>
                            <li>Price</li>
                            <li className="type">Instant Book</li>
                            <li>More Filters</li>
                        </ul>
                    </div>

                    <div className="division border">

                        <div onClick={()=>navigate('/houseRules')}  className="division-details">
                            <div className="division-img">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/4d/6e/unique-cottages.jpg?w=1200&h=-1&s=1" alt="" />
                            </div>
                            <div className="division-img-details">
                                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                <ul>
                                    <li>4 guests</li>
                                    <li>2 bedrooms</li>
                                    <li>2 bed</li>
                                    <li>2 baths</li>
                                </ul>
                                <small>Wifi conditioning Kitchen</small>
                                <ul>
                                    <li>4.9(20)</li>
                                    <li>$34/night</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div className="division border">

                        <div onClick={()=>navigate('/houseRules')}  className="division-details">
                            <div className="division-img">
                                <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-11.jpg" alt="" />
                            </div>
                            <div className="division-img-details">
                                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                <ul>
                                    <li>4 guests</li>
                                    <li>2 bedrooms</li>
                                    <li>2 bed</li>
                                    <li>2 baths</li>
                                </ul>
                                <small>Wifi conditioning Kitchen</small>
                                <ul>
                                    <li>4.9(20)</li>
                                    <li>$34/night</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="division border">

                        <div onClick={()=>navigate('/houseRules')} className="division-details">
                            <div className="division-img">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-63ec06aa1015d4d9d11323e399624eb7.webp" alt="" />
                            </div>
                            <div className="division-img-details">
                                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                <ul>
                                    <li>4 guests</li>
                                    <li>2 bedrooms</li>
                                    <li>2 bed</li>
                                    <li>2 baths</li>
                                </ul>
                                <small>Wifi conditioning Kitchen</small>
                                <ul>
                                    <li>4.9(20)</li>
                                    <li>$34/night</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="details-flex2">
                    <iframe className="d-map details-map" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3648.433933496307!2d90.39906366481777!3d23.874226684528477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e3!4m3!3m2!1d23.8765455!2d90.39623309999999!4m3!3m2!1d23.871926199999997!2d90.4061851!5e0!3m2!1sen!2sbd!4v1676518769666!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </main>

    );
};

export default Details;

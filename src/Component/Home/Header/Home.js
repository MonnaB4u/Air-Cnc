import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../Data/HomeData'
const Home = () => {
    const [home, setHome] = useState(data)

    const navigate = useNavigate()
    return (
        <div className="ex-head">
            <h3>Homes</h3>
            <div className="home-main">
                {
                    home.map((each, i) =>

                        <>
                            <div className="" onClick={() => navigate(`/appartmentDetails/${each.id}`)}>
                                <img src={each.img} alt="" />
                                <small className="gray">{each.title}</small>
                                <h4>{each.name}</h4>
                                <p>${each.price} per person</p>
                            </div>

                        </>

                    )
                }

                {/* <div className="">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/305557557.jpg?k=b24639d9b2c61120016ca77de449260d2f85d2f81756a8e8856dbc63eac0daed&o=&hp=1" alt="" />
                    <small>NIGHTLIFE: NEW WORK</small>
                    <p>Discover the citry party scene</p>
                    <p>$36 per person</p>
                </div>
                 <div className="">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bb/4d/6e/unique-cottages.jpg?w=1200&h=-1&s=1" alt="" />
                    <small>NIGHTLIFE: NEW WORK</small>
                    <p>Discover the citry party scene</p>
                    <p>$36 per person</p>
                </div> */}

            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import AllCards from './AllCards';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out Our University Support!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <AllCards  src="images/bus.jpg"
                        text="Daffodil International University Bus Service"
                        label="Daffodil"
                        path="/services" />

                        <AllCards  src="images/gym.jpg"
                        text="Daffodil International University Gym Service"
                        label="Daffodil"
                        path="/services" />

                    </ul>

                    <ul className="cards__items">

                        <AllCards  src="images/canteen.jpg"
                        text="Daffodil International University Canteen"
                        label="Daffodil"
                        path="/services" />

                        <AllCards  src="images/hostel.jpg"               
                        text="Daffodil International University Hostel"
                        label="Daffodil"
                        path="/services" />

                    </ul>

                    <ul className="cards__items">

                        <AllCards  src="images/clinic.jpeg"
                        text="Daffodil International University Health Service"
                        label="Daffodil"
                        path="/services" />

                                                
                        <AllCards  src="images/golf.jpg"
                        text="Daffodil International University Golf"
                        label="Daffodil"
                        path="/services" />

                    </ul>

                    <ul className="cards__items">

                       <AllCards  src="images/cafeteria.jpg"
                        text="Daffodil International University Canteen Service"
                        label="Daffodil"
                        path="/services" />

                       <AllCards  src="images/insurance.jpg"
                        text="Daffodil International University Insurance Policy"
                        label="Daffodil"
                        path="/services" />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

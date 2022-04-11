import React from 'react';
import Expert from '../Expert/Expert'
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chiris Rock', img: expert2 },
    { id: 3, name: 'Dyoune Rock', img: expert3 },
    { id: 4, name: 'Messy vai', img: expert4 },
    { id: 5, name: 'Ronaldo vai', img: expert5 },
    { id: 6, name: 'StaycyJhonsos', img: expert6 }
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='d-flex justify-content-center m-5 text-primary'>Our Experts</h1>
            <div className="row g-5 ms-3">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
import React from 'react'

const Card = (props) => {
    console.log(props.item);
    return (
        
        <div className='cards'>
            <div className="title">
                <h1>{props.item.title}</h1>
            </div>
            <div className="date">
                <h1>{props.item.date}</h1>
            </div>
            <img src={props.item.image} alt="" />
            <div className="card-over">
                <p>{props.item.desc}</p>
            </div>

        </div>
    )
}

export default Card
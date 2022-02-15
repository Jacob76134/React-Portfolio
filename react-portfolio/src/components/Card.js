import React from 'react'

function Card(props) {
    console.log(props)
  return (
    <div className='card'>
        <div className='cardBody'>
            <img src={props.img} className="cardimg"></img>
            <h2 className='cardTitle'>
                {props.title}
            </h2>
            <p className='description'>
                {props.description}
            </p>
            <div className='buttonSection'>
            <a href={props.livelink} className='cardButton'>View Site</a>
            <a href={props.repolink} className='cardButton'>View Code</a>
            </div>
        </div>
    </div>
  )
}

export default Card
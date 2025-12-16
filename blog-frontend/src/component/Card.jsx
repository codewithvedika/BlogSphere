import React from 'react'

function Card(props) {
  return (
     <div className="card shadow-lg ">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam? Tempora velit est reprehenderit, ipsum non consequatur earum voluptatum consectetur quam corrupti veritatis voluptate doloribus quidem illum. Delectus, vitae facere?</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )
}

export default Card
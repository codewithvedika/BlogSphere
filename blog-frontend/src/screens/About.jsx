import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function About() {

  return (
    <div className='container about'>
      <div className="row">
        <div className="col-md-9">
          <a href="#!"><img className="card-img-top" src="https://images.pexels.com/photos/19825351/pexels-photo-19825351.jpeg" alt="..." /></a>
          <div className="card-body">
            <div className="small text-muted">January 1, 2023</div>
            <h2 className="card-title">Featured Post Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <a className="btn Link" href="#!">Read more →</a>
          </div>
        </div>
        <div className="col-md-3">
          <h3>About Me</h3>
          <img src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dicta rem iste quis doloremque temporibus mollitia sunt est obcaecati, facere natus veritatis aut minima quasi in dolore illum perspiciatis eveniet?</p>
          <h3>Categorires</h3>
          <ul className="list-unstyled mb-0">
            <li><a href="#!">Lorem, ipsum.</a></li>
            <li><a href="#!">Lorem, ipsum.</a></li>
            <li><a href="#!">Lorem, ipsum.</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'

function Hero({ title, detail }) {
    return (
        <header className=" border-bottom mb-4">
            <div className="container-fluid ">
                <div className="text-center my-5 position-relative homeHero" >
                    {/* <img src="./logo2.png" alt="logo" className=' img-fluid'/> */}
                    <div className=" p-5 position-absolute start-0 end-0 "style={{backgroundColor:"#FBF0E0"}}><h1 style={{color:"#36454F"}} className="fw-bolder ">Welcome to {title}!</h1>
                    <h2 style={{color:"#82C8E5"}} className=" ">{detail}</h2></div>
                    
                </div>
            </div>
        </header>
    )
}

export default Hero
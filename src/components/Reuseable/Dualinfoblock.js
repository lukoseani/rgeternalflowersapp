import React from 'react'
import Heading from './Heading'
import {Link} from "gatsby"


export default function Dualinfoblock({heading,img}) {
    return (
        <section className ="my-4 py-4 bg-theme">
        <div className="container">
        <Heading title ={heading}/>
        <div className = "row">
        <div className = "col-8 mx-auto">
        <p className = "lead text-white mb-5">
        
          Eternal Blossoms is an exquisite luxury flower boutique and personalised gifting service.
        we do personalised orders for birthdays, anniversaries, surprise proposals and other events.
        Our point was and still is, to bring extraordinary flower vendor work at reasonable costs. Our bundles are made to arrange by master flower specialists, from everywhere throughout the world, and flowers are our obsession. Through this adventure we have grasped the web-based social networking channels and we like to share our news and tips just as demonstrate that there are genuine individuals working behind the site and that we do mind.
        </p>
        </div>
        <div className = "col-4 mx-auto ">
        <div class="card bg-dark">
  <img src= "https://images.pexels.com/photos/2175675/pexels-photo-2175675.jpeg?cs=srgb&dl=beautiful-flowers-bicycle-bike-2175675.jpg&fm=jpg"
  class="card-img-top" alt="image goes here" height="250vh"/>
  <div className="card-body text-white text-center">
    <h5 class="card-title text-success">More About us</h5>
    <p class="card-text">
    We deliver quality flowers to your loved ones!!!
     </p>
    <Link to="#" >
    <button className="btn btn-primary btn-warning btn-block">{heading}</button>
    </Link>
  </div>
</div>
        </div>
        </div> 
        </div>
        </section>
    )
}

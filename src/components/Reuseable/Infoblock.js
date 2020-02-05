import React from 'react'
import {Link} from 'gatsby'
import Heading from './Heading'
import Carousel from './Carousel'



export default function Infoblock({heading}) {
    return (      
          
<section className = "bg-theme  my-5 py-4 text-center">
<div className="container">
<Heading title={heading}/> 
<div className = "row">
<div classname = "col-10 col-sm-8 mx-auto ">
<p className = "lead text-white mb-4 ">
The globally recognised company provides flowers for weddings, restaurants, business events and even for television. It also runs its own world-renowned flower school.
</p>
</div>
</div>
</div>
<Carousel/>
</section>  
        
    )
}

import React, { Component } from 'react'
import Img from 'gatsby-image'
import Heading from '../Reuseable/Heading'


export default class Flowerscart extends Component {
    constructor(props){
        super(props)
        this.state={
           
            myflowers: props.flowers.edges,
            flowers: props.flowers.edges,

        }

    }
    render() {
       
        return (
           <section className = "py-5 color-dark">
           <div className ="container">
           <Heading title ="Flowers"/>
          <div className ="row">
          {this.state.myflowers.map(({node}) => {
              return (
                  <div key ={node.id} className= "col-11 col-md-6 d-flex mx-auto my-3">
                 <Img fixed = {node.image.fixed} />
                 <div  className = "flex-grow-1 px-3">
                 <div className = "d-flex justify-content-beteween">
                 <h6 className = "mb-0">{node.title}</h6>
                 <h6 className = "px-4 text-success">$ {node.price}</h6>
                 </div>
                 <p className = "text-muted">
                 {node.description.description}
                 </p>
                 <button 
                 data-item-id={node.id}
                 data-item-name={node.title}
                 data-item-price={node.price}
                 data-item-url="https://flowersonline.netlify.com"
                 data-item-description= {node.description.description}
                 data-item-image={node.image.fixed.src}
                 className ="btn btn-warning px-3 my-4 snipcart-add-item "> 
                 Add to cart
                 </button>
                 </div>
                </div>)
          })}
          </div>
          
           </div>
           </section>
        )
    }
}

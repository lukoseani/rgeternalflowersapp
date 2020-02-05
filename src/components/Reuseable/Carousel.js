import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const photos = [
    {
        name:"photo1",
        url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?cs=srgb&dl=beach-wedding-ceremony-during-daytime-169198.jpg&fm=jpg'
    },
    {
        name:"photo2",
        url: 'https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg?cs=srgb&dl=beach-beach-wedding-chairs-clouds-169192.jpg&fm=jpg'
    },
    {
        name:"photo3",
        url: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?cs=srgb&dl=table-with-plates-and-flowers-filed-neatly-selective-focus-169190.jpg&fm=jpg'
    },
    {
        name:"photo4",
        url: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?cs=srgb&dl=pink-and-red-roses-centerpiece-near-silverwares-1045541.jpg&fm=jpg'
    },
    
]

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite:true,
            arrows:true,
            speed:800,
            slideToShow:1,
            slideToScroll:1,
            classsName: "slides"

        }
        return (
            <div className = "App" style = {{padding:80}}>
              <Slider {...settings}>
              {photos.map((photo) => {
                  return(
                      <div>
                      <img width = "100%" height = "500px"src = {photo.url} alt = "photo"/>
                      </div>
                  )
              })}
              </Slider>
            </div>
        )
    }
}

import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <section className = "py-3">
          <Heading title ="Contact Us"  />
          <div className="col-10 col-sm-8 mx-auto">
          <form action="" method ="POST">
          <div className="form-grop py-3">
          <input
          type= "text"
          name ="name"
          id ="name"
          placeholder = "Your Name"
          className ="form-control"
          />
          </div>
          <div className="form-grop py-3">
          <input
          type= "text"
          name ="email"
          id ="email"
          placeholder = "Your Email"
          className ="form-control"
          />
          </div>
          <div className="form-grop py-3">
          <input
          type= "text"
          name ="phone"
          id ="phone"
          placeholder = "Your Phone Number"
          className ="form-control"
          />
          </div>
          <div className="form-grop py-3">
          <textarea
          type= "text"
          name ="description"
          id ="description"
          placeholder = "Your Message"
          className ="form-control"
          />
          </div>
          <button type="submit" className="btn btn-outline-success btn-block">
          Submit
          </button>
          </form>
          </div> 
        </section>
    )
}

import React from 'react'
import Footer from './footer';
import './contact.css'

function Contact(){
    return(
        <>
        <br />
        <h1 style={{textAlign:'center'}}>Send Your Message Here</h1>
        <form className='form' method="post">
        <div className="row">
            <div className="col">
                <label className="label-text" htmlFor=''>First Name</label>
                <input className='form-input' type="text" name="" id=""/>
                </div>
                <div className="col">
                <label className="label-text" htmlFor=''>Last Name</label>
                <input className='form-input' type="text" name="" id=""/>
                </div>
                </div>
            <div className='row'>
                <div className="col">
                <label className="label-text" htmlFor=''>Email</label>
                <input className='form-input' type="text" name="" id=""/>
                </div>
                <div className="col">
                <label className="label-text" htmlFor=''>Mobile</label>
                <input className='form-input' type="text" name="" id=""/>
                </div>
                </div>
                
                <div className='row'>
                    <h4 className='label-text'>Message</h4>
                </div>
                <div className='row'>
                    <textarea className="textarea" name='' id='' cols="30" rows="10"></textarea>

                </div>
                <div className='row'>
                    <button className='btn' type='submit'>Send</button>
                    <button className='btn' type='submit'>Cancel</button>


                </div>


        </form>
        <Footer/>

        </>
    )
    }export default Contact;
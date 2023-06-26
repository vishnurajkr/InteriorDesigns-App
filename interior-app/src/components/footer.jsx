import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <div className="d-flex flex-column h-100">




    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
               
                <div className="col-lg-4 col-md-6">
                    <h5 className="h3 text-primary">Get In Touch</h5>
                    <p className="small text-muted">📍Thrissur,Mala-Gov.Hospital road,kerala,India<br/><br/>📞+91 9544595880,7907534215<br/><br/>

<a href='mailto:info@abheesinteriors.com'>📩info@abheesinteriors.com</a>

</p>
                    
                    
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="h3 text-primary mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        
                    </ul>
                    
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className='h3 text-primary mb-3'>Popular Links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        
                    </ul>
                </div>
               <hr className='text-muted' />
              
                </div>
            </div>
            <p className="small text-white text-center mb-0">&copy; Copyrights. All rights reserved. <a href="linkto:abheesinterior.com">abheesinterior.com</a></p>
    </footer>
</div>
       
    

    </>
  )
}

export default Footer
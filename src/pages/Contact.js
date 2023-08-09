import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';



const Contact = () => {
    return (
        <div>
        <Header />
        <Navigation />
        <div className='email'>
        <img className='email_logo' src='https://cdn-icons-png.flaticon.com/512/6244/6244710.png' alt=''/>
        <a className='email_title' href="mailto:mathbarbier07@gmail.com" class="btn btn-primary">mathbarbier07@gmail.com</a>
        </div>
        <div className='tel'>
        <img className='tel_logo' src='https://img.freepik.com/free-icon/phone-call_318-388435.jpg' alt=''/>
        <a className='tel_title' href="tel:+32494862792" class="btn btn-primary">0494/86 27 92</a>
        </div>
        <Footer />
        </div>
    );
};

export default Contact;
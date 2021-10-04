import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Contact = () => {
    return (
        <>
        <MenuBar></MenuBar>
        <h2 className=' text-uppercase'>Contact US</h2>
        <h1 className='text-success'>এসো কোরআন শিখি</h1>
          <div>
              
              <h3 className='text-secondary'>
               কুরআন শব্দের অর্থ: পাঠ করা, যা পাঠ করা হয়। আর পরিভাষায়-আল্লাহ তা‘আলা জিবরাঈল আলাইহিস সালামের মাধ্যমে সুদীর্ঘ ২৩ বছরে মানব জাতির হেদায়াত হিসাবে রাসূলুল্লাহ সল্লাল্লাহু আলাইহি ওয়াসাল্লাম যে কিতাব অবতীর্ণ করেছেন তার নাম আলকুরআন।
              </h3>
                  <div>
                      
                    <h1>Adresss : Halishshar sobujbag Chittong</h1>
                    <p>number:- +88 01865695206</p>
                    
                  </div>
          </div>
          <Footer> </Footer>
          </>
    );
   
};

export default Contact;
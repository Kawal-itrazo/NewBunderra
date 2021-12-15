import React from 'react';   
import Header from './Header';
import Footer from './Footer';  
import imageOne from './images/imageone.jpeg'
import imageTwo from './images/imagetwo.jpeg'
import imageThree from './images/imageThree.jpeg'
import imageFour from './images/imageFour.jpeg'
import imageFive from './images/image5.jpeg';
import mainImage from './images/mainImage.jpeg'; 
import cattle2 from './images/Cattle_2.jpeg'

 
 
function Other(props) {
    return ( 
  <div className="flex flex-col min-h-screen overflow-hidden">
    <div className="sticky"> 
      <Header/>
    </div>
    <main className="flex-grow"> 
      <div>
        
      </div> 
    </main> 
      <Footer />
    </div> 
    );
}

export default Other;
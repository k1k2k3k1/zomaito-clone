import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';



export default function Carosal() {
   
  
  return (

    <MDBCarousel showIndicators showControls fade  >
      <MDBCarouselItem
        className='w-100 d-block custom-carousel'
        itemId={1}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODdPq8sGWuPfaVM6ah1EotbPvTLdI48c4e0QFqqNHa5rE0e-Zy0K_bmXzafTiuMounvQ&usqp=CAU'
        alt='...'
      >
        <h5 className='header'> Hallo I am </h5>
        <p className='paira'> Dolly singh parihar Welcome my shop</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block custom-carousel'
        itemId={2}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1dGzmhds2n7Rjzey6zB1i_FamVYN-MqZTFHHDaVEvKEPiTb48hpTVyAOm-SJjj6khCw&usqp=CAU'
        alt='...'
      >
        <h5 className='header'> Hallo I am </h5>
        <p className='paira'> Dolly singh parihar Welcome my shop</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block custom-carousel'
        itemId={3}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSiWTTSCNreCM9iJ9x0BhrUkEO_R0npgOBroLBpAXc-EGwHUWlE9BQWHmOnnCH-VmZfo&usqp=CAU'
        alt='...'
      >
        <h5 className='header'> Hallo I am </h5>
        <p className='paira'> Dolly singh parihar Welcome my shop</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
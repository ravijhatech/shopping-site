import React from 'react';
import Slider from 'react-slick';

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings} >
      <div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-electronics-store-sale-banner-template_23-2151138129.jpg?ga=GA1.1.696588668.1745354947&semt=ais_hybrid&w=740"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/sales-discount-facebook-template_23-2149959351.jpg?ga=GA1.1.696588668.1745354947&semt=ais_hybrid&w=740"
            alt="Slide 2"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/flat-shopper-helping-friend-choose-clothes-concept-as-candid-shot-shopper-helping-friend-choo_980716-550859.jpg?ga=GA1.1.696588668.1745354947&semt=ais_hybrid&w=740"
            alt="Slide 3"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-132679.jpg?ga=GA1.1.696588668.1745354947&semt=ais_hybrid&w=740"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlider;

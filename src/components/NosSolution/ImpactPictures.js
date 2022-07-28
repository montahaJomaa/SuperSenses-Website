import img1 from '../images/Groupe 14672.png';
import img2 from '../images/Carbo-arroser-terre.png';
import img3 from '../images/Group14411.png';
import img4 from '../images/Group14483.png';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImpactPictures = () => {
  var settings = {
    dots: false,
    className:'CarouselPict',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='PictureContent'>
        <h1 class="d-flex justify-content-center">Les Impacts de Hodhod</h1>
      <Slider {...settings}>
        <div class="img-thumbnail shadow " style={{ width: "400px" , height:"120px" }}>
          <img src={img1} />
        </div>
        <div class="img-thumbnail shadow " id="CarouselBorder" >
          <img  src={img1} />
        </div>
        <div class="img-thumbnail shadow " id="CarouselBorder" >
          <img src={img2} />
        </div>
        <div class="img-thumbnail shadow " id="CarouselBorder">
          <img  src={img3} />
        </div>
        <div class="img-thumbnail shadow " id="CarouselBorder">
          <img  src={img4} />
        </div>

      </Slider>
    </div>
  );
}
export default ImpactPictures;
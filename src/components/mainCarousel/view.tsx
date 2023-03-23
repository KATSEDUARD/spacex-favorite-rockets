import Carousel from 'react-bootstrap/Carousel';
import img0 from './images/img0.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import { MainCarousel } from './MainCarousel';
import { constants } from '../../constants/constants';
import { ScrollToLayout } from '../scrollTo/view';
import { uiActions } from '../scrollTo/actions/uiActions';

const { MAIN_TITLE: { LINE1, LINE2 } } = constants;

export function MainCarouselLayout() {
    return <MainCarousel>
    <div className="main-title">
        <div className="main-title-line1">{LINE1}</div>
        <div className="main-title-line2">{LINE2}</div>
    </div>
    <ScrollToLayout onClick={uiActions.scrollTo}/>
        <Carousel controls={false} interval={5000} pause={false} fade={true}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img0}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </MainCarousel>;
};
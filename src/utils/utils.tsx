import img0 from '../components/tourCard/images/img0.png';
import img1 from '../components/tourCard/images/img1.png';
import img2 from '../components/tourCard/images/img2.png';

const images = [img0, img1, img2];

const setImages = (index: number) => {
    return images[index % images.length];
};

export const utils = {
    setImages
};
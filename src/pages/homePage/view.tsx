import { MainCarouselLayout } from '../../components/mainCarousel/view';
import { ToursLayout } from '../../components/toursBoard/view';

export function HomePage() {
    return <div>
        <MainCarouselLayout />
        <ToursLayout />
    </div>;
}
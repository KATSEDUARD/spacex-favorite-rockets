import { Favorites } from './Favorites';
import bgImg from './images/bg.png';
import { constants } from '../../constants/constants';
import { useQuery, useReactiveVar } from '@apollo/client';
import { favoritesVar } from '../../cache/cache';
import { TourCardLayout } from '../../components/tourCard/view';
import { queries } from '../../queries/flights';
import { uiActions } from './actions/uiActions';

const { GET_FLIGHTS } = queries;

const { FAVORITES, CLEAR_ALL, EMPTY } = constants;

export function FavoritesPageLayout() {
    const flights = useReactiveVar(favoritesVar);

    const { data } = useQuery(GET_FLIGHTS);

    const onClickHandler = () => uiActions.clearAll(favoritesVar);

    return <Favorites>
        <div className="bg">
            <div className="favorites-title">{FAVORITES}</div>
            <img src={bgImg} alt="spacex" />
        </div>
        <div className="top-section">
            <div onClick={onClickHandler} className="clear-all d-flex justify-content-end">{CLEAR_ALL}</div>
        </div>
        <div className="main-section">
            {flights.length > 0 ? flights.map((id: string, index: number) => {
                const flight = data.rockets.find((flight: any) => flight.id === id);
                return <div key={id}><TourCardLayout isFavorite={flight.isFavorite} id={flight.id} name={flight.name} index={index} description={flight.description} /></div>;
            }) : <h1 className="empty">{EMPTY}</h1>}
        </div>
    </Favorites>;
};
import { TourCard } from './TourCard';
import { constants } from '../../constants/constants';
import { CustomButton } from '../customButton/view';
import { FavoritesLink } from '../favoritesButton/view';
import { utils } from '../../utils/utils';
import { favoritesVar } from '../../cache/cache';
import { uiAction } from '../../pages/homePage/actions/uiActions';

const { BUTTONS: { BUY } } = constants;

export function TourCardLayout(props: any) {
    const { id, index, name, description, isFavorite } = props;

    const onClickHandler = (isFavorite: boolean, id: string, favoritesVar: any) => uiAction.addToFavorites(isFavorite, id, favoritesVar);

    return <TourCard>
        <div className="img-section">
            <img src={utils.setImages(index)} alt="spacex" />
        </div>
        <div className="card-main-content">
            <div className="card-main-title">{name}</div>
            <div className="card-main-description">{description}</div>

            <div className="card-main-footer">
                <div className="buy-button"><CustomButton label={BUY} /></div>
                <div className="favorite-button"><FavoritesLink card={true} onAddToFavorites={() => onClickHandler(isFavorite, id, favoritesVar)} isFavorite={isFavorite} /></div>
            </div>
        </div>
    </TourCard>;
};
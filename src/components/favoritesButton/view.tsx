import { FavoritesButton } from './FavoritesButton';
import heart from './heart.svg';
import deleteImg from './delete.svg';
import { useLocation } from 'react-router-dom';

export function FavoritesLink(props: any) {
    const location = useLocation();
    const onClickHandler = () => props.card && props.onAddToFavorites();

    return <FavoritesButton onClick={onClickHandler} location={location.pathname} isActive={props.isActive} isFavorite={props.isFavorite}>
        <img src={props.isFavorite && location.pathname === '/favorites' ? deleteImg : heart} alt="favorite" />
    </FavoritesButton>
};
import { constants } from '../../constants/constants';
import { ScrollTo } from './ScrollTo';
import arrowDown from './arrow-down.svg';

const { EXPLORE_TOURS } = constants;

export function ScrollToLayout(props: any) {
    const onClick = () => props.onClick();

    return <ScrollTo>
        <div className="flex-wrapper" onClick={onClick}>
            <div className="text">{EXPLORE_TOURS}</div>
            <img src={arrowDown} alt="spacex" />
        </div>
    </ScrollTo>;
};
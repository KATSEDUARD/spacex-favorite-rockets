import { ArrowControl } from './ArrowControl';
import next from './next.svg';

export function ArrowControlButton(props: any) {
    const { diraction } = props;

    return <ArrowControl diraction={diraction}>
        <img src={next} alt="spacex" />
    </ArrowControl>;
};
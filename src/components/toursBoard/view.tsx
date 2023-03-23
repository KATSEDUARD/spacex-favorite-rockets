import { ToursBoard } from './ToursBoard';
import { constants } from '../../constants/constants';
import { ArrowControlButton } from '../arrowControl/view';
import { ToursSliderLayout } from '../toursSlider/view';
import { useQuery } from '@apollo/client';
import { queries } from '../../queries/flights';
import { useState, useEffect } from 'react';

const { POPULAR_TOURS } = constants;
const { GET_FLIGHTS } = queries;

export function ToursLayout() {
    const { loading, error, data } = useQuery(GET_FLIGHTS);
    const [diraction, setDiraction] = useState<string | null>('');

    useEffect(() => {
        setDiraction('');
    }, [diraction])

    return <ToursBoard>
        <div className="top-section">
            <div className="tours-title" id="scrollTo">{POPULAR_TOURS}</div>
            <div className="custom-carousel-controls d-flex">
                <div onClick={() => setDiraction('prev')}><ArrowControlButton diraction="prev" /></div>
                <div onClick={() => setDiraction('next')}><ArrowControlButton diraction="next" /></div>
            </div>
        </div>
        <div className="middle-section">
            {error && <div className="error">{error.message}</div>}
            {loading ? <div>Loading...</div> : <ToursSliderLayout diraction={diraction} slides={data.rockets} />}
        </div>
    </ToursBoard>;
};
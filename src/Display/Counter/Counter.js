import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';

const Counter = forwardRef((props, ref) => {

    const {start, end, interval, step, onTick, ...spanProps} = props;

    const [counter, setCounter] = useState(start);

    const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        const timer =
            step !== 0 &&
            isActive &&
            setInterval(() => {
                let nextCounter = counter + step;
                if (step < 0 && nextCounter <= end) {
                    setIsActive(false);
                    nextCounter = end;
                } else if (step > 0 && nextCounter >= end) {
                    setIsActive(false);
                    nextCounter = end;
                }
                setCounter(nextCounter);
                if (props.hasOwnProperty('onTick'))
                    props.onTick(nextCounter);
            }, interval);

        if (!isActive) clearInterval(timer);

        return () => clearInterval(timer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, props, isActive]);

    useImperativeHandle(
        ref,
        () => ({
            restart() {
                setCounter(start);
                setIsActive(true);
            }
        }));

    return (
        <span {...spanProps}>{counter.toString()}</span>
    );

});

Counter.defaultProps = {
    start: 60,
    end: 0,
    step: -1,
    interval: 1000,
    onTick: () => {}
};

export default Counter;

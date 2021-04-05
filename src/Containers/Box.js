import React from 'react';

/**
 * Container box
 * Web: &lt;div&gt; tag
 * Native: <View>
 *
 * @param {object} props.className Css styles
 * @param props.children
 */

const Box = React.forwardRef((props, ref) => {

    return (
        <div {...props} ref={ref}>
            {props.children}
        </div>
    );

});

export default Box;

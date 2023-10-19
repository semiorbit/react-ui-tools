import React from 'react';

import {default as MuiGrid} from '@material-ui/core/Grid';

/**
 * Grid Container
 * Web: &lt;div&gt; tag
 * Native: <View>
 *
 * @param {object} props.className Css styles
 * @param props.children
 */

const Grid = props => {

    return (
        <MuiGrid container {...props} >
            {props.children}
        </MuiGrid>
    );
};


export default Grid;

import React from 'react';

import {default as MuiGrid} from '@mui/material/Grid';

/**
 * Grid Container
 * Web: &lt;div&gt; tag
 * Native: <View>
 *
 * @param {object} props.className Css styles
 * @param props.children
 */

const GridItem = props => {
    return (
        <MuiGrid item {...props}>
            {props.children}
        </MuiGrid>
    );
};

export default GridItem;

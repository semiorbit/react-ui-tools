import React from 'react';

import Grid from '@material-ui/core/Grid';

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
        <Grid item {...props}>
            {props.children}
        </Grid>
    );
};

export default GridItem;

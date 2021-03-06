import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const InlineAlert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default InlineAlert;

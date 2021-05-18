# Semiorbit React UI Tools

* A collection of wrappers for Material-ui controls
* Custom UI controls

# useAlert()

React hook that utilize material-ui Alert component to easily prompt messages to user interface.

# Usage

```javascript

import React from 'react';
import useAlert from "@semiorbit/react-ui-tools/Containers/useAlert";

const MyView = props => {

    const alert = useAlert();

    alert.error('Connection Failed');

    return (
        <div>
            Some content here!
            <form>
                <input type="text" />
                ...etc
            </form>
            {alert.show()}
        </div>
    );
    
};

export default MyView;

```

# Reference


Method | Description
--- | ---
alert.error(msg) | Build error message
alert.warning(msg) | Build warning message
alert.info(msg) | Build info message
alert.success(msg) | Build success message
alert.show() | Output alert
alert.set(msg, severity) | Build message and assign severity which is 'success' by default.
alert.global(msg, severity) | Assign global message that can be displayed in another component, by just calling alert.show()
alert.clearGlobal() | Clear global message 


# License

MIT
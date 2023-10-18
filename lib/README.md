# Semiorbit React UI Tools

* A collection of wrappers for Material-ui controls [Button, Password, Select, TextField, Checkbox]
* Custom UI controls [Section, Counter, CheckAdornment]

# useAlert()

React hook that utilize material-ui Alert component to easily prompt messages to user interface.

# Usage

```javascript

import React from 'react';
import useAlert from "@semiorbit/react-ui-tools/Alert/useAlert";

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


| Method                      | Description                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------|
| alert.error(msg)            | Build error message                                                                            |
| alert.warning(msg)          | Build warning message                                                                          |
| alert.info(msg)             | Build info message                                                                             |
| alert.success(msg)          | Build success message                                                                          |
| alert.show()                | Output alert                                                                                   |
| alert.set(msg, severity)    | Build message and assign severity which is 'success' by default.                               |
| alert.global(msg, severity) | Assign global message that can be displayed in another component, by just calling alert.show() |
| alert.clearGlobal()         | Clear global message                                                                           |
| alert.isClosed()            | Boolean. Check if the user closed the alert.                                                   |
| alert.onClose(handler)      | Pass function or event handler to be fired when user closes alert.                             |


# useMobileView

A shortcut for useMediaQuery(theme.breakpoints.down(breakpoint)) in MUI

## Usage

```javascript

import useAlert from "@semiorbit/react-ui-tools/Containers/Grid/useAlert";

const isMobileView = useMobileView('sm');

if (isMobileView) {
 // something ...
}

```


# License

MIT
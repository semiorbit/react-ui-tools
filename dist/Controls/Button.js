import React from 'react';
import MuiButton from '@mui/material/Button';
import { Trans } from 'react-i18next';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * @param {} props
 * @param props.fullWidth
 */
var Button = function Button(props) {
  return /*#__PURE__*/React.createElement(MuiButton, _extends({
    classes: {
      root: 'sc-button',
      outlined: 'sc-outlined'
    }
  }, props), /*#__PURE__*/React.createElement(Trans, null, props.children));
};
Button.defaultProps = {
  variant: "contained",
  margin: "normal",
  color: "primary"
};

export { Button as default };

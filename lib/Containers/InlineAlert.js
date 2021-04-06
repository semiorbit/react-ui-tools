import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function _extends() {
  _extends = Object.assign || function (target) {
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

var InlineAlert = function InlineAlert(props) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
};

export default InlineAlert;

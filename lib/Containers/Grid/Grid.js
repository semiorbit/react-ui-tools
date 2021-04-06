import React from 'react';
import MuiGrid from '@material-ui/core/Grid';

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

/**
 * Grid Container
 * Web: &lt;div&gt; tag
 * Native: <View>
 *
 * @param {object} props.className Css styles
 * @param props.children
 */

var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement(MuiGrid, _extends({
    container: true
  }, props), props.children);
};

export default Grid;

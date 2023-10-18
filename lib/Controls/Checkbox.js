import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';

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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded = ["checked", "onChange", "label", "margin", "value", "color", "multiline"];
var Checkbox = function Checkbox(props) {
  props.checked;
    props.onChange;
    props.label;
    props.margin;
    props.value;
    props.color;
    props.multiline;
    var ctrlProps = _objectWithoutProperties(props, _excluded);
  var styles = {
    chkRoot: {},
    fclRoot: {}
  };
  if (props.multiline) {
    styles = {
      chkRoot: {
        paddingTop: "2px",
        alignItems: "start"
      },
      fclRoot: {
        alignItems: "flex-start"
      }
    };
  }
  return /*#__PURE__*/React.createElement(FormControlLabel, _extends({
    className: props.className,
    margin: props.margin,
    style: styles.fclRoot,
    control: /*#__PURE__*/React.createElement(MuiCheckbox, {
      checked: props.checked,
      onChange: props.onChange,
      value: props.value,
      color: props.color,
      style: styles.chkRoot
    }),
    label: props.label
  }, ctrlProps));
};
Checkbox.defaultProps = {
  margin: "normal",
  color: "primary"
};

export { Checkbox as default };

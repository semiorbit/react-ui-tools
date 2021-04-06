import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';
import { Trans } from 'react-i18next';

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

/**
 *
 * Select
 *
 * @param {string} props.optionTitle
 * @param {string} props.optionId
 * @param {'standard'|'outlined'|'filled'} props.variant
 * @param {'none'|'dense'|'normal'} props.margin
 *
 *
 * @param {function} props.onChange
 *
 * @param {object} props.className Css styles
 * @param {object} props.FormHelperTextProps
 * @param {object} props.InputLabelProps
 * @param {object} props.InputProps
 * @param {ref} props.inputRef
 * @param {object} props.SelectProps
 * @param props.children
 *
 */

var Select = function Select(props) {
  var optionId = props.optionId,
      optionTitle = props.optionTitle,
      margin = props.margin,
      label = props.label,
      required = props.required,
      helperText = props.helperText,
      selectProps = _objectWithoutProperties(props, ["optionId", "optionTitle", "margin", "label", "required", "helperText"]);

  var items = props.children ? props.children : props.options && props.options.length > 0 ? props.options.map(function (option) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option[optionId],
      value: option[optionId]
    }, option[optionTitle]);
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    disabled: true
  }, "---");
  var fHelper = helperText ? /*#__PURE__*/React.createElement(FormHelperText, {
    error: props.error
  }, helperText) : '';
  return /*#__PURE__*/React.createElement(FormControl, {
    className: props.className,
    margin: margin
  }, /*#__PURE__*/React.createElement(InputLabel, {
    id: props.id + "-label",
    error: props.error,
    required: required
  }, /*#__PURE__*/React.createElement(Trans, null, label)), /*#__PURE__*/React.createElement(MuiSelect, _extends({
    labelId: props.id + "-label"
  }, selectProps), items), fHelper);
};

Select.defaultProps = {
  optionId: "id",
  optionTitle: "title",
  margin: "normal",
  required: false
};

export default Select;

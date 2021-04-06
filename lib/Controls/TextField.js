import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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
 * Text Field
 *
 * @see https://material-ui.com/api/text-field/
 *
 * @param {string} props.label
 * @param {string} props.id
 * @param {name} props.name
 * @param {string} props.defaultValue
 * @param {string} props.value
 * @param {string} props.placeholder
 * @param {string} props.type a valid HTML5 input type.
 * @param {object} props.inputProps Attributes applied to the input element.
 * @param {string} props.autoComplete
 * @param {boolean} props.autoFocus
 * @param {boolean} props.autoComplete
 * @param {boolean} props.disabled
 * @param {boolean} props.error If true, the label will be displayed in an error state.
 * @param {boolean} props.fullWidth
 * @param {node} props.helperText
 * @param {boolean} props.multiline
 * @param {string|number} props.rows
 * @param {string|number} props.rowsMax
 * @param {boolean} props.required If this option is set you must pass the options of the select as children.
 * @param {boolean} props.select  If this option is set you must pass the options of the select as children.
 * @param {'standard'|'outlined'|'filled'} props.variant
 * @param {'none'|'dense'|'normal'} props.margin
 *
 *
 * @param {function} props.onChange
 * @param {function} props.onBlur
 *
 * @param {object} props.className Css styles
 * @param {object} props.FormHelperTextProps
 * @param {object} props.InputLabelProps
 * @param {object} props.InputProps
 * @param {ref} props.inputRef
 * @param {object} props.SelectProps
 * @param props.children
 */

var TextField = function TextField(props) {
  var label = props.label,
      InputProps = props.InputProps,
      InputLabelProps = props.InputLabelProps,
      fldProps = _objectWithoutProperties(props, ["label", "InputProps", "InputLabelProps"]);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return /*#__PURE__*/React.createElement(MuiTextField, _extends({
    classes: {
      root: 'sc-text-field'
    },
    InputLabelProps: _objectSpread2({
      classes: {
        root: 'sc-label',
        focused: 'sc-focused',
        shrink: 'sc-shrink',
        disabled: 'sc-disabled',
        error: 'sc-error'
      }
    }, InputLabelProps),
    InputProps: _objectSpread2({
      classes: {
        input: 'sc-input',
        underline: 'sc-underline',
        focused: 'sc-focused',
        disabled: 'sc-disabled',
        error: 'sc-error'
      }
    }, InputProps),
    FormHelperTextProps: {
      classes: {
        root: 'sc-helper'
      }
    },
    label: t(label)
  }, fldProps));
};

TextField.defaultProps = {
  margin: "normal"
};

export default TextField;

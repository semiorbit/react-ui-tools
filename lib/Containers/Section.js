import React from 'react';
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
 * Section with title
 *
 * @param {object} props.className Css styles
 * @param {string} props.title Included in a heading tag
 * @param {boolean} [props.h=1] Heading tag level
 * @param props.children
 */

var Section = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var h = props.h;
      props.title;
      var tagProps = _objectWithoutProperties(props, ["h", "title"]);

  var HTag = "h".concat(h);
  return /*#__PURE__*/React.createElement("section", _extends({}, tagProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(HTag, null, /*#__PURE__*/React.createElement(Trans, null, props.title)), props.children);
});
Section.defaultProps = {
  h: 1
};

export default Section;

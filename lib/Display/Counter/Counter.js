import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Counter = /*#__PURE__*/forwardRef(function (props, ref) {
  var start = props.start,
      end = props.end,
      interval = props.interval,
      step = props.step;
      props.onTick;
      var spanProps = _objectWithoutProperties(props, ["start", "end", "interval", "step", "onTick"]);

  var _useState = useState(start),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isActive = _useState4[0],
      setIsActive = _useState4[1];

  useEffect(function () {
    var timer = step !== 0 && isActive && setInterval(function () {
      var nextCounter = counter + step;

      if (step < 0 && nextCounter <= end) {
        setIsActive(false);
        nextCounter = end;
      } else if (step > 0 && nextCounter >= end) {
        setIsActive(false);
        nextCounter = end;
      }

      setCounter(nextCounter);
      if (props.hasOwnProperty('onTick')) props.onTick(nextCounter);
    }, interval);
    if (!isActive) clearInterval(timer);
    return function () {
      return clearInterval(timer);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, props, isActive]);
  useImperativeHandle(ref, function () {
    return {
      restart: function restart() {
        setCounter(start);
        setIsActive(true);
      }
    };
  });
  return /*#__PURE__*/React.createElement("span", spanProps, counter.toString());
});
Counter.defaultProps = {
  start: 60,
  end: 0,
  step: -1,
  interval: 1000,
  onTick: function onTick() {}
};

export default Counter;

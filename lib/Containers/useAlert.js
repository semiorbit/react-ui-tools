import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { isIphoneX } from '@semiorbit/is-iphonex';

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

var InlineAlert = function InlineAlert(props) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
};

var Alert = function Alert(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    setOpen(props.open);
  }, [props.open]);
  var handleClose = useCallback(function (event, reason) {
    if (reason === 'clickaway') return;
    setOpen(false);
    props.onClose(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(Snackbar, {
    open: open,
    autoHideDuration: 0,
    onClose: function onClose(e, reason) {
      return handleClose;
    },
    style: isIphoneX() ? {
      bottom: '28px'
    } : {}
  }, /*#__PURE__*/React.createElement(InlineAlert, {
    onClose: handleClose,
    severity: props.severity
  }, props.children));
};

Alert.defaultProps = {
  open: true,
  severity: "error",
  onClose: function onClose() {}
};

var __semiorbit__global_alert = null;

var useAlert = function useAlert() {
  var _useState = useState(__semiorbit__global_alert ? __semiorbit__global_alert : ['', 'error']),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  useEffect(function () {
    __semiorbit__global_alert = null;
  }, []);
  return useMemo(function () {
    return {
      show: function show() {
        return /*#__PURE__*/React.createElement(Alert, {
          severity: msg[1],
          open: msg[0].length > 0,
          onClose: function onClose() {
            return setMsg(['', 'error']);
          }
        }, msg[0]);
      },
      error: function error(message) {
        return setMsg([message, 'error']);
      },
      warning: function warning(message) {
        return setMsg([message, 'warning']);
      },
      info: function info(message) {
        return setMsg([message, 'info']);
      },
      success: function success(message) {
        return setMsg([message, 'success']);
      },
      set: function set(message) {
        var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
        return setMsg([message, severity]);
      },
      global: function global(message) {
        var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
        return setMsg(__semiorbit__global_alert = [message, severity]);
      },
      clearGlobal: function clearGlobal() {
        return __semiorbit__global_alert = null;
      }
    };
  }, [msg]);
};

export default useAlert;

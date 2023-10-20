import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { isIphoneX } from '@semiorbit/is-iphonex';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

var InlineAlert = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    elevation: 6,
    variant: "filled",
    ref: ref
  }, props));
});

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
    props.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  var _useState = useState(__semiorbit__global_alert ? __semiorbit__global_alert : ['', 'error', false]),
    _useState2 = _slicedToArray(_useState, 2),
    msg = _useState2[0],
    setMsg = _useState2[1];
  var onCloseHandler = useRef();
  useEffect(function () {
    __semiorbit__global_alert = null;
  }, []);
  return useMemo(function () {
    return {
      show: function show() {
        return msg[0].length > 0 ? /*#__PURE__*/React.createElement(Alert, {
          severity: msg[1],
          open: msg[2],
          onClose: function onClose() {
            setMsg(['', msg[1], false]);
            if (typeof onCloseHandler.current === 'function') onCloseHandler.current();
          }
        }, msg[0]) : null;
      },
      error: function error(message) {
        return setMsg([message, 'error', true]);
      },
      warning: function warning(message) {
        return setMsg([message, 'warning', true]);
      },
      info: function info(message) {
        return setMsg([message, 'info', true]);
      },
      success: function success(message) {
        return setMsg([message, 'success', true]);
      },
      set: function set(message) {
        var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
        return setMsg([message, severity, true]);
      },
      global: function global(message) {
        var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
        return setMsg(__semiorbit__global_alert = [message, severity, true]);
      },
      clearGlobal: function clearGlobal() {
        return __semiorbit__global_alert = null;
      },
      isClosed: function isClosed() {
        return !msg[2];
      },
      onClose: function onClose(handler) {
        return onCloseHandler.current = handler;
      }
    };
  }, [msg]);
};

export { useAlert as default };

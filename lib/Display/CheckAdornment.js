import { IS_VALID, IN_PROGRESS, ERR_CHECKING_FAILED } from 'lib/Forms/validation';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import SyncIcon from '@material-ui/icons/Sync';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

var CheckAdornment = function CheckAdornment(props) {
  var adornment = null;

  if (props.fld.valid === IS_VALID) {
    adornment = /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(DoneIcon, {
      style: {
        color: "green"
      }
    }));
  } else if (props.fld.valid === IN_PROGRESS) {
    adornment = /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(SyncIcon, {
      className: "rotating",
      style: {
        color: "orange"
      }
    }));
  } else if (props.fld.valid === ERR_CHECKING_FAILED) {
    adornment = /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: props.onClickHandler
    }, /*#__PURE__*/React.createElement(SyncIcon, {
      color: "error"
    })));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, adornment);
};

export { CheckAdornment };

import { IS_VALID, IN_PROGRESS, ERR_CHECKING_FAILED } from '@semiorbit/react-form-provider/validation';
import InputAdornment from '@mui/material/InputAdornment';
import DoneIcon from '@mui/icons-material/Done';
import SyncIcon from '@mui/icons-material/Sync';
import IconButton from '@mui/material/IconButton';
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

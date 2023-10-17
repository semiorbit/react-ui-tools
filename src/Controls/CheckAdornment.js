import {ERR_CHECKING_FAILED, IN_PROGRESS, IS_VALID} from "@semiorbit/react-form-provider/validation";
import InputAdornment from "@mui/material/InputAdornment";
import DoneIcon from "@mui/icons-material/Done";
import SyncIcon from "@mui/icons-material/Sync";
import IconButton from "@mui/material/IconButton";
import React from "react";

export const CheckAdornment = (props) => {

    let adornment = null;

    if (props.fld.valid === IS_VALID) {

        adornment = (<InputAdornment position="end">
            <DoneIcon style={{color: "green"}}/>
        </InputAdornment>);

    } else if (props.fld.valid === IN_PROGRESS) {

        adornment = (<InputAdornment position="end">
            <SyncIcon className={"rotating"} style={{color: "orange"}}/>
        </InputAdornment>);

    } else if (props.fld.valid === ERR_CHECKING_FAILED) {

        adornment = (<InputAdornment position="end">
            <IconButton
                onClick={props.onClickHandler}
            >
                <SyncIcon
                    color={"error"}/>
            </IconButton>
        </InputAdornment>);

    }

    return (<>{adornment}</>);

};
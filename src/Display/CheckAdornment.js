import {ERR_CHECKING_FAILED, IN_PROGRESS, IS_VALID} from "lib/Forms/validation";
import InputAdornment from "@material-ui/core/InputAdornment";
import DoneIcon from "@material-ui/icons/Done";
import SyncIcon from "@material-ui/icons/Sync";
import IconButton from "@material-ui/core/IconButton";
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
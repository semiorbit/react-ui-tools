import React, {useMemo, useState, useEffect, useRef} from 'react';
import Alert from "./Alert";


let __semiorbit__global_alert = null;

const useAlert = () => {

    const [msg, setMsg] = useState(__semiorbit__global_alert ? __semiorbit__global_alert : ['', 'error', false]);

    let onCloseHandler = useRef();

    useEffect(() => {
        __semiorbit__global_alert = null;
    }, []);

    return useMemo(() => {
        return {
            show: () => msg[0].length > 0 ? (
                <Alert
                    severity={msg[1]}
                    open={msg[2]}
                    onClose={() => {
                        setMsg(['', msg[1], false]);
                        if (typeof (onCloseHandler.current) === 'function') (onCloseHandler.current)();
                    }}
                >{msg[0]}</Alert>
            ) : null,
            error: (message) => setMsg([message, 'error', true]),
            warning: (message) => setMsg([message, 'warning', true]),
            info: (message) => setMsg([message, 'info', true]),
            success: (message) => setMsg([message, 'success', true]),
            set: (message, severity = 'success') => setMsg([message, severity, true]),
            global: (message, severity= 'success') => setMsg(__semiorbit__global_alert = [message, severity, true]),
            clearGlobal: () => __semiorbit__global_alert = null,
            isClosed: () => !msg[2],
            onClose: (handler) => onCloseHandler.current = handler
        }
    }, [msg]);

};

export default useAlert;

import React, {useMemo, useState} from 'react';
import Alert from "./Alert";

let __semiorbit__global_alert = null;

const useAlert = () => {

    const [msg, setMsg] = useState(__semiorbit__global_alert ? __semiorbit__global_alert : ['', 'error']);



    return useMemo(() => {
        return {
            show: () => {
                __semiorbit__global_alert = null;
                return (
                    <Alert
                        severity={msg[1]}
                        open={msg[0].length > 0}
                        onClose={() => setMsg(['', 'error'])}
                    >{msg[0]}</Alert>
                );
            },
            error: (message) => setMsg([message, 'error']),
            warning: (message) => setMsg([message, 'warning']),
            info: (message) => setMsg([message, 'info']),
            success: (message) => setMsg([message, 'success']),
            set: (message, severity = 'success') => setMsg([message, severity]),
            global: (message, severity= 'success') => setMsg(__semiorbit__global_alert = [message, severity]),
        }
    }, [msg]);

};

export default useAlert;

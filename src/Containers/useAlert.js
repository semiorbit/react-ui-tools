import React, {useMemo, useState} from 'react';
import Alert from "./Alert";


const useAlert = () => {

    const [msg, setMsg] = useState(['', 'error']);



    return useMemo(() => {
        return {
            show: () => (
                <Alert
                    severity={msg[1]}
                    open={msg[0].length > 0}
                    onClose={() => setMsg(['', 'error'])}
                >{msg[0]}</Alert>
            ),
            error: (message) => setMsg([message, 'error']),
            warning: (message) => setMsg([message, 'warning']),
            info: (message) => setMsg([message, 'info']),
            success: (message) => setMsg([message, 'success'])
        }
    }, [msg]);

};

export default useAlert;

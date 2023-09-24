import React from "react";

function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleEsc(e) {
            if (e.code === 'Escape') {
                callback(e)
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [callback])
}

export default useEscapeKey
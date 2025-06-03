import { useState } from "react";


export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    })
    window.addEventListener("online", () => {
        setOnlineStatus(true);
    })
    return onlineStatus;
}
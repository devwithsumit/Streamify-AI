
export const extractString = (string) => {
    // for Ex- Extract "email already in use" from "auth/email-already-in-use"
    const mainMessage = string.split("/")[1].split("-").join(" ");

    // Capitalising first letter
    return mainMessage.charAt(0).toUpperCase() + mainMessage.slice(1);
}
export const getSerializableUser = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
    // providerData: user.providerData?.map(provider => ({
    //     providerId: provider.providerId,
    //     uid: provider.uid,
    //     displayName: provider.displayName,
    //     email: provider.email,
    //     photoURL: provider.photoURL
    // }))
});


export const extractString = (string) => {
    // for Ex- Extract "email already in use" from "auth/email-already-in-use"
    const mainMessage = string.split("/")[1].split("-").join(" ");

    // Capitalising first letter
    return mainMessage.charAt(0).toUpperCase() + mainMessage.slice(1);
}
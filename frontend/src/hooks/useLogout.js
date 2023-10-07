import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // // Clear user code from local storage
        // localStorage.removeItem('userCode');

        // dispatch logout action
        dispatch({ type: "LOGOUT" });
    };

    return {logout};
};
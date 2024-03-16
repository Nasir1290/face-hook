import { useContext, useDebugValue } from "react";
import { authContext } from "../context";

const useAuth = () => {
    const { auth } = useContext(authContext);
    useDebugValue(auth, (auth) => auth?.user ? "Logged In" : "Logged Out");
    return useContext(authContext);
}

export default useAuth;
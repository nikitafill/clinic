import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { publicRoutes } from "./publicRouter";
import { userRoutes } from "./userRouter";
import { adminRoutes } from "./adminRouter";
import { ADMIN_APPOITMENTS_ROUTE, LOGIN_ROUTE, USER_MAIN_MENU_ROUTE } from "../Utilts/consts";

const AppRouter = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [tokenSession, setTokenSession] = useState(sessionStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem("token"));
            setTokenSession(sessionStorage.getItem("token"));
            navigate(USER_MAIN_MENU_ROUTE);
        };

        window.addEventListener("storage", handleStorageChange);
    }, [navigate]);
    
    if ((token && localStorage.getItem("isEmployee") === "false") /*|| (tokenSession && sessionStorage.getItem("isEmployee") === false)*/) {
        return (
            <Routes>
                {userRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
                <Route key="*" path="*" element={<Navigate to={ADMIN_APPOITMENTS_ROUTE} />} />
            </Routes>
        );
    }

    if ((token && localStorage.getItem("isEmployee") === "true") /*|| (tokenSession && sessionStorage.getItem("isEmployee") === true)*/) {
         return (
             <Routes>
                 {adminRoutes.map(({ path, Component }) => (
                     <Route key={path} path={path} element={<Component />} exact />
                 ))}
                 <Route key="*" path="*" element={<Navigate to={ADMIN_APPOITMENTS_ROUTE} />} />
             </Routes>
         );
    }

    if (!token || !tokenSession) {
        return (
            <Routes>
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
                <Route key="*" path="*" element={<Navigate to={USER_MAIN_MENU_ROUTE} />} />
            </Routes>
        );
    }
};

export default AppRouter;
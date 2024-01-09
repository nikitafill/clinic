import LoginPage from "../Pages/Authorization/Auth";
//import RegistrationPage from "../components/authorization/RegistrationPage";
import Home from "../Pages/Home";
//import Profile from "../Pages/Profile";
import Services from "../Pages/Service";
import Prices from "../Pages/Price";
import Doctors from "../Pages/Doctors";
/*import Appointment from "../Pages/Doctors";*/
import CardioDep from "../Pages/Departments/Cardio";
import RegistrationPage from "../Pages/Authorization/Registration";
import Appointment from "../Components/AppointmentForm";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";

export const publicRoutes = [
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/registration",
        Component: RegistrationPage,
    },
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/services",
        Component: Services,
    },
    {
        path: "/prices",
        Component: Prices,
    },
    {
        path: "/doctors",
        Component: Doctors,
    },
    {
        path: "/appointment",
        Component: Appointment,
    },
    {
        path: "/services/cardio",
        Component: CardioDep,
    },
    {
        path: "/profile",
        Component: AdminPanel,
    },
];
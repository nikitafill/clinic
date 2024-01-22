import Home from "../Pages/Home";
import Services from "../Pages/Service";
import Prices from "../Pages/Price";
import Doctors from "../Pages/Doctors";
import Appointment from "../Components/AppointmentForm";
import AdminPanel from "../Pages/AdminPanel";
/*Departmets";*/
import CardioDep from "../Pages/Departments/Cardio";
import EndoDep from "../Pages/Departments/Endo";
import NeuroDep from "../Pages/Departments/Neuro";
import GynaecDep from "../Pages/Departments/Gynaec";
import UrolDep from "../Pages/Departments/Urol";
import OrthDep from "../Pages/Departments/Orth";

export const adminRoutes = [
    /*{
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/registration",
        Component: RegistrationPage,
    },*/
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
        path: "/services/neuro",
        Component: NeuroDep,
    },
    {
        path: "/services/urol",
        Component: UrolDep,
    },
    {
        path: "/services/gynaec",
        Component: GynaecDep,
    },
    {
        path: "/services/orth",
        Component: OrthDep,
    },
    {
        path: "/services/endo",
        Component: EndoDep,
    },
    {
        path: "/profile",
        Component: AdminPanel,
    },
];
import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const createDoctor = async ({ email, password }) => {
    const {data} = await $authHost.post('api/doctor/create', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const getAllDoctors = async () => {
    const {data} = await $host.get('api/doctor/')
    return data
}

export const deleteDoctor = async (id) => {
    const {data} = await $authHost.delete('api/doctors/delete' + id)
    return data
}
export const getDoctorsByDepartmentName = async (departmentName) =>{
    const {data} = await $host.get('api/doctor/' + departmentName)
    return data
}
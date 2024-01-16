import { $authHost, $host } from ".";

export const getAllDepartments = async () => {
    const {data} = await $host.get('api/department/')
    return data
}
export const getAppointmentByDoctorId = async (Id) => {
    const {data} = await $authHost.get('api/department/', Id)
    return data
}
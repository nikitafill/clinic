import { $authHost, $host } from ".";

export const createAppointment = async (appointment) => {
    const {data} = await $host.post('api/appointment/create/', appointment)
    return data
}
export const deleteAppointment = async (Id) => {
    const {data} = await $authHost.delete('api/appointment/delete/'+ Id)
    return data
}
export const getAppointmentByDoctorId = async (Id) => {
    const {data} = await $authHost.get('api/appointment/doctor/', Id)
    return data
}
export const getAppointmentByPatientId = async (Id) => {
    const {data} = await $authHost.get('api/appointment/patient/', Id)
    return data
}

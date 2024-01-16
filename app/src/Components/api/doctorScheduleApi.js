import { $authHost, $host } from ".";

export const getSchedule = async (doctorId) => {
    const {data} = await $authHost.get('api/schedule/'+ doctorId)
    return data
}
export const getAppointmentByDoctorId = async (Id) => {
    const {data} = await $authHost.get('api/department/', Id)
    return data
}
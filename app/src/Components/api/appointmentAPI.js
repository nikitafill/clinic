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
export const getAppointmentsByDoctorId = async (doctorId) => {
    
    const { data } = await $authHost.get(`api/appointment/doctor/${doctorId}`);
    return data;
    
};
  
  // POST-запрос
export const getAppointmentsByPatientInfo = async (patient) => {
    const { data } = await $authHost.post(`api/appointment/patient`, patient);
    return data;
};
  
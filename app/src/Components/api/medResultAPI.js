import { $authHost, $host } from ".";

export const getAllMedicalResultsByPatientId = async (Id) => {
    const {data} = await $authHost.get('api/profile/Patient/' + Id)
    return data
}

export const createMedicalResult = async (medicalResult) => {
    const {data} = await $authHost.post('api/medicalResult/create', medicalResult)
    return data
}
export const updMMedicalResult = async (Doctor_Id, Id,updatedMedicalResult) => {
    const {data} = await $authHost.put(`api/profile/Patient/${Doctor_Id}/${Id}`, updatedMedicalResult);
    return data;
}
// GET-запрос
export const getMedicalResultsByDoctorId = async (doctorId) => {
      const { data } = await $authHost.get(`api/medicalResult/doctor/${doctorId}`);
      return data;
};
  
  // POST-запрос
export const getMedicalResultsByPatientInfo = async (patient) => {
      const { data } = await $authHost.post(`api/medicalResult/patient`, patient);
      return data;
};
  
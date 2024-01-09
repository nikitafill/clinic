import { $authHost, $host } from ".";

export const getAllMedicalResultsByPatientId = async (Id) => {
    const {data} = await $authHost.get('api/profile/Patient/' + Id)
    return data
}

export const createMedicalResult = async (Patient_Id, MedicalResult) => {
    const {data} = await $authHost.post('api/profile/${Patietn_Id}/create'+ Patient_Id,  MedicalResult)
    return data
}
export const updMMedicalResult = async (Doctor_Id, Id,updatedMedicalResult) => {
    const {data} = await $authHost.put(`api/profile/Patient/${Doctor_Id}/${Id}`, updatedMedicalResult);
    return data;
}
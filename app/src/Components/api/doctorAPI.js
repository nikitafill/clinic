import { $authHost, $host } from ".";

export const createDoctor = async (doctor) => {
    const {data} = await $authHost.post('api/doctors/', doctor)
    return data
}

export const getAllDoctors = async () => {
    const {data} = await $host.get('api/doctor/')
    return data
}

export const deleteDoctor = async (id) => {
    const {data} = await $authHost.delete('api/doctors/delete' + id)
    return data
}
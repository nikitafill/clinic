import { $authHost, $host } from ".";

export const getAllService = async () => {
    const {data} = await $host.get('api/service/');
    return data;
}

/*export const getAll = async (Id) => {
    const {data} = await $host.get('api/services/Department' + Id)
    return data
}*/
export const createService = async (service) => {
    const {data} = await $authHost.post('api/service/create', service);
    return data;
}
export const getServicesByDepartmentName = async (departmentName) =>{
    const {data} = await $host.get('api/service/' + departmentName)
    return data
}
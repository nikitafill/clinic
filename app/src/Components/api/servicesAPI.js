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
    console.log('Before request:', service);
    const {data} = await $host.post('api/service/create', service);
    console.log('After request:', data);
    return data;
}

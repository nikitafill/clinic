import { $authHost, $host } from ".";

export const getAllService = async () => {
    const {data} = await $host.get('api/prices')
    return data
}

/*export const getAll = async (Id) => {
    const {data} = await $host.get('api/services/Department' + Id)
    return data
}*/
export const createService = async (services) => {
    const {data} = await $authHost.post('api/services/create', services)
    return data
}

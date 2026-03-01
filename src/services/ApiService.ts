import axios from 'axios';

export class ApiService {
    async get(url:string , headers = {}){
        try{
            const response = await axios.get(url , {headers});
            return response.data

        }catch(error: any){
            throw new Error(error.response?.data?.message || "API request failed")
        }
    }
}

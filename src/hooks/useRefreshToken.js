
import axios from '../api/axios';
import useGlobal from './useGlobal'

const useRefreshToken = () => {

    const {setAccessToken} = useGlobal();
    const refresh = async() =>{

        const response = await axios.get('/refresh',{
            withCredentials: true
        })
       
const token = { token: response.data}
console.log(token)
        setAccessToken(token);
        return response.data;
    }
  return refresh;
}

export default useRefreshToken
import React,{useEffect} from 'react'
import useGlobal from '../hooks/useGlobal';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import './Profile.css'
// import './styles/css/main.css'


const Profile = () => {
    const {accessToken,setUser,user} = useGlobal();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        function getd() {
        
          const token = accessToken.token;
          
          
          axiosPrivate.get(`api/user`,{
              headers: {"Authorization" : `Bearer ${token}` },
              withCredentials: true
            })
            .then((res) => {
              
                setUser(res.data);})
                .catch((err) => {
               
                  if(err.response.status===400){
                    alert("session expired please login again")
                
                
                  }
                })
        
            .finally();
    
        }
    
         getd();}
      
    
    , []);

  return (
    <div className='x1'>
        <div className='namex1'><p>{user.username}</p></div>
        <div className='emailx1'><p>{user.email}</p></div>
        <div className='placex1'><p>{user.place}</p></div>
    </div>
  )
}

export default Profile
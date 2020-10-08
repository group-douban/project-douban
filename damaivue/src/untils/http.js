import axios from 'axios'

export const get = ({url,params,type='GET'})=>{
    return axios({
        url,
        params,
        type:'GET'
    })  
    .then((result)=>{
        return result
    })
    .catch((err)=>{
        return err
    })
     
}


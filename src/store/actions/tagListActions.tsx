import axios from "axios";
import { TAGLISTSUCCESS,TAGLOADING,TAGTFAILED } from "./types";
const tagFailed = (data:any) => ({type: TAGTFAILED, payload: data});
const tagLoading = () => ({type: TAGLOADING,});
const tagListSuccess = (data:any) => ({type: TAGLISTSUCCESS, payload: data});

export function getAllTags(){
    return function(dispatch:any){
        dispatch(tagLoading());
        axios({
            method:"get",
            maxBodyLength: Infinity,
            url: 'https://api.extrazone.com/tags/list',
            headers: { 
                'X-Country-Id': 'TR', 
                'X-Language-Id': 'TR'
              }
        }).then((res:any)=>{
            dispatch(tagListSuccess(res.data))
    
       
        }).catch((err:any)=>{
            dispatch(tagFailed(err))
        })

    }
}
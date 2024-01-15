import axios from "axios";
import { PROMOTIONFAILED,PROMOTIONLISTSUCCESS,PROMOTIONLOADING } from "./types";
const promotionFailed = (data:any) => ({type: PROMOTIONFAILED, payload: data});
const promotionLoading = () => ({type: PROMOTIONLOADING,});
const promotionListSuccess = (data:any) => ({type: PROMOTIONLISTSUCCESS, payload: data});

export function getAllPromotions(){
    return function(dispatch:any){
        dispatch(promotionLoading());
        axios({
            method:"get",
            maxBodyLength: Infinity,
            url: 'https://api.extrazone.com/promotions/list?Channel=PWA',
            headers: { 
                'X-Country-Id': 'TR', 
                'X-Language-Id': 'TR'
              }
        }).then((res:any)=>{
            dispatch(promotionListSuccess(res.data))

        }).catch((err:any)=>{
            dispatch(promotionFailed(err))
        })

    }
}
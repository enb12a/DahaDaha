import axios from "axios";
import { PROMOTIONDETAILFAILED,PROMOTIONDETAILLISTSUCCESS,PROMOTIONDETAILLOADING } from "./types";
const promotionDetailFailed = (data:any) => ({type: PROMOTIONDETAILFAILED, payload: data});
const promotionDetailLoading = () => ({type: PROMOTIONDETAILLOADING,});
const promotionDetailSuccess = (data:any) => ({type: PROMOTIONDETAILLISTSUCCESS, payload: data});

export function getPromotionDetail(id:number){
    return function(dispatch:any){
        dispatch(promotionDetailLoading());
        axios({
            method:"get",
            maxBodyLength: Infinity,
            url: `https://api.extrazone.com/promotions?Id=${id}`,
            headers: { 
                'X-Country-Id': 'TR', 
                'X-Language-Id': 'TR'
              }
        }).then((res:any)=>{
            dispatch(promotionDetailSuccess(res.data))

        }).catch((err:any)=>{
            dispatch(promotionDetailFailed(err))
        })

    }
}
 
import { PROMOTIONFAILED,PROMOTIONLISTSUCCESS,PROMOTIONLOADING } from "../actions/types";

const intialState = {
    loadingPromotion: false,
    promotions: [],
    errorPromotion: null,

}

export const promotionlistReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case PROMOTIONLOADING:
            return {
                ...state,
                loadingPromotion: true,
                promotions: [
                    {   BrandIconColor: "white",
                        BrandIconUrl: null,
                        BrandPromotionCardParticipationText: "",
                        Id: 0,
                        ImageUrl: null,
                        PromotionCardColor: "white",
                        RemainingText: "14.01.2024",
                        SeoName: "q4-drawing-promo-card",
                        Title: "",
                        ScenarioType: "",
                        Unavailable: false,
                        Unvisible: false,
                        ListButtonText: "",
                        ListButtonTextBackGroudColor: "white",
                        CardType: "Default",
                        ExternalUrl: "",
                        IsLuckyDay: false,
                        LuckyDayText: "",
                        LuckyDayTextColor: null,
                        LuckyDayBackgroundColor: null
                    },
                ],
                errorPromotion: null,
            

            };
        case PROMOTIONLISTSUCCESS:
            return {
                ...state,
                loadingPromotion: false,
                errorPromotion: null,
                promotions: action.payload
            };

        case PROMOTIONFAILED:
            return {
                ...state,
                loadingPromotion: false,
                errorPromotion: action.payload,
                promotions: [
                    {   BrandIconColor: "white",
                        BrandIconUrl: null,
                        BrandPromotionCardParticipationText: "",
                        Id: 0,
                        ImageUrl: null,
                        PromotionCardColor: "white",
                        RemainingText: "14.01.2024",
                        SeoName: "q4-drawing-promo-card",
                        Title: "",
                        ScenarioType: "",
                        Unavailable: false,
                        Unvisible: false,
                        ListButtonText: "",
                        ListButtonTextBackGroudColor: "white",
                        CardType: "Default",
                        ExternalUrl: "",
                        IsLuckyDay: false,
                        LuckyDayText: "",
                        LuckyDayTextColor: null,
                        LuckyDayBackgroundColor: null
                    },
                ],


            }
        default:
            return state;
    }
}
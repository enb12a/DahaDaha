
import { PROMOTIONDETAILFAILED, PROMOTIONDETAILLISTSUCCESS, PROMOTIONDETAILLOADING } from "../actions/types";

const intialState = {
    loadingPromotionDetail: false,
    promotion: [],
    errorPromotionDetail: null,

}

export const promotionDetailReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case PROMOTIONDETAILLOADING:
            return {
                ...state,
                loadingPromotionDetail: true,
                promotion: 
                    {
                        BrandIconColor: "white",
                        BrandIconUrl: null,
                        BrandPromotionCardParticipationText: "<p><span style=\"color: #ff0000;\">Hemen Katıl</span></p>",
                        Id: 0,
                        Description: "",
                        EndDate: "",
                        ImageUrl: null,
                        CountryTimeZone: "",
                        RemainingText: "",
                        StartDate: "",
                        Title: "",
                        Type: "",
                        ScenarioType: "",
                        SeoName: "",
                        Unavailable: false,
                        IsMapAvailable: false,
                        Unvisible: false,
                        DetailButtonText: "Hemen Katıl",
                        ListButtonText: null,
                        LuckyDayText: "",
                        LuckyDayTextColor: "",
                        LuckyDayBackgroundColor: "",
                        PromotionDetailItemAreas: [{
                            Title: "",
                            Description: "",
                        }],
                        Contents: [],
                        PromotionTags: [],
                        PromotionGalleries: [],
                        NextFlowConfigurations: {},
                        GameWin: null
                    },
                
                errorPromotionDetail: null,


            };
        case PROMOTIONDETAILLISTSUCCESS:
            return {
                ...state,
                loadingPromotionDetail: false,
                errorPromotionDetail: null,
                promotion: action.payload
            };

        case PROMOTIONDETAILFAILED:
            return {
                ...state,
                loadingPromotionDetail: false,
                errorPromotionDetail: action.payload,
                promotion: 
                    {
                        BrandIconColor: "white",
                        BrandIconUrl: null,
                        BrandPromotionCardParticipationText: "",
                        Id: 0,
                        Description: "",
                        EndDate: "",
                        ImageUrl: null,
                        CountryTimeZone: "",
                        RemainingText: "",
                        StartDate: "",
                        Title: "",
                        Type: "",
                        ScenarioType: "",
                        SeoName: "",
                        Unavailable: false,
                        IsMapAvailable: false,
                        Unvisible: false,
                        DetailButtonText: "Hemen Katıl",
                        ListButtonText: null,
                        LuckyDayText: "",
                        LuckyDayTextColor: "",
                        LuckyDayBackgroundColor: "",
                        PromotionDetailItemAreas: [{
                            Title: "",
                            Description: "",
                        }],
                        Contents: [],
                        PromotionTags: [],
                        PromotionGalleries: [],
                        NextFlowConfigurations: {},
                        GameWin: null
                    },
                


            }
        default:
            return state;
    }
}
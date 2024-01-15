import { TAGLISTSUCCESS, TAGLOADING, TAGTFAILED } from "../actions/types";

const intialState = {
    loading: false,
    tags: [],
    error: null,

}

export const taglistReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case TAGLOADING:
            return {
                ...state,
                loading: true,
                tags: [
                    {
                        IconUrl: null,
                        Id:0,
                        Name: "",
                        Rank:0,
                    }
                ],
                error: null,
            

            };
        case TAGLISTSUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tags: action.payload
            };

        case TAGTFAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
                tags: [
                    {
                        IconUrl: null,
                        Id:0,
                        Name: "",
                        Rank:0,
                    }
                ],


            }
        default:
            return state;
    }
}
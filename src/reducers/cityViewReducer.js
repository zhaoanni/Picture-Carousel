import { IMG_INDEX, CURRENT_IMGS, LOADING, FETCH_PAGE } from "../helper/constants";

const initState = {

    clickImgIndex: 0,
    currentImgs: [],
    isLoading: false,
    pages: 1
}
export const cityViewReducer = (state = initState, action) => {
    switch (action.type) {
        case IMG_INDEX:
            return { ...state, clickImgIndex: action.payload }
        case CURRENT_IMGS:
            return { ...state, currentImgs: action.payload }
        case LOADING:
            return { ...state, isLoading: action.payload }
        case FETCH_PAGE:
            return { ...state, pages: action.payload }

        default:
            return state
    }

}

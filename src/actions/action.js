import {FETCH_ALL_IMAGE, IMG_INDEX,CURRENT_IMGS,FETCH_IMG,FETCH_PAGE} from "../helper/constants";
import axios from "axios";
import {AccessKey, BasicUrl} from "../consts";
import {LOADING} from  "../helper/constants";

// const imgLibrary = [
//     {
//         des: "body of water under white cloudy sky",
//         thumb: "https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwxfHx0b3JvbnRvfGVufDB8MHx8fDE2ODE2OTQyMjk&ixlib=rb-4.0.3&q=80&w=200"
//     },
//     {
//         des: "landscape photography of high-rise buildings",
//         thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwyfHx0b3JvbnRvfGVufDB8MHx8fDE2ODE2OTQyMjk&ixlib=rb-4.0.3&q=80&w=200"
//     },
//     {
//         des: "Toronto building with lights",
//         thumb: "https://images.unsplash.com/photo-1542704792-e30dac463c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwzfHx0b3JvbnRvfGVufDB8MHx8fDE2ODE2OTQyMjk&ixlib=rb-4.0.3&q=80&w=200"
//     },
//     {
//         des: 'CN tower, Canada',
//         thumb: "https://images.unsplash.com/photo-1526417501781-5e7e587b7686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw0fHx0b3JvbnRvfGVufDB8MHx8fDE2ODE2OTQyMjk&ixlib=rb-4.0.3&q=80&w=200"
//     },
// ]
// export const fetchImageAction = () => {
//     return {
//         type: FETCH_ALL_IMAGE,
//         payload: imgLibrary
//     }
// }

export const clickImg = (index) => (dispatch)=> {

    dispatch({
        type: IMG_INDEX,
        payload: index
    })
}
export const fetchCurrentimage = (img) => (dispatch)=> {

    dispatch({
        type: CURRENT_IMGS,
        payload: img
    })
}

export const isLoading = (judge)=>(dispatch)=>{
    dispatch({
        type: LOADING,
        payload:judge
    })
}
export const fetchPage = (pages)=>(dispatch)=>{
    dispatch({
        type: FETCH_PAGE,
        payload:pages
    })
}

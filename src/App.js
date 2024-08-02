import "./App.css";
import CityInput from "./CityInput";

import { useState } from "react";
import { useEffect } from "react";

import ImageList from "./ImageList";
import { useSelector, useDispatch } from "react-redux";
import {clickImg} from "./actions/action";
import loadingPic from "./assets/spinning-loading.gif"
import { isLoading } from "./actions/action";
import { LOADING, IMG_INDEX, CURRENT_IMGS, FETCH_ALL_IMAGE,FETCH_PAGE } from "./helper/constants";

// import { clickNext} from "./actions/action";

function App() {

    const imgIndex = useSelector(state => state.cityViewReducer.clickImgIndex)
    const currentImgs = useSelector(state => state.cityViewReducer.currentImgs)
    const isLoading  = useSelector(state => state.cityViewReducer.isLoading)
console.log(isLoading)
     const dispatch= useDispatch()
    // const goimgIndexs=imgIndex >=9? -1: imgIndex
    // const backimgIndexs=imgIndex <=0? 10: imgIndex
    const currentPage= useSelector(state => state.cityViewReducer.pages)
    useEffect(()=>{
        if(imgIndex> 9 && imgIndex % 10 ===0){
            dispatch({ type: FETCH_PAGE, payload: currentPage+1})
            dispatch(clickImg(0))
          }
        else if(currentPage>1 && imgIndex < 0){
            dispatch({ type: FETCH_PAGE, payload: currentPage-1})
            dispatch(clickImg(9))
          }
          else if (imgIndex <0){
            dispatch(clickImg(0))
          }

    },[imgIndex])


    const go = '>'
    const back = '<'
    console.log('currentImgs', currentImgs)

    return (
        <div className="App"
        style={{ background: `url('${currentImgs[imgIndex]?.regular
        }') center center/ cover` }}

        >
            <CityInput />

            <h1>{imgIndex}</h1>
            <div className="imgsList">
                <div className="go"
                onClick={()=>dispatch(clickImg(imgIndex+1) )}
                 >{go}</div>
                <div className="back"
                onClick={()=>dispatch(clickImg(imgIndex-1))}
                >{back}</div>

            </div>


            <ImageList images={currentImgs} />
            {isLoading && <img src ={loadingPic} alt ="loading"/>}




        </div>
    )

}

export default App;

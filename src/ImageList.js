import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {clickImg,fetchCurrentimage } from "./actions/action";

const ImageList = ({images}) => {
    console.log('images got from ImageList', images)
    const dispatch= useDispatch()
    const currentImgs = useSelector(state => state.cityViewReducer.currentImgs)
    console.log('currentImags', currentImgs)
    return(
        <div className="gallery">
            {
                currentImgs&& currentImgs.map((img, index) => {
                    return <div
                        className="imgContainer current"
                        key={index}
                        onClick={()=>dispatch(clickImg(index))}
                        style={{background: `url('${img.thumb}') no-repeat center center fixed`}}>
                    </div>
                })
            }
        </div>
    )
}

export default ImageList

import { useEffect, useState } from "react";
import "./CityInput.scss";
import { AccessKey, BasicUrl, DefaultCity } from "./consts";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { fetchCurrentimage } from "./actions/action";
import { isLoading } from "./actions/action";
import { LOADING, IMG_INDEX, CURRENT_IMGS, FETCH_ALL_IMAGE,FETCH_PAGE } from "./helper/constants";



const CityInput = () => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    const dispatch = useDispatch();

    const currentPage= useSelector(state => state.cityViewReducer.pages)
    console.log('currentPage',currentPage)




    const fetchCity = city =>{

        dispatch(isLoading())
        dispatch({ type: LOADING, payload: true })

        axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: 'landscape',
                page: `${currentPage}`
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            console.log('res',res)
           let result = res.data.results
           console.log(result)
            let imageList = result.map(item => ({
                des: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }));
            setImages(imageList);
        }).catch(err => console.log('fetch city http error!', err))


        }
    useEffect(() => { fetchCity(city) }, [city])
    useEffect(() => { fetchCity(city) }, [currentPage])


    console.log(images)

    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
            newCity !== city && setCity(newCity)

    }


    useEffect(() => {
        dispatch({ type: CURRENT_IMGS, payload: images})
        // dispatch(isLoading())
        dispatch({ type: LOADING, payload: false})
    }, [images])


   return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
            />

            <button onClick={() => {
               dispatch({ type: FETCH_PAGE, payload: currentPage+1})
            }}>fetch pages</button>

        </div>
    )
}

export default CityInput

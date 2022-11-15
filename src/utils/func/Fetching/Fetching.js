import axios from "axios";
import { BASE_URL } from "@-utils/constant/url";
import { useDispatch } from "react-redux";
import { fetchSong } from "@-utils/redux/slice/songSlice";

export default async function FethchingData(name, limit,dispatch) {

    // dispatch(fetchSong())
    try {
        const res = await axios.get(BASE_URL+name+'&limit='+limit)
    } catch (error) {
        console.log(error);
    }
}
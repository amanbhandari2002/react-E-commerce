import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const res = await axios.get(process.env.REACT_APP_API_URL + url, { headers: { Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN } });
                setdata(res.data.data);

            }

            catch (err) {
                seterror(true);

            }
            setloading(false);
        }

        fetchData();
        

    }, [url])

    return { data, loading, error};
}


export default useFetch;
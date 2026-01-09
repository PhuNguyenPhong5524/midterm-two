'use client'

import axios from "axios";
import { useEffect, useState } from "react";


const useFetchData = (nameSource) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchAPI = async () => {
            try {
                const res = await axios.get(`https://mindx-mockup-server.vercel.app/api/resources/${nameSource}?apiKey=695138d7fdb0c381f6e2b98e`);
                setData(res?.data.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchAPI();
    },[nameSource]);
    return { data, loading, error }   
}

export default useFetchData;
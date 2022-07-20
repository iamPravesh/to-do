import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
}

export default useFetch;
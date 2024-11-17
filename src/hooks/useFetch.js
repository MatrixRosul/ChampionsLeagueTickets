import {useEffect, useState} from "react";

const useFetch = (function_) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await function_();
            console.log(data);
            setData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const update = () => fetchData();

    useEffect(() => {
        fetchData().then();
    }, []);

    return {data, update, isLoading};
}

export default useFetch;
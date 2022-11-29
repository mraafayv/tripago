import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
        setIsPending(true);
        setError(null);

        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            
            const json = await response.json();
            setIsPending(false);
            setError(null);
            setData(json);
        }
        catch(err){
            setIsPending(false);
            setError('Could not fetch data!')
            console.log(err.message);
        }
        
    }

    fetchData();
  }, [url])


  return { data, isPending, error }
};

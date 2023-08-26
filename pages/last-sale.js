import { useEffect,useState } from "react";
import  useSWR  from "swr";

const fetcher = url => fetch(url).then(r => r.json())

export default function LastSalesPage(){
    const [sales, setSales] = useState([]);
    const {data, error,isLoading} = useSWR('I was using firebase api',fetcher)

    useEffect(() => {
        if (data) {
          const transformedSales = [];
    
          for (const key in data) {
            transformedSales.push({
              id: key,
              username: data[key].username,
              volume: data[key].volume,
            });
          }
    
          setSales(transformedSales);
        }
      }, [data]);

    if(error){
        return <p>Failed to load</p>
    }

    if(isLoading){
        return <p>loading....</p>
    }
 
    return <ul>
        {sales.map((sale) => (
            <li key={sale.id}>
                {sale.username}
            </li>
        ))}
    </ul>
}
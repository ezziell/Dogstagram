import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = ( api ) => {
    const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(api);
		setProducts(response.data);
	}, [])

    return products;
};

export default useGetProducts;
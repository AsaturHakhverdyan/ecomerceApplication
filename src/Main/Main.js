import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "../Main/Main.module.scss";
import { setSearchValue } from "../redux/slices/searchSlice";
import axios from "axios";
import { sortingData } from "./constants";
import { ProductItem } from "./ProductItem";
import { BASE_URL } from "../constants/constatns";

function Main() {
	const dispatch = useDispatch();
	const category = useSelector(state => state.searchValue.category);
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [categories, setSetCategories] = useState([]);
	const [sort, setSetSort] = useState("");
	const [sortByPrice, setSortByPrice] = useState("");

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`${BASE_URL}/wp-json/get/products?order=${sort}&orderby=${sortByPrice}`
			);
			console.log(`${BASE_URL}/wp-json/get/products?order=${sort}&orderby=${sortByPrice}`)
			setFilteredData(data.products);
			setData(data.products);
		})();
	}, [sort, sortByPrice]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`${BASE_URL}/wp-json/get/categories`
			);
			setSetCategories(data);
		})();
	}, []);

	useEffect(() => {
		if (!category) {
			setFilteredData(filteredData);
		}
		const newData = data.filter(
			item => item.categories[0].slug.toLowerCase() === category.toLowerCase()
		);
		setFilteredData(newData);
	}, [category]);

	return (
		<>
			<div className={s.searchFilter}></div>
			{filteredData && filteredData.length ? (
				<div className={s.sort}>
					{sortingData.map(({ name, sort }, index) => (
						<button
							key={sort}
							onClick={() => {
								if (index < 1) {
									setSetSort(sort);
								}
								setSortByPrice(sort);
							}}
						>
							{name}
						</button>
					))}
				</div>
			) : null}
			<div className={s.products}>
				{filteredData && filteredData.length > 0 ? (
					filteredData.map((product, index) => {
						return (
							<ProductItem
								key={product.id}
								product={product}
								index={index}
							/>
						);
					})
				) : (
					<div className={s.empty}>No product</div>
				)}
			</div>
		</>
	);
}
export default Main;

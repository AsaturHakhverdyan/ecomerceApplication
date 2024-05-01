import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import s from "../Main/Main.module.scss";
import { setSearchValue } from "../redux/slices/searchSlice";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { setCart } from "../redux/slices/cartSlice";
import axios from "axios";
import { sortingData } from "./constants";
import { LOCAL_STORAGE_KEYS } from "../constants/constatns";
import { getNonce } from "../utiles/utiles";

function Main() {
	const dispatch = useDispatch();
	const category = useSelector(state => state.searchValue.category);
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [categories, setSetCategories] = useState([]);
	const [sort, setSetSort] = useState("");
	const [sortByPrice, setSortByPrice] = useState("");
	const cart = useSelector(state => state.cart);
	const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`https://payl.10web.cloud/wp-json/get/products?order=${sort}&orderby=${sortByPrice}`
			);
			setFilteredData(data.products);
			setData(data.products);
		})();
	}, [sort, sortByPrice]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				"https://payl.10web.cloud/wp-json/product/categories"
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

	function addItemToCard(product) {
		const currentProduct = cart.filter(item => item.id === product.id);
		return !currentProduct.length && dispatch(setCart(product));
	}

	async function addToHeart(product) {
		try {
			let nonce = await getNonce();
			if (nonce) {
				await axios.post(
					`https://payl.10web.cloud/wp-json/wc/store/v1/cart/add-item?cookie=${jwt_cookie}`,
					{
						id: product.id,
						quantity: 1,
					},
					{
						headers: {
							nonce,
						},
					}
				);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className={s.searchFilter}>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						550: {
							slidesPerView: 2,
						},
						653: {
							slidesPerView: 3,
						},

						800: {
							slidesPerView: 4,
						},

						900: {
							slidesPerView: 5,
						},
					}}
					className={s.mySwiper}
				>
					{categories.map(({ name, slug }) => (
						<SwiperSlide key={slug}>
							<div
								onClick={() =>
									dispatch(
										setSearchValue({
											category: slug,
										})
									)
								}
							>
								{name}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
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
							<div
								key={product.id}
								className={s.product}
							>
								<Link
									to={`/${product.id}`}
									key={product.id}
									className={s.image}
								>
									<img
										src={product.image_url[0]}
										alt={index}
									/>
								</Link>
								<div className={s.iconsBox}>
									<p>{product.name}</p>
									<p>{product.price} Դ</p>
									<div>
										<div onClick={() => addItemToCard(product)}>
											<FaCartPlus className={s.cardPlus} />
										</div>
										<div onClick={() => addToHeart(product)}>
											<FaHeart className={s.Heart} />
										</div>
									</div>
								</div>
							</div>
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

import axios from "axios";
import { BASE_URL, LOCAL_STORAGE_KEYS } from "../constants/constatns";

const jwt_cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_COOKIE);

export async function getNonce() {
	const { data } = await axios.get(
		`${BASE_URL}/wp-json/nonce/header?cookie=${jwt_cookie}`
	);
	if (data) {
		return data.nonce[0];
	}
}

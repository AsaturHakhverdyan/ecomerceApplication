import React from "react";
import { ClipLoader } from "react-spinners";
import s from "./Spiner.module.scss";

export default function Spiner({ isLoading }) {
	return (
		<div className={s.spiner}>
			<ClipLoader
				color="#979292"
				loading={isLoading}
				size={25}
			/>
		</div>
	);
}

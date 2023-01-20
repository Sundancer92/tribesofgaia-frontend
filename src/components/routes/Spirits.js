import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSpiritsNamesQuery } from "../../store/api/tribesofgaiaApi";
import { setSpirits } from "../../store/slices/spiritsData";
import LoadingSpinner from "../Loading/LoadingSpinner";
import SpiritList from "./../list-group/spiritList";

function Spirits() {
	const spiritsList = useSelector((state) => state.spiritsData.spirits);
	const dispatch = useDispatch();
	const { data, isFetching, isSuccess } = useGetSpiritsNamesQuery();

	useEffect(() => {
		if (spiritsList.length === 0) {
			if (isSuccess) {
				dispatch(setSpirits(data));
			}
		}
	});

	return <div>{isFetching ? <LoadingSpinner /> : <SpiritList data={spiritsList}/>}</div>;
}

export default Spirits;

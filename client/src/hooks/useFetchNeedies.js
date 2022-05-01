import {useCallback, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {receveidNeedies} from "../redux/needies/slice";

export default function useFetchNeedies() {
    const dispatch = useDispatch();
    const [longit, setLongit] = useState("");
    const [latit, setLatit] = useState("");

    const handleSelectItem = useCallback((place) => {
        console.log('### hook place', place);
        setLongit(place.geometry.coordinates[0]);
        setLatit(place.geometry.coordinates[1]);
    }, []);

    const handleSubmitClick = useCallback(() => {
        fetch(`/api/needies/${longit}/${latit}`)
            .then((res) => res.json())
            .then(({ rows }) => {
                console.log("data++++", rows);
                if (!rows) {
                    console.log("No needies in this address");
                    history.push("/");
                } else {
                    console.log("needies", rows);
                    dispatch(receveidNeedies(rows));
                    history.push("/needies");
                }
            });
    }, [latit, longit]);

    return useMemo(() => ({
        handleSelectItem,
        handleSubmitClick
    }), [handleSelectItem, handleSubmitClick]);
}

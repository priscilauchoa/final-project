export default function NeediesReducer(needies = [], action) {
    if (action.type === "needies/received") {
        console.log("action", action);
        needies = action.payload;
        return needies;
    } else if (action.type === "needies/new") {
        return (needies = [...needies, action.payload]);
    }

    return needies;
}

//______________________ACTIONS______________________________;

export function receveidNeedies(rows) {
    return {
        type: "needies/received",
        payload: rows,
    };
}

export function receveidNewNeedies(needy) {
    console.log("needy in new messgs", needy);
    return {
        type: "needies/new",
        payload: needy,
    };
}

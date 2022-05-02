export default function NeedyReducer(needy = [], action) {
    if (action.type === "needy/received") {
        console.log("action", action);
        needy = action.payload;
        return needy;
        // } else if (action.type === "needy/new") {
        //     return (needy = [...needy, action.payload]);
    }

    return needy;
}

//______________________ACTIONS______________________________;

export function receveidNeedy(needy) {
    console.log("########", needy);
    return {
        type: "needy/received",
        payload: needy,
    };
}

// export function receiveNewNeedies(needy) {
//     console.log("needy in new messgs", needy);
//     return {
//         type: "needies/new",
//         payload: needy,
//     };
// }

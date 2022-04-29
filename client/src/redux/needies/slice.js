// export default function NeediesReducer(needies = [], action) {
//     if (action.type === "needies/received") {
//         // console.log("action", action);
//         return (needies = action.payload.reverse());
//     } else if (action.type === "needies/new") {
//         return (needies = [...needies, action.payload]);
//     }

//     return needies;
// }

// //______________________ACTIONS______________________________;

// export function getAllneedies(data) {
//     return {
//         type: "needies/received",
//         payload: data.needies,
//     };
// }

// export function receiveNewNeedies(needy) {
//     console.log("needy in new messgs", needy);
//     return {
//         type: "needies/new",
//         payload: needy,
//     };
// }

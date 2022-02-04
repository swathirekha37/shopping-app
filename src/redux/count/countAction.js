import { COUNT_NUMBER } from "./countType"

export const countActionType = (num) => {
    return {
        type : COUNT_NUMBER,
        payload:num
    }
}
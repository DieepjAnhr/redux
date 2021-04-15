export const changeStateText = (prop) => {
    return {
        type: "change_state_text",
        newState: prop,
    }
}
export const initialState = {
    user: null,
    plasylist: [],
    playing: false,
    item: null,
    // REMOVE after finsihed developing...
    // token: "BQD8AGTbX7IPH-6RQTV36GXrb3LqefvBE6lx00-C08b3PiONTn2lG-jdWLI2N0xK2uLzyysGHsIDFHOxJg9_JLXDSwTxFslZ3uZGsBN4lNpDJILYOCPdSQ31Y8ZAofZ2BHeEpDyHSonBPWziqVrD3rNfenK0I0ZOX0lXa3RJf8vw6Nw_",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;

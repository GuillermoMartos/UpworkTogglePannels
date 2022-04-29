
const initialState = {
   data:[]
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "START": {

            // const allRecipes = state.allRecipes;
            // const filterState = action.payload === "db" ? allRecipes[0].filter(r => r.createdInDb) : allRecipes[0].filter(r => !r.createdInDb)

            return {
                state:action.payload
            }
        }
        case "SINGLE": {

            // const allRecipes = state.allRecipes;
            // const filterState = action.payload === "db" ? allRecipes[0].filter(r => r.createdInDb) : allRecipes[0].filter(r => !r.createdInDb)

            return {
                ...state
            }
        }
        default: return state
    }
}

export default rootReducer;

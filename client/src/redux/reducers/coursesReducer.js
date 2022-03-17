/*const todosReducer = createReducer([], (builder) => {
    builder
      .addCase('ADD_TODO', (state, action) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
      })
      .addCase('TOGGLE_TODO', (state, action) => {
        const todo = state[action.payload.index]
        // "mutate" the object by overwriting a field
        todo.completed = !todo.completed
      })
      .addCase('REMOVE_TODO', (state, action) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index)
      })
  })
  */

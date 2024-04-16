import { createSlice, nanoid } from '@reduxjs/toolkit';

// create the taskSlice
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action) => {
            const { id, name } = action.payload;
            const existingTask = state.find(task => task.id === id);
            if(existingTask) {
                existingTask.name = name;
            }
        },
    }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;

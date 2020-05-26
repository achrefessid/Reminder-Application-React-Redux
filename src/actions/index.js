import {ADD_REMINDER} from '../types' 

export const add_Reminder = (text,date) => {
    const action = {
        type: ADD_REMINDER,
        text,      //text :text, (key=value)
        date       //date :date
    }
    console.log("Add" , action)
    return action
}
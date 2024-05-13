import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://663c969317145c4d8c36d9fa.mockapi.io"
export const fetchContacts = createAsyncThunk('getContacts', 
async ( _, thunkAPI) => {
try {
    const response = await axios.get('/contacts1')
    return response.data
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
})
export const addContact = createAsyncThunk('addContact', 
async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', newContact)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)
export const deleteContact = createAsyncThunk('deleteContact', 
async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data.id
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message) 
    }
}
)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addSCategorie, deleteSCategorie, editSCategorie, fetchSCategorieById, fetchSCategories } from "../Services/ScategorieService";


export const getScategories = createAsyncThunk(
    "scategorie/getScategories",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetchSCategories();
  
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const createScategorie = createAsyncThunk(
    "scategorie/createScategorie",
    async (scategorie, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await addSCategorie(scategorie);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const delScategorie = createAsyncThunk(
    "scategorie/delScategorie",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        await deleteSCategorie(id);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const updateScategorie = createAsyncThunk(
    "scategorie/updateScategorie",
    async (scategorie, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await editSCategorie(scategorie);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const findScategorieByID = createAsyncThunk(
    "scategorie/findScategorieByID",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetchSCategorieById(id);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const scategorieSlice = createSlice({
    name: "scategorie",
    initialState: {
      scategories: [],
      scategorie: {},
      isLoading: false,
      success: null,
      error: null,
    },
    extraReducers: (builder) => {
        //get categories
        builder
          .addCase(getScategories.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(getScategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.scategories = action.payload;
          })
          .addCase(getScategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log("impossible de se connecter au serveur");
          })
          //insertion categorie
          .addCase(createScategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
          })
          .addCase(createScategorie.fulfilled, (state, action) => {
            state.categories.push(action.payload);
            state.isLoading = false;
            state.error = null;
            state.success = action.payload;
          })
          .addCase(createScategorie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.success = null;
          })
          //Modification categorie
          .addCase(updateScategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
          })
          .addCase(updateScategorie.fulfilled, (state, action) => {
            state.categories = state.categories.map((item) =>
              item._id === action.payload._id ? action.payload : item
            );
            state.isLoading = false;
            state.error = null;
            state.success = action.payload;
          })
          //Delete categorie
          .addCase(delScategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(delScategorie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.categories = state.categories.filter(
              (item) => item._id !== action.payload
            );
          })
          .addCase(delScategorie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          //Fetch categorie
          .addCase(findScategorieByID.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(findScategorieByID.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.categorie = action.payload;
          });
      },
    });
    export default scategorieSlice.reducer;
    

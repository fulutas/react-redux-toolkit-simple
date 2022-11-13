import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/dataSlice.js";
import contractsSlice from "../reducers/contractsSlice.js";

export const store = configureStore({
  // Data,Contract gibi isimlendirmeler, useSelector'de data dan sonraki gelen isimlendirmedir.

  reducer: {
    data: dataSlice,
    contract: contractsSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

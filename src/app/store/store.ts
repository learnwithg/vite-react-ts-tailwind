import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dogSliceReducer from '../features/counter/counter-slice'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { erpApi } from '../api/erp-api'
// import { TypedUseSelectorHook, useSelector } from 'react-redux'

/**
 * ### App wide combined Reducers
 * any reducers that will be used app wide should be declared here
 *
 * `Type of Reducers ( STORE, API )` \
 * `STORE = app wide store's` \
 * `API = app wide API's`
 */
export const rootReducers = combineReducers({
  // STORE
  dogs: dogSliceReducer,

  // API
  [erpApi.reducerPath]: erpApi.reducer
})

/**
 * ### Persisted Storage Configuration
 *
 * localStorage key = `'root'`
 *
 * only `auth` store is persisted in localStorage by default
 *
 * append on `whitelist` the key string of specific reducer defined in `rootReducers`
 * 
    ````javascript
    {
      key: "root",
      storage: storage,
      whitelist: ["auth", <reducer key>]
    }
    ````
 */
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [] // add slice name here e.g. 'auth'
}

/**
 * ### Implementation of persistReducer
 */
const reducersWithPersist = persistReducer(persistConfig, rootReducers)

/**
 * ### Implementation of Redux Toolkit Store
 */
export const store = configureStore({
  reducer: reducersWithPersist,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(erpApi.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

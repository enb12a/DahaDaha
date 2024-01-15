import {
    combineReducers, applyMiddleware, legacy_createStore as createStore
  } from 'redux';
  import { thunk } from 'redux-thunk';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { persistStore, persistReducer } from 'redux-persist'
  import { taglistReducer } from './reducers/tagListReducer';
  import { promotionlistReducer } from './reducers/promotionReducer';
  import { promotionDetailReducer } from './reducers/promotionDetail';
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
     //whitelist:   // only navigation will be persisted
  };
  const rootReducer = combineReducers({taglistReducer,promotionlistReducer,promotionDetailReducer });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
  }
  export type RootState = ReturnType<typeof rootReducer>;
import {Effect, Reducer} from 'umi';

import {query} from '@/services/menuTree';

export interface MenuModelType {

}

const MenuModel: MenuModelType = {
  namespace: 'menuTree',
  state: {
    menuData: [],
  },
  effects: {
    * queryMenuTree(_, {call, put}) {
      const response = yield call(query);
      yield put({
        type: 'menuTree',
        payload: response
      })
    }
  },

  reducers: {
    menuTree(state, action) {
      return {
        ...state,
        menuData: action.payload
      }
    }

  }
}

export default MenuModel;

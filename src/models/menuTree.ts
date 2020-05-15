import {Effect, Reducer} from 'umi';

import {query} from '@/services/menuTree';

export interface MenuItem {
  path?: string;
  name?: string;
  children?: MenuItem[];
}

export interface MenuModelState {
  currentMenu?: MenuItem[];
}

export interface MenuModelType {
  namespace: 'menu',
  state: MenuModelState,
  effects: {
    fetchCurrent: Effect
  },
  reducers: {
    menuTree: Reducer<MenuModelState>;
  }
}

const MenuTreeModel: MenuModelType = {
  namespace: 'menu',
  state: {
    currentMenu: [],
  },
  effects: {
    * fetchCurrent(_, {call, put}) {
      console.log(9999)
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
        currentMenu: action.payload || []
      }
    }
  }
}

export default MenuTreeModel;

import {MenuDataItem} from '@ant-design/pro-layout';
import {GlobalModelState} from './global';
import {DefaultSettings as SettingModelState} from '../../config/defaultSettings';
import {UserModelState} from './user';
import {StateType} from './login';
import {MenuModelState} from './menuTree'

export {GlobalModelState, SettingModelState, UserModelState, MenuModelState};

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  login: StateType;
  menu: MenuModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
/*export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch<AnyAction>;
}*/

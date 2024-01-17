/**
 * @format
 */

//////////////////////////////////////////////////
// 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
//////////////////////////////////////////////////
// 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
//////////////////////////////////////////////////
// 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
//////////////////////////////////////////////////
// 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
//////////////////////////////////////////////////
// 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

import {AppRegistry} from 'react-native';
import App from './src/main.js';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';

const AppRedux = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
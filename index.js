/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Button.addEventListener("click", () => {
//     const creditLength = inputCredit.length;
//     let newVariable = '';
//     for(let i = 0; i < creditLength; i++) {
//         newVariable += inputCredit[i].value + ', ';
//     }
//     calculateResult.textContent = 'Your CGPA is' + ' ' + newVariable
// })

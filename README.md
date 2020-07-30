![](https://raw.githubusercontent.com/nlt2390/le-react-native-redux-saga-duck/master/readme/ios.jpg)

An App sample with one base-app linked with other apps :<br>


## How To Run
Use Terminal to go to 

#### /packages/baseApp 

Install all packages<br>

#### `yarn`

Use XCODE to open baseApp.xcworkspace
#### `/packages/baseApp/ios/baseApp.xcworkspace`

Run the project<br>

## A few things to be noted

### 1. peerDependencies in plugin apps
Core packages like react-native, react-navigation, redux have to be put inside "peerDependencies" so the plugin app will use those packages in the base-app to avoid conflicts<br>

### 2. redux store & navigation
The base app must pass redux store and react-navigation objects to plugin app because those are global objects.<br>

### 3. redux store injection
The plugin app will inject new property when redux store is passed, so its data can be stored seperatedly from the base app.<br>




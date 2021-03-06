![](https://raw.githubusercontent.com/nlt2390/sample-linking-app/master/readme/ss1.gif)

An App sample with one base-app linked with other apps :<br>
_ The Post list screen and Post details screen are in /packages/packageApp<br>
_ The main app to be run is in /packages/baseApp


## How To Run
Use Terminal to go to
`/packages/baseApp`

Install all packages
`yarn`

Use XCODE to open baseApp.xcworkspace
`/packages/baseApp/ios/baseApp.xcworkspace`

Run the project<br>

## A few things to be noted

### 1. peerDependencies in plugin apps
Core packages like react-native, react-navigation, redux have to be put inside "peerDependencies" so the plugin app will use those packages in the base-app to avoid conflicts<br>
[Go to the code](https://github.com/nlt2390/sample-linking-app/blob/master/packages/packageApp/package.json#L29)<br>
![](https://raw.githubusercontent.com/nlt2390/sample-linking-app/master/readme/peerDependeces.jpg)


### 2. redux store & navigation
The base app must pass redux store and react-navigation objects to plugin app because those are global objects.<br>
[Go to the code](https://github.com/nlt2390/sample-linking-app/blob/master/packages/baseApp/src/screens/HomeScreen/HomeScreen.js#L11)<br>
![](https://raw.githubusercontent.com/nlt2390/sample-linking-app/master/readme/redux.jpg)

### 3. redux store injection
The plugin app will inject new property when redux store is passed, so its data can be stored seperatedly from the base app.<br>
[Go to the code](https://github.com/nlt2390/sample-linking-app/blob/master/packages/packageApp/src/screens/HomeScreen/HomeScreen.js#L12)<br>

![](https://raw.githubusercontent.com/nlt2390/sample-linking-app/master/readme/injection.jpg)

![](https://raw.githubusercontent.com/nlt2390/sample-linking-app/master/readme/store.jpg)


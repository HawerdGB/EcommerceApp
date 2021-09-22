// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production : false,
  name : 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyDEzVG3cIHKW8HJa6FNIwY2jqfCKzonkkE",
      authDomain: "ecommerce-4fc87.firebaseapp.com",
      projectId: "ecommerce-4fc87",
      storageBucket: "ecommerce-4fc87.appspot.com",
      messagingSenderId: "168268221283",
      appId: "1:168268221283:web:0215ac6fb76e6b0837e156"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

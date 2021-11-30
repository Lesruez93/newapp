// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyALCZ6iYZhliHbnsfZVgSa4LI0B_5wPX3g",
    authDomain: "lester-db03e.firebaseapp.com",
    projectId: "lester-db03e",
    storageBucket: "lester-db03e.appspot.com",
    messagingSenderId: "454263986401",
    appId: "1:454263986401:web:f533ce7ac292fc4e0d7fa0"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

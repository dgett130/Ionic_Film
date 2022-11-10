// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: '1f18cce9a8dd486183d76e53f3c84a41',
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',
  firebase: {
    apiKey: 'AIzaSyAhOEcgyJULcumO9ghs0JZqaRoLMs6xW0Q',
    authDomain: 'howisthismovieapp.firebaseapp.com',
    projectId: 'howisthismovieapp',
    storageBucket: 'howisthismovieapp.appspot.com',
    messagingSenderId: '107835851213',
    appId: '1:107835851213:web:8740988fd9b1635b75c484'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

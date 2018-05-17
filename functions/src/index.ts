import * as functions from 'firebase-functions';
import { App } from './api/app';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const app = functions.https.onRequest(new App().express);
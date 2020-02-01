import * as functions from 'firebase-functions';
import { CallableContext } from "firebase-functions/lib/providers/https";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

interface Data {
 message: string
}

export const helloWorld = functions.https.onCall((data: Data, context: CallableContext) => {

 return {
  message: 'Hello, World!'
 }
});

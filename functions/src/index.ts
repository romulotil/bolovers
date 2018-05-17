import * as functions from 'firebase-functions';
import { Api } from './api/api';

export const api = functions.https.onRequest(new Api().express);
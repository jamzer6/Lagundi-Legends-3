"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var firestore_1 = require("firebase-admin/firestore");
var serviceAccount = require("../service-account.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
var db = (0, firestore_1.getFirestore)();
exports.db = db;

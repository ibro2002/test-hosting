"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});
console.log("Hello World!", port);
// Start server
app.listen(10000, () => {
    console.log(`Server is running on port ${port}`);
});

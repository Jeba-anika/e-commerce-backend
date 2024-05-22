"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const orders_router_1 = require("./app/modules/orders/orders.router");
const products_router_1 = require("./app/modules/products/products.router");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use('/api/products', products_router_1.ProductRoutes);
app.use('/api/orders', orders_router_1.OrderRouter);
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
exports.default = app;

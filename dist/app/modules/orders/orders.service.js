"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const orders_model_1 = require("./orders.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.Order.create(order);
    return result;
});
const getAllOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (email) {
        result = yield orders_model_1.Order.find({ email });
    }
    else {
        result = yield orders_model_1.Order.find({});
    }
    if (result.length === 0) {
        throw new Error('Order not found');
    }
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
};

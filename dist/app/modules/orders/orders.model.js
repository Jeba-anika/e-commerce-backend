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
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const products_model_1 = require("../products/products.model");
const OrderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'Email is required!'] },
    productId: { type: String, required: [true, 'Product Id is required!'] },
    price: { type: Number, required: [true, 'Price is required!'] },
    quantity: { type: Number, required: [true, 'Quantity is required!'] },
});
OrderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { productId, quantity } = this;
        const isProductExists = yield products_model_1.Product.findOne({
            _id: productId,
        });
        if (isProductExists) {
            if (isProductExists.inventory.quantity === 0 &&
                !isProductExists.inventory.inStock) {
                throw new Error('The product is not in stock!');
            }
            if (isProductExists.inventory.quantity < quantity) {
                throw new Error('Insufficient quantity available in inventory');
            }
        }
        if (!isProductExists) {
            throw new Error('Product does not exist!');
        }
        if ((isProductExists === null || isProductExists === void 0 ? void 0 : isProductExists.price) !== this.price) {
            throw new Error('There is a price mismatch');
        }
        next();
    });
});
OrderSchema.post('save', function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        const { productId, quantity } = doc;
        const product = yield products_model_1.Product.findOneAndUpdate({ _id: productId }, {
            $inc: { 'inventory.quantity': -quantity },
        }, { new: true });
        if ((product === null || product === void 0 ? void 0 : product.inventory.quantity) === 0) {
            product.inventory.inStock = false;
            yield product.save();
        }
    });
});
exports.Order = (0, mongoose_1.model)('Order', OrderSchema);

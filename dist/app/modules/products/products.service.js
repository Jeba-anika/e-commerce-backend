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
exports.ProductService = void 0;
const products_model_1 = require("./products.model");
const createNewProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield products_model_1.Product.create(product);
    return data;
});
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm) {
        result = yield products_model_1.Product.find({
            $or: [
                { name: { $regex: new RegExp(searchTerm, 'i') } },
                { category: { $regex: new RegExp(searchTerm, 'i') } },
                { description: { $regex: new RegExp(searchTerm, 'i') } },
            ],
        });
    }
    else {
        result = yield products_model_1.Product.find({});
    }
    return result;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findOne({ _id: productId });
    return result;
});
const updateSingleProduct = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findOneAndUpdate({ _id: productId }, { $set: data }, { new: true });
    return result;
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findOneAndDelete({ _id: productId }, { new: true });
    if (result) {
        return null;
    }
});
exports.ProductService = {
    createNewProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteProduct,
};

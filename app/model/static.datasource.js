"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
var StaticDataSource = (function () {
    function StaticDataSource() {
        this.porducts = [
            new product_model_1.Product(1, "Product1", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(2, "Product2", "Category 1", "Product 2 (Category 1)", 100),
            new product_model_1.Product(3, "Product3", "Category 1", "Product 3 (Category 1)", 100),
            new product_model_1.Product(4, "Product4", "Category 1", "Product 4 (Category 1)", 100),
            new product_model_1.Product(5, "Product5", "Category 1", "Product 5 (Category 1)", 100),
            new product_model_1.Product(6, "Product6", "Category 2", "Product 6 (Category 2)", 100),
            new product_model_1.Product(7, "Product7", "Category 2", "Product 7 (Category 2)", 100),
            new product_model_1.Product(8, "Product8", "Category 2", "Product 8 (Category 2)", 100),
            new product_model_1.Product(9, "Product9", "Category 2", "Product 9 (Category 2)", 100),
            new product_model_1.Product(10, "Product10", "Category 2", "Product 10 (Category 2)", 100),
            new product_model_1.Product(11, "Product11", "Category 3", "Product 11 (Category 3)", 100),
            new product_model_1.Product(12, "Product12", "Category 3", "Product 12 (Category 3)", 100),
            new product_model_1.Product(13, "Product13", "Category 3", "Product 13 (Category 3)", 100),
            new product_model_1.Product(14, "Product14", "Category 3", "Product 14 (Category 3)", 100),
            new product_model_1.Product(15, "Product15", "Category 3", "Product 15 (Category 3)", 100),
        ];
    }
    StaticDataSource.prototype.getProducts = function () {
        return Observable_1.Observable.from([this.porducts]);
    };
    StaticDataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StaticDataSource);
    return StaticDataSource;
}());
exports.StaticDataSource = StaticDataSource;

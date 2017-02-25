"use strict";
exports.__esModule = true;
var vector = (function () {
    function vector(vector1, vector2) {
        this.vector1 = vector1;
        this.vector2 = vector2;
    }
    return vector;
}());
exports.vector = vector;
var vectorMath = (function () {
    function vectorMath(n, _vector) {
        this.n = n;
        this._vector = _vector;
        this.nIs = '';
        this.Cant_Message = "Can`t subtraction , addition or find with numbers";
        if (typeof n == 'number') {
            this.nIs = 'number';
        }
        else if (typeof n == 'object') {
            this.nIs = 'vector';
        }
    }
    vectorMath.prototype.multiplication = function () {
        if (this.nIs == 'number') {
            return new vector(this.n * this._vector.vector1, this.n * this._vector.vector2);
        }
        else if (this.nIs == 'vector') {
            return this.n.vector1 * this._vector.vector1 + this.n.vector2 * this._vector.vector2;
        }
        return null;
    };
    vectorMath.prototype.subtraction = function () {
        if (this.nIs != "number") {
            return new vector(this.n.vector1 - this._vector.vector1, this.n.vector2 - this._vector.vector2);
        }
        else {
            throw Error(this.Cant_Message);
        }
    };
    vectorMath.prototype.addition = function () {
        if (this.nIs != "number") {
            return new vector(this.n.vector1 + this._vector.vector1, this.n.vector2 + this._vector.vector2);
        }
        else {
            throw Error(this.Cant_Message);
        }
    };
    vectorMath.prototype.find = function () {
        if (this.nIs != "number") {
            return new vector(this._vector.vector1 - this.n.vector1, this._vector.vector2 - this.n.vector2);
        }
        else {
            throw Error(this.Cant_Message);
        }
    };
    return vectorMath;
}());
exports.vectorMath = vectorMath;

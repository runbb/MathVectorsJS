export class vector{
    public constructor(public vector1 : number,public vector2 : number) { }
}

export class vectorMath{
    public nIs = '';
    private Cant_Message = "Can`t subtraction , addition or find with numbers";

    constructor(public n, public _vector: vector){ 
        if(typeof n == 'number'){
            this.nIs = 'number';
        }else if(typeof n == 'object'){
            this.nIs = 'vector';
        }
    }
    
    public multiplication(): vector | number{
        if(this.nIs == 'number'){
            return new vector(<number> this.n * this._vector.vector1 ,<number> this.n * this._vector.vector2);
        }else if(this.nIs == 'vector'){
            return (<vector> this.n).vector1 * this._vector.vector1 + (<vector> this.n).vector2 * this._vector.vector2;
        }   
        return null;
    }

    public subtraction(): vector {
        
        if(this.nIs != "number"){
            return new vector((<vector> this.n).vector1 - this._vector.vector1 , (<vector> this.n).vector2 - this._vector.vector2);
        }else{
            throw Error(this.Cant_Message);
        }
        
    }

    public addition(): vector {
         if(this.nIs != "number"){
            return new vector((<vector> this.n).vector1 + this._vector.vector1 , (<vector> this.n).vector2 + this._vector.vector2);
        }else{
            throw Error(this.Cant_Message);
        }
    }
     
    public find(): vector {
         if(this.nIs != "number"){
            return new vector(this._vector.vector1 - (<vector> this.n).vector1 , this._vector.vector2 - (<vector> this.n).vector2);
        }else{
            throw Error(this.Cant_Message);
        }
    }
}
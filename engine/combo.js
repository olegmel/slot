/**
 * Created by Cameron Banowsky on 6/21/2015.
 */
function Combo(s, c, p)
{
    this.symbol = s;
    this.count = c;
    this.price = p;

    Combo.prototype.toString = function dogToString() {
        if (this.count == 1)
            return "No combination";
        return this.count + " symbols #" + this.symbol + ". Price "+ this.price;
    }

    this.compareTo = function(other){
        var prComp = this.price - other.price;
        if (prComp != 0)
            return prComp;
        return this.count - other.count;
    };

    this.equals = function(other) {
        return other.symbol == this.symbol && other.count == this.count && other.price == this.price;
    };

    Combo.prototype.getHashCode = function(){
        var s = this.symbol.toString() + this.count.toString() + this.price.toString();
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    };

}
function WinCtrl(winStr) {
    this.winStr = winStr;

    this.winSymbol = +this.winStr.substr(11, 1)         || 0;
    this.winSymbolsAmount = +this.winStr.substr(0, 1)   || 0;
    this.price = +this.winStr.substr(20)                || 0;

}

module.exports = WinCtrl;
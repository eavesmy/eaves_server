exports.time = function(obj){
    this.Y = new Date().getFullYear();
    this.M = new Date().getMonth();
    this.D = new Date().getDate();
    this.H = new Date().getHours();
    (this.H+12>24)?(true):(this.H = this.H+12);
    this.Mi = new Date().getMinutes();
    this.S = new Date().getSeconds();
    this.Full = this.Y+'-'+this.M+'-'+this.D+' '+this.H+':'+this.Mi+':'+this.S;
    this.Date = this.H+':'+this.Mi+':'+this.S;
    return this;
};
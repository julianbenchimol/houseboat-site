class Houseboat{
    constructor(model, price, length, width, height, heightWater, draft){
        this.model = model;
        this.price = price
        this.length = length;
        this.width = width;
        this.height = height;
        this.heightWater = heightWater;
        this.draft = draft;
    }
    getModel(){
        return this.model;
    }
    getPrice(){
        return this.price;
    }
    getDimensions(){
        const dimensions = {
            length: this.length,
            width: this.width,
            height: this.height,
            heightWater: this.heightWater
        }
        return dimensions; 
    }
    getDraft(){
        return this.draft;
    }
}

module.exports = Houseboat;
class Houseboat{
    constructor(name, length, width, height, heightWater, draft){
        this.name = name;
        this.length = length;
        this.width = width;
        this.height = height;
        this.heightWater = heightWater;
        this.draft = draft;
    }
    getName(){
        return this.name;
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
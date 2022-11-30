const Houseboat = require('../lib/houseboat.js');

describe("Houseboat", () =>{
    it('should return a new object containing the necessary properties', ()=>{
        const obj = new Houseboat();
        expect(obj).toMatchObject(new Houseboat());

    })
    it('should get the name of the houseboat model when calling the method', ()=>{
        const obj = new Houseboat('Model 11');
        const model = "Model 11";

        expect(obj.getModel()).toEqual(model);
    })
    it('should return the price of the houseboat', ()=>{
        const obj = new Houseboat("Model 11", "$109,695.99");
        const price = "$109,695.99";

        expect (obj.getPrice()).toEqual(price);
    })
    it('should return the dimensions of the houseboat in an object', ()=>{
        const obj = new Houseboat("Model 11", "$109,695.99", 37, 14, 11, 8.5);
        const dimensions = {
            length: 37,
            width: 14,
            height: 11,
            heightWater: 8.5 
        }

        expect (obj.getDimensions()).toEqual(dimensions);
    })
    it('should return the draft of the houseboat model', ()=>{
        const obj = new Houseboat("Model 11", "$109,695.99", 37, 14, 11, 8.5, 1);
        const draft = 1;

        expect (obj.getDraft()).toEqual(draft);
    })
})
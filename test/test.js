var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('say-yucel function test',()=>{
    it('should return Hello Yücel!',()=>{
        var result = index.default();
        expect(result).to.equal("Hello Yücel!");
    });

});
const {
    findMean,
    findMedian,
    findMode,
  } = require("./function");
  
  describe("#findMedian", function(){
    it("finds the median of a array with an even # of numbers", function(){ 
      expect(findMedian([1, 2, 3, 4])).toEqual(2.5)
    })
    it("finds the median of an awway with an odd # of numbers", function () { 
      expect(findMedian([1, 2, 3])).toEqual(2)
    })
  })
  
  describe("#findMean", function () {
    it("finds the mean of an empty array", function () { 
      expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () { 
      expect(findMean([1,2,3,4])).toEqual(2.5)
    })
  })
  
  describe("#findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
  })
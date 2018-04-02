var assert = buster.assertions.assert;
buster.testCase("Src Test", {
    "should be Hello world" : function(){
        assert.equals(hello(), "Hello world");
    }
})
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */
//debugger;
// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 
/*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });
*/
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});
  
describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012'),'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345'),'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678'),'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and is 16 len', function() {
    detectNetwork('5134567890123456').should.be.equal('MasterCard');
  });
 
  it('has a prefix of 52 and is 16 len', function() {
    detectNetwork('5234567890123456').should.be.equal('MasterCard');
  });
 
  it('has a prefix of 53 and is 16 len', function() {
    detectNetwork('5334567890123456').should.be.equal('MasterCard');
  });
 
  it('has a prefix of 54 and is 16 len', function() {
    detectNetwork('5434567890123456').should.be.equal('MasterCard');
  });
   
  it('has a prefix of 55 and is 16 len', function() {
    detectNetwork('5534567890123456').should.be.equal('MasterCard');
  });

 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
    var should = chai.should();
  it('has a prefix of 6011 and a length of 16', function() {
    (detectNetwork('6011567890123456')).should.be.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    (detectNetwork('6011567890123456789')).should.be.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    (detectNetwork('6534567890123456')).should.be.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    (detectNetwork('6534567890123456789')).should.be.equal('Discover');
  });

 for (var prefix = 644; prefix <= 649; prefix++) {
      (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        (detectNetwork(prefix.toString() +'1237890123456')).should.be.equal('Discover')});
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        (detectNetwork(prefix.toString() +'5678901234567890')).should.be.equal('Discover')});
  })(prefix)
  } 
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should= chai.should();


for (var myLength = 12; myLength <= 19; myLength++) {
  (function(myLength) {


  var suffix = "12345678";
  for (var i = 0; i < myLength-12; i ++){
    suffix+="0";
  }


    it('has a prefix of 5018 and a length of ' + myLength, function() {
    (detectNetwork('5018' + suffix)).should.be.equal('Maestro');
      });
    it('has a prefix of 5020 and a length of ' + myLength, function() {
    (detectNetwork('5020' + suffix)).should.be.equal('Maestro');
      });
    it('has a prefix of 5038 and a length of ' + myLength, function() {
    (detectNetwork('5038' + suffix)).should.be.equal('Maestro');
      });
    it('has a prefix of 6304 and a length of ' + myLength, function() {
    (detectNetwork('6304' + suffix)).should.be.equal('Maestro');
      });

  })(myLength)
 }
 
});




describe('should support China UnionPay', function (){
  var should = chai.should();

  
  for (var prefix6= 622126; prefix6 <=622925; prefix6++){
    for (var myLength=16-6; myLength<=19-6; myLength ++){
        (function(myLength,prefix6){
      
    it('has a prefix of '+ prefix6+' and a length of ' + (myLength + 6), function() {
    detectNetwork(prefix6.toString() + Array(myLength +1).join("0")).should.be.equal('China UnionPay');
      });
    })(myLength, prefix6)

    }
  }

  



  for (var myLength = 13; myLength <= 16; myLength ++){
      (function(myLength){

  it('has a prefix of 624 and a length of  ' + (myLength+3), function() {
    detectNetwork("624"+Array(myLength+1).join("0")).should.be.equal('China UnionPay');
      });
  it('has a prefix of 625 and a length of  ' + (myLength+3), function() {
    detectNetwork("625"+Array(myLength+1).join("0")).should.be.equal('China UnionPay');
      });
  it('has a prefix of 626 and a length of  ' + (myLength+3), function() {
    detectNetwork("626"+Array(myLength+1).join("0")).should.be.equal('China UnionPay');
      });

})(myLength)

  }



  for (var prefix6 = 6282; prefix6 <= 6288; prefix6++) {
  for (var myLength = 12; myLength <= 15; myLength++) {
    (function(myLength, prefix6) {
      it('has a prefix of ' + prefix6 + ' and a length of ' + (myLength + 4), function() {
        detectNetwork(prefix6.toString() + Array(myLength + 1).join("0")).should.be.equal('China UnionPay');
      });
    })(myLength, prefix6)
  }
}
} ) ; 

describe('should support Switch', function(){
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of  ' + 16, function() {
    detectNetwork("4903"+Array(13).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 4905 and a length of  ' + 16, function() {
    detectNetwork("4905"+Array(13).join("0")).should.be.equal('Switch');
      });
   it('has a prefix of 4911 and a length of  ' + 16, function() {
    detectNetwork("4911"+Array(13).join("0")).should.be.equal('Switch');
      }); 
  it('has a prefix of 4936 and a length of  ' + 16, function() {
    detectNetwork("4936"+Array(13).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 564182 and a length of  ' + 16, function() {
    detectNetwork("564182"+Array(11).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 633110 and a length of  ' + 16, function() {
    detectNetwork("633110"+Array(11).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6333 and a length of  ' + 16, function() {
    detectNetwork("6333"+Array(13).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6759 and a length of  ' + 16, function() {
    detectNetwork("6759"+Array(13).join("0")).should.be.equal('Switch');
      });




    it('has a prefix of 4903 and a length of  ' +18, function() {
    detectNetwork("4903"+Array(15).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 4905 and a length of  ' + 18, function() {
    detectNetwork("4905"+Array(15).join("0")).should.be.equal('Switch');
      });
   it('has a prefix of 4911 and a length of  ' + 18, function() {
    detectNetwork("4911"+Array(15).join("0")).should.be.equal('Switch');
      }); 
  it('has a prefix of 4936 and a length of  ' + 18, function() {
    detectNetwork("4936"+Array(15).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 564182 and a length of  ' + 18, function() {
    detectNetwork("564182"+Array(13).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 633110 and a length of  ' + 18, function() {
    detectNetwork("633110"+Array(13).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6333 and a length of  ' + 18, function() {
    detectNetwork("6333"+Array(15).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6759 and a length of  ' + 18, function() {
    detectNetwork("6759"+Array(15).join("0")).should.be.equal('Switch');
      });



    it('has a prefix of 4903 and a length of  ' +19, function() {
    detectNetwork("4903"+Array(16).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 4905 and a length of  ' + 19, function() {
    detectNetwork("4905"+Array(16).join("0")).should.be.equal('Switch');
      });
   it('has a prefix of 4911 and a length of  ' + 19, function() {
    detectNetwork("4911"+Array(16).join("0")).should.be.equal('Switch');
      }); 
  it('has a prefix of 4936 and a length of  ' + 19, function() {
    detectNetwork("4936"+Array(16).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 564182 and a length of  ' + 19, function() {
    detectNetwork("564182"+Array(14).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 633110 and a length of  ' + 19, function() {
    detectNetwork("633110"+Array(14).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6333 and a length of  ' + 19, function() {
    detectNetwork("6333"+Array(16).join("0")).should.be.equal('Switch');
      });
  it('has a prefix of 6759 and a length of  ' + 19, function() {
    detectNetwork("6759"+Array(16).join("0")).should.be.equal('Switch');
      });

                            
  });



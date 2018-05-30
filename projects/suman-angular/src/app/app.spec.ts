// import * as suman from 'suman';
// import {ItFn} from 'suman';
// const {Test} = suman.init(module);
//
//
// Test.create('dummy', function(it:ItFn){
//
//   it('makes soup', t => {
//     console.log('right on.');
//   });
//
// });

export {}

// node  //

let suman = require('suman');
let {Test} = suman.init(module);

Test.create('dummy', function (it) {

  it('makes soup1', t => {
    console.log('right on.');
    t.assert(true);
  });

  it('makes soup2', t => {
    console.log('right on.');
    t.assert.equal(true, true);
  });

});

Test.create('dummy', function (it) {

  it('makes soup1', t => {
    console.log('right on.');
    t.assert(true);
    // throw 'fart';
  });

  it('makes soup2', t => {
    console.log('right on.');
    t.assert.equal(true, true);
  });

});



export {}

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
  });

  it('makes soup2', t => {
    console.log('right on.');
    t.assert.equal(true, true);
  });

});

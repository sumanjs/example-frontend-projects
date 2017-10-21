

import * as suman from 'suman';
import {ItFn} from 'suman';
const {Test} = suman.init(module);


Test.create('dummy', function(it:ItFn){

  it('makes soup', t => {
    console.log('right on.');
  });

});

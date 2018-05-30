import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

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



// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//
//   debugger;
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// });

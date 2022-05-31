import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('Validar que el AppComponent existe', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy(); 
  });

});

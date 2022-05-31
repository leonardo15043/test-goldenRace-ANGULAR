import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent ],
      imports: [
        HttpClientModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Validar que se muestre el numero correcto de bolas', (()=> {
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const countBalls = compiled.querySelectorAll('.ball').length;
      expect(component.balls.length).toEqual(countBalls);
    });
  }));

});

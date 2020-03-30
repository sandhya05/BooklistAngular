import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytileComponent } from './mytile.component';

describe('MytileComponent', () => {
  let component: MytileComponent;
  let fixture: ComponentFixture<MytileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRuleComponent } from './new-rule.component';

describe('NewRuleComponent', () => {
  let component: NewRuleComponent;
  let fixture: ComponentFixture<NewRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

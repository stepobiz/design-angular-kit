import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItMenuComponent } from './menu.component';
import { tb_base } from '../../../../test';

describe('ItMenuComponent', () => {
  let component: ItMenuComponent;
  let fixture: ComponentFixture<ItMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

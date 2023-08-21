import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFooterComponent } from './footer.component';
import { tb_base } from '../../../../test';

describe('ItFooterComponent', () => {
  let component: ItFooterComponent;
  let fixture: ComponentFixture<ItFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

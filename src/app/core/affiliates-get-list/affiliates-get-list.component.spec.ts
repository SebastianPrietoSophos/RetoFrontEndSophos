import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesGetListComponent } from './affiliates-get-list.component';

describe('AffiliatesGetListComponent', () => {
  let component: AffiliatesGetListComponent;
  let fixture: ComponentFixture<AffiliatesGetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [AffiliatesGetListComponent]
    });
    fixture = TestBed.createComponent(AffiliatesGetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

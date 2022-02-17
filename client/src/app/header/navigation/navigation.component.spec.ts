import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have white color in all text element', () => {
    let customColor = 'rgb(255, 255, 255)';
    const listDomainElements = fixture.debugElement.queryAll(By.css('.list__domain'));
    listDomainElements.forEach(e => {
      expect(getComputedStyle(e.nativeElement).color).toEqual(customColor);
    })
  })
});

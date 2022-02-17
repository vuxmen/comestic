import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { HeaderComponent } from './header.component';
import {SearchComponent} from './search/search.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LogoComponent} from './logo/logo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SearchComponent,
        NavigationComponent,
        LogoComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have background-color is dark-blue', () => {
    const customColor = 'rgb(33, 36, 61)';
    const headerElement = fixture.debugElement.query(By.css('.header')).nativeElement;
    expect(getComputedStyle(headerElement).backgroundColor).toEqual(customColor);
  })
});

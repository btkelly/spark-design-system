import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkToggleComponent } from './sprk-toggle.component';

describe('SprkToggleComponent', () => {
  let component: SprkToggleComponent;
  let fixture: ComponentFixture<SprkToggleComponent>;
  let element: HTMLElement;
  let triggerElement;
  let contentElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [SprkToggleComponent, SprkIconComponent, SprkLinkDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkToggleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    triggerElement = element.querySelector('button');
    contentElement = element.querySelector('button').nextElementSibling;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('clicking should show body text', () => {
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(element.querySelector('div.sprk-u-pts.sprk-u-pbs')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString = str;
    fixture.detectChanges();
    expect(
      element.querySelector('button').getAttribute('data-analytics'),
    ).toEqual(str);
  });

  it('should add icon classes to icon when toggle is opened', () => {
    component.triggerText = 'placeholder';
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle sprk-c-Icon--open',
    );
  });

  it('should add icon classes to icon when the toggle is opened and then closed', () => {
    component.triggerText = 'placeholder';
    element.querySelector('button').click();
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual('sprk-c-Icon sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle');
  });

  it('should add the correct classes if iconClass have values', () => {
    component.iconClass = 'test';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle test',
    );
  });

  it('should add the correct classes if iconAdditionalClasses have values', () => {
    component.iconAdditionalClasses = 'test';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle test',
    );
  });

  it('should prefer iconAdditionalClasses if both iconClass and iconAdditionalClasses are set', () => {
    component.iconAdditionalClasses = 'should-add';
    component.iconClass = 'should-not-add';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle should-add',
    );
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(
      'sprk-c-Toggle sprk-u-pam sprk-u-man',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });

  it('should add aria-controls and id if contentId is not passed', () => {
    fixture.detectChanges();
    expect(contentElement.getAttribute('id')).toMatch(/sprk_toggle_content_\d/);
    expect(triggerElement.getAttribute('aria-controls')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  it('should add correct aria-controls and id if contentId is passed', () => {
    component.contentId = 'test_id';
    fixture.detectChanges();
    expect(contentElement.getAttribute('id')).toEqual('test_id');
    expect(triggerElement.getAttribute('aria-controls')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  it('should add the correct title when set', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });

  it('should add the correct triggerText when set', () => {
    component.triggerText = 'Test Title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });

  it('should prefer triggerText over title if both are set', () => {
    component.triggerText = 'Test Title';
    component.title = 'Should not be the title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });
});

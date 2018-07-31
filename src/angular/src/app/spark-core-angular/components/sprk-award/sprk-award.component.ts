import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-award',
  template: `
  <sprk-stack itemSpacing="medium" additionalClasses="{{ additionalClasses }}">
    <h2
      sprk-stack-item
      class="sprk-o-Stack__item sprk-o-Stack__item--center sprk-b-TypeDisplayFive sprk-b-Measure sprk-b-Measure--narrow sprk-u-TextAlign--center">
      {{ title }}
    </h2>

    <div
      sprk-stack-item
      [ngClass]="getClasses()">
      <a
        class="sprk-o-Stack__item sprk-o-Stack__item--equal@s sprk-o-Stack"
        [routerLink]="imgOneHref"
        [attr.data-analytics]="analyticsStringImgOne">
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          alt="{{ imgOneAlt }}"
          src="{{ imgOneSrc }}">
      </a>

      <a
        class="sprk-o-Stack__item sprk-o-Stack__item--equal@s sprk-o-Stack"
        [routerLink]="imgTwoHref"
        [attr.data-analytics]="analyticsStringImgTwo">
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          alt="{{ imgTwoAlt }}"
          src="{{ imgTwoSrc }}">
      </a>
    </div>

    <sprk-toggle
      sprk-stack-item
      toggleType="base"
      title="{{ disclaimerTitle }}"
      body="{{ disclaimerCopy }}"
      analyticsString="{{ analyticsStringDisclaimer }}">
    </sprk-toggle>
  </sprk-stack>
  `,
  styles: ['']
})

export class SparkAwardComponent {
  @Input() splitAt: string;
  @Input() imgOneAlt: string;
  @Input() imgOneHref: string;
  @Input() imgTwoHref: string;
  @Input() imgTwoAlt: string;
  @Input() imgOneSrc: string;
  @Input() imgTwoSrc: string;
  @Input() analyticsStringImgOne: string;
  @Input() analyticsStringImgTwo: string;
  @Input() analyticsStringDisclaimer: string;
  @Input() additionalClasses: string;
  @Input() title: string;
  @Input() disclaimerTitle: string;
  @Input() disclaimerCopy: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium'
    ];

    // Handle the choice of item split breakpoint by adding CSS class
    switch (this.splitAt) {
      case 'tiny':
        classArray.push('sprk-o-Stack--split@xs');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--split@s');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--split@m');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--split@l');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--split@xl');
        break;
      default:
        break;
    }

    return classArray.join(' ');
  }
}

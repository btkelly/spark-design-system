import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';
import { SprkInputDirective } from '../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SprkHugeInputContainerComponent } from './sprk-huge-input-container/sprk-huge-input-container.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  component: SprkInputContainerComponent,
  subcomponents: {
    SprkInputDirective,
    SprkLabelDirective,
    SprkHugeInputContainerComponent,
    SprkFieldErrorDirective,
  },
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`,
    ),
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    },
  },
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkHugeInputContainerModule,
    SprkFieldErrorModule,
  ],
};

export const textInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="text" sprkLabel>Text Input Label</label>
      <input
        id="text"
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        sprkInput
      />
    </sprk-input-container>
  `,
});

textInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="invalid-text" sprkLabel>Text Input Label</label>
      <input
        id="invalid-text"
        aria-describedby="text-error"
        class="sprk-b-TextInput--error"
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        sprkInput
        aria-invalid="true"
      />
      <span sprkFieldError id="text-error">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label for="disabled-text" isDisabled="true" sprkLabel>Text Input Label</label>
      <input
        id="disabled-text"
        name="text_input"
        type="text"
        [(ngModel)]="text_input"
        #textInput="ngModel"
        sprkInput
        disabled
      />
    </sprk-input-container>
  `,
});

disabledTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const hugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <input
        id="huge-text"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
        variant="huge"
      />
      <label for="huge-text" sprkLabel>Text Input Label</label>
    </sprk-input-container>
  `,
});

hugeTextInput.story = {
  name: 'Huge',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const invalidHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <input
        id="invalid-huge-text"
        aria-describedby="huge-text-error"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
        sprkInput
        variant="huge"
      />
      <label for="invalid-huge-text" sprkLabel>Text Input Label</label>
      <span sprkFieldError id="huge-text-error">
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-input-container>
  `,
});

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container variant="huge">
      <input
        id="disabled-huge-text"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
        variant="huge"
        disabled
      />
      <label for="disabled-huge-text" isDisabled="true" sprkLabel>Text Input Label</label>
    </sprk-input-container>
  `,
});

disabledHugeTextInput.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: [
      'sprk-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        id="legacy-huge-text"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
      />
      <label for="legacy-huge-text" sprkLabel>Text Input Label</label>
    </sprk-huge-input-container>
  `,
});

legacyHugeTextInput.story = {
  name: 'Legacy Huge (Deprecated)',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyInvalidHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        id="legacy-invalid-huge-text"
        aria-describedby="legacy-huge-text-error"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        class="sprk-b-TextInput--error"
        aria-invalid="true"
        sprkInput
      />
      <label for="legacy-invalid-huge-text" sprkLabel>Text Input Label</label>
      <span sprkFieldError id="legacy-huge-text-error">
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-huge-input-container>
  `,
});

legacyInvalidHugeTextInput.story = {
  name: 'Legacy Huge Invalid (Deprecated)',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledHugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        id="legacy-disabled-huge-text"
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        #textInput="ngModel"
        sprkInput
        disabled
      />
      <label
        for="legacy-disabled-huge-text"
        class="sprk-b-Label--disabled"
        sprkLabel
      >
        Text Input Label
      </label>
    </sprk-huge-input-container>
  `,
});

legacyDisabledHugeTextInput.story = {
  name: 'Legacy Huge Disabled (Deprecated)',
  parameters: {
    jest: [
      'sprk-huge-input-container.component',
      'sprk-input.directive',
      'sprk-label.directive',
    ],
  },
};

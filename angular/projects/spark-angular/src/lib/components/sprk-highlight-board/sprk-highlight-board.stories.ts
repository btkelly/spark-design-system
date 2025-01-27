import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkHighlightBoardModule } from './sprk-highlight-board.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Components/Highlight Board',
  component: SprkHighlightBoardComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('highlight-board')}
##### Accessibility
- If the Buttons are being used to navigate
to a new page, they should be \`<a>\` elements.
If they are being used to trigger an event or action,
then they should be \`<button>\` elements.
- If the image used is decorative and does not present any important content,
make sure to set \`imgAlt=""\` so the image will be hidden from assistive
technology. For more information on how and when to add \`alt\` text to images,
see this [alt text guide](https://webaim.org/techniques/alttext/#decorative).
`,
    docs: { iframeHeight: 600 },
  },
};

const modules = {
  imports: [
    SprkHighlightBoardModule,
    RouterModule.forRoot([
      {
        path: 'iframe.html',
        component: SprkHighlightBoardComponent,
      },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="#nogo"
      ctaText2="Developers"
      ctaHref2="#nogo"
      imgSrc="https://spark-assets.netlify.app/desktop.jpg"
      imgAlt=""
      idString="highlightboard-1"
    >
    </sprk-highlight-board>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-highlight-board.component'],
  },
};

export const noImage = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaText2="Developers"
      type="noImage"
      idString="highlightboard-3"
    >
    </sprk-highlight-board>
  `,
});

noImage.story = {
  parameters: {
    docs: { iframeHeight: 300 },
    jest: ['sprk-highlight-board.component'],
  },
};

export const stacked = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaText2="Developers"
      type="stacked"
      imgSrc="https://spark-assets.netlify.app/desktop.jpg"
      imgAlt=""
      idString="highlightboard-4"
    >
    </sprk-highlight-board>
  `,
});

stacked.story = {
  parameters: {
    docs: { iframeHeight: 800 },
    jest: ['sprk-highlight-board.component'],
  },
};

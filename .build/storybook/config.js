import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import './assets/css/theme.css';
import theme from './theme';
import StylesDecorator from './styles-decorator';


addDecorator(withKnobs);
addDecorator(StylesDecorator);


addParameters({
    options: { theme }
});


configure(require.context('../../src', true, /stories\.(ts|tsx|mdx)$/), module);

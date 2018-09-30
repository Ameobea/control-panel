import React from 'react';
import ReactDOM from 'react-dom';

import ControlPanel, {
  Text,
  Button,
  Select,
  Checkbox,
  Multibox,
  Color,
  Range,
  Interval,
} from '../src/index';

const initialState = {
  'range slider': 20,
  'stepped slider': 0.6,
  interval: [25, 50],
  text: 'my setting',
  checkbox: true,
  'color rgb': 'rgb(100, 200, 100',
  'color hex': '#30b2ba',
  selection: 'option 1',
  'multiple checkboxes': [true, true],
};

const DemoPanel = ({ theme, title, ...props }) => (
  <ControlPanel
    theme={theme}
    title={title}
    initialState={initialState}
    onChange={console.log}
    {...props}
  >
    {props.settings ? null : (
      <React.Fragment>
        <Range label="range slider" min={0} max={100} />
        <Range label="stepped slider" min={0} max={1} />
        <Interval label="interval" min={0} max={100} />
        <Text label="text" />
        <Checkbox label="checkbox" />
        <Color label="color rgb" format="rgb" />
        <Color label="color hex" format="hex" />
        <Button label="gimme an alert" action={() => alert('clicked')} />
        <Select label="selection" options={{ 'option 1': 1, 'option 2': 2 }} />
        <Multibox
          label="multiple checkboxes"
          colors={['rgb(100,120,230)', 'rgb(210,100,190)']}
          names={['box1', 'box2']}
        />
      </React.Fragment>
    )}
  </ControlPanel>
);

const App = () => (
  <React.Fragment>
    <DemoPanel
      theme="light"
      title="Example Panel 1"
      style={{ marginRight: 11, display: 'inline-block' }}
    />
    <DemoPanel theme="dark" title="Example Panel 2" style={{ display: 'inline-block' }} />
    <DemoPanel
      theme="dark"
      title="Example Panel 3"
      position="bottom-right"
      settings={[
        { type: 'range', label: 'my range', min: 0, max: 100, initial: 20 },
        { type: 'range', label: 'log range', min: 0.1, max: 100, initial: 20, scale: 'log' },
        { type: 'text', label: 'my text', initial: 'my cool setting' },
        { type: 'checkbox', label: 'my checkbox', initial: true },
        { type: 'color', label: 'my color', format: 'rgb', initial: 'rgb(10,200,0)' },
        {
          type: 'button',
          label: 'gimme an alert',
          action: () => {
            alert('hello!');
          },
        },
        {
          type: 'select',
          label: 'select one',
          options: ['option 1', 'option 2'],
          initial: 'option 1',
        },
        { type: 'multibox', label: 'check many', count: 3, initial: [true, false, true] },
      ]}
    />
  </React.Fragment>
);

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

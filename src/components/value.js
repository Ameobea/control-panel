import React from 'react';

import { withTheme } from './context';

const Value = ({ theme, text, width, left }) => {
  const styles = {
    body: {
      position: 'absolute',
      backgroundColor: theme.background2,
      paddingLeft: '1.5%',
      height: 20,
      width: width,
      display: 'inline-block',
      overflow: 'hidden',
      right: !left ? 0 : undefined,
      cursor: 'auto',
    },
    text: {
      color: theme.text2,
      display: 'inline-block',
      MozUserSelect: 'text',
      cursor: 'text',
      overflow: 'hidden',
      lineHeight: '20px',
      wordBreak: 'break-all',
      height: 20,
    },
  };

  return (
    <div style={styles.body}>
      <span style={styles.text}>{text}</span>
    </div>
  );
};

const EnhancedValue = withTheme(Value);

export default EnhancedValue;

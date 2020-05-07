import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from '@theme/components/Code/Code.Prism';

function preToCodeBlock(preProps) {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === 'code'
  ) {
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : '',
      ...props,
    };
  }
}

const CodePre: React.FC<{}> = preProps => {
  const props = preToCodeBlock(preProps);

  if (props) {
    return <CodeBlock {...props} />;
  } else {
    return <styledPre {...preProps} />;
  }
};

const styledPre = styled.pre`
  background-color: ${p => p.theme.colors.code};
`;

export default CodePre;

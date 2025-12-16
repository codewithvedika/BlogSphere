import React from 'react';
import styled from 'styled-components';

const FooterMail = () => {
  return (
    <StyledWrapper>
      <span className="💀" data-content="📫" data-hover-content="📪" data-active-content="📬" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .💀 {
    font-size: 48px;
  }

  .💀:after {
    content: attr(data-content);
  }

  .💀:hover:after {
    content: attr(data-hover-content);
  }

  .💀:active:after {
    content: attr(data-active-content);
  }`;

export default FooterMail;

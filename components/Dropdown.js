import styled from "@emotion/styled";

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 1rem);
  border: 1px solid #e2e8f0;
  background: none;
  box-shadow: 0 3px 6px 0 rgba(26, 32, 44, 0.24);
  padding: 1.5rem;
  width: 270px;
  label {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #718096;
    letter-spacing: 0.1rem;
    display: block;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      font-family: inherit;
      border: 1px solid #e2e8f0;
      display: block;
      font-size: 1rem;
      border-radius: 4px;
      line-height: 48px;
      padding: 0 1rem;
    }
  }
`;

export { DropdownWrapper, Dropdown };

import styled from "@emotion/styled";

const SettingsButton = styled.button`
  appearance: none;
  background: #ff88f9;
  line-height: 65px;
  padding: 0 2rem;
  margin: 0;
  border: none;
  border-radius: none;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(26, 32, 44, 0.24);
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #68fb92;
  }
`;

export default SettingsButton;

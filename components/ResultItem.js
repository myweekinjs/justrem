import styled from "@emotion/styled";

const ResultItem = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  max-width: 56.25rem;
  margin: 0 auto;
  padding: 0 6.25rem;
  .px {
    font-size: 1rem;
    margin-right: 1.313rem;
    color: #718096;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .rem {
    font-size: 2rem;
    background: rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 2;
  }
`;

export default ResultItem;

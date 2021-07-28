import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 300px);
  min-width: 600px;
  margin-top: 60px;
  margin-left: 300px;
  padding: ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.xxl}px;
`;

export default Wrapper;

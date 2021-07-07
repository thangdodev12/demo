import styled from "styled-components";
import { theme } from "@theme";

export const Body = styled.section`
  padding: ${theme.size["16"]};
`;

export const Count = styled.div`
  padding-left: ${theme.size["8"]};
  margin: ${theme.size["16"]} 0;
  p {
    color: ${theme.colors.blue};
    min-width: 100px;
  }

  .count {
    &__action {
      margin-top: ${theme.size["16"]};
      button {
        margin: 0 ${theme.size["8"]};

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export const Button = styled.button`
  margin: 0 ${theme.size["8"]};
  padding: ${theme.size["4"]} ${theme.size["16"]};
  font-size: ${theme.font.size.normal};
  color: ${theme.colors.bg};
  background-color: ${theme.colors.blue};
  border: none;

  &:hover {
    opacity: 0.75;
  }
`;

export const Pagination = styled.div`
  display: flex;
`;

export const Table = styled.table`
  margin: ${theme.size["8"]};
  tr {
    border-bottom: 1px solid ${theme.colors.blue};
  }
`;

export const Thead = styled.thead`
  th {
    padding: ${theme.size["16"]};
    border-right: 1px solid ${theme.colors.blue};

    &:last-child {
      border-right: none;
    }
  }
`;

export const TBody = styled.tbody`
  td {
    padding: ${theme.size["16"]};
    border-right: 1px solid ${theme.colors.blue};

    &:last-child {
      border-right: none;
    }
  }
`;

export const Input = styled.input`
  border: none;
  padding: ${theme.size["4"]} ${theme.size["8"]};
  margin-left: ${theme.size["8"]};
`;

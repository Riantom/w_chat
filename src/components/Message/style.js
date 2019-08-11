import styled, { css } from 'styled-components';

import { overflowBreakWord } from '../../utils/styles';
import {
  systemBackgroundColor,
  activeUserBackgroundColor,
} from '../../utils/colors';

const StyledItem = styled.li`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.isSystem &&
    css`
      text-align: center;
    `}
  ${props =>
    props.isActiveUser &&
    css`
      text-align: right;
    `}
  ${props =>
    props.sameAuthorAsPrevious &&
    css`
      margin-top: 0.25rem;
    `}
`;

const StyledBubble = styled.div`
  display: inline-flex;
  padding: 8px 10px;
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  ${props =>
    props.isSystem &&
    css`
      background-color: ${systemBackgroundColor};
    `}
  ${props =>
    props.isActiveUser &&
    css`
      text-align: left;
      background-color: ${activeUserBackgroundColor};
    `}

  @media (max-width: 699px) {
    flex-direction: column;
  }

  @media (min-width: 700px) {
    max-width: 65%;
  }
`;

const StyledWrapper = styled.div`
  flex: 1 1 auto;
`;

const StyledAuthor = styled.div`
  margin-bottom: 0.25rem;
  font-weight: bold;
  font-size: 75%;
  color: ${props => props.color};
`;

const StyledMessage = styled.div`
  ${overflowBreakWord}

  white-space: pre-wrap;
`;

const StyledDate = styled.time`
  flex: 0 0 auto;
  align-self: flex-end;
  margin-left: 1rem;
  white-space: nowrap;
  font-size: 75%;
  opacity: 0.6;

  @media (max-width: 699px) {
    margin-top: 0.25rem;
  }
`;

export {
  StyledItem,
  StyledBubble,
  StyledWrapper,
  StyledAuthor,
  StyledMessage,
  StyledDate,
};
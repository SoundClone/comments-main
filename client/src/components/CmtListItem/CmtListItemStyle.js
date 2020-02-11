import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-flow: row no-wrap;
  align-items: center;
  margin-bottom: 12px;
`;

export const CommentDiv = styled.div`
  align-self: flex-start;
  flex-grow: 1;
`;

export const CommentBody = styled.div`
  padding-right: 13%;
`;

export const Lta = styled.span`
  color: #999;
  cursor: pointer;
  font-size: 12px;
  &:hover {
      color: #333;
      text-decoration: none;
    }
`;

export const Lts = styled.span`
  color: #999;
  font-size: 12px;
  padding-right: 7px;
  float: right;
`;

export const TopBarDiv = styled.div`
  position: relative;
`;

export const Ts = styled.span`
  display: inline;
  color: #333;
  font-size: 11px;
  padding: 1px 5px 9px 1px;
`;

export const ReplyBtn = styled.a`
  position: absolute;
  display: inline-block;
  right: 6px;
  top: 22px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  vertical-align: baseline;
  font-size: 14px;
`;

export const ReplyIcon = styled.i`
  font-size: 12px;
`;

export const Xlt = styled.span`
  color: #ccc;
  font-size: 11px;
`;

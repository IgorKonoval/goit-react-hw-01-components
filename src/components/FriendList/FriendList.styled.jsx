import styled from 'styled-components';

export const ListFriend = styled.ul`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;
export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 250px;
  padding: 20px;
  background-color: white;
  border: black;
  box-shadow: 2px 2px 8px -3px;
  border-radius: 3px;
`;
export const StatFriend = styled.span`
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 10px;
`;
export const AvatarFriend = styled.img`
  margin-right: 30px;
`;
export const NameFriend = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 400px;
  margin: 30px auto;
  padding: 20px;
  background-color: rgb(235, 238, 241);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileDescription = styled.div`
  width: 250px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-top: 20px;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
`;

export const ProfileTag = styled.p`
  margin-top: 10px;
  color: gray;
`;

export const ProfileLocation = styled.p`
  margin-top: 10px;
  color: gray;
`;

export const ProfileStats = styled.ul`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #c8dbe7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProfileList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  flex: 1 1 0%;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid rgb(192, 192, 192);
  }
`;
export const ProfileLabel = styled.span`
  color: gray;
`;
export const ProfileQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

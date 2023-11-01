import styled from 'styled-components';

export const SectionStat = styled.section`
  width: 400px;
  margin: 30px auto;
  padding: 30px;
  background-color: rgb(235, 238, 241);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleStat = styled.h2`
  font-size: 16px;
  background-color: white;
  text-transform: uppercase;
  text-align: center;
  width: 250px;
  padding: 20px;
  margin: 0 auto;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
export const ListStat = styled.ul`
  display: flex;
  width: 250px;
`;
export const IdStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  gap: 5px;
  padding: 10px;
`;
export const LabelStat = styled.span`
  font-size: 12px;
  color: white;
`;
export const PercentStat = styled.span`
  color: white;
`;

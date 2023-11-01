import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor';
import {
  SectionStat,
  TitleStat,
  ListStat,
  IdStat,
  LabelStat,
  PercentStat,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStat>
      {title && <TitleStat>{title}</TitleStat>}

      <ListStat>
        {stats.map(stat => (
          <IdStat key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <LabelStat>{stat.label}</LabelStat>
            <PercentStat>{stat.percentage}%</PercentStat>
          </IdStat>
        ))}
      </ListStat>
    </SectionStat>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;

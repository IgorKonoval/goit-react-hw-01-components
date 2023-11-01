import PropTypes from 'prop-types';
import {
  ItemFriend,
  StatFriend,
  AvatarFriend,
  NameFriend,
} from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <ItemFriend>
    <StatFriend $isOnline={isOnline}></StatFriend>
    <AvatarFriend src={avatar} alt={name} width="48" />
    <NameFriend>{name}</NameFriend>
  </ItemFriend>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;

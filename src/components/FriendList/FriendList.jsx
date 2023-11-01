import FriendListItem from './FriendListItem';
import { ListFriend } from './FriendList.styled';

const FriendList = ({ friends }) => (
  <ListFriend>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ListFriend>
);
export default FriendList;

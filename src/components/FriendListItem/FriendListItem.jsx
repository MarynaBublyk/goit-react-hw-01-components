import PropTypes from 'prop-types';

import {
  FriendImg,
  FriendItem,
  FriendName,
  FriendStatus,
} from './FriendListItem.module';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <FriendStatus statusType={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

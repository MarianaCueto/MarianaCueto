import React from "react";
import PropTypes from "prop-types";

const MemberCard = (props) => {
  let img =
    "https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg";

  if (props.member.avatarUrl && props.member.avatarUrl) {
    img = props.member.avatarUrl;
  } else {
    img =
      "https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg";
  }

  return (
    <div className="rounded-circle p-3">
      <img alt="Follower" className="imgDashboard rounded-circle" src={img} />

      <div className="font-weight-bold mt-1 pb-2">
        {`${props.member.firstName} ${props.member.lastName}`}
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

export default React.memo(MemberCard);

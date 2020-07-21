import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills,
	},
}) => {
	return (
		<div className="profile bg-light">
			<img src={avatar} alt="" className="round-img" />
			<div>
				<h2>{name}</h2>
				<p>
					{status} {company && <span> at {company}</span>}
				</p>
				<p className="my-1">{location && <span>{location}</span>}</p>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;

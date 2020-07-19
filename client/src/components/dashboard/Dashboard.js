import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import DashBoardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { Link } from "react-router-dom";

const Dashboard = ({
	getCurrentProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<Fragment>
					<DashBoardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />

					<div className="my-2">
						<button onClick={() => deleteAccount()} className="btn btn-danger">
							<i className="fas fa-user-minus">Delete My Account</i>
						</button>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<p>You have not yet set up a profile, please add some info</p>
					<Link to="/create-profile" className="btn btn-primary my-1">
						Create Profile
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);

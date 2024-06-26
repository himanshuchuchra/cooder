// Import Section
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFollowingPosts } from "../../redux/social/socialSlice";
import {
  removeFollower,
  unfollowUser,
  getFollowers,
  getFollowing,
  notFollowingUsers,
} from "../../redux/follow/followSlice";

// Import Utilities
import { TiUserDelete } from "react-icons/ti";
import { ImCross } from "react-icons/im";

// JSX Component Function
const ListModal = ({ list, heading, display, setDisplay }) => {
  // Hooks Configuration
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.global);
  const { user } = useSelector((state) => state.auth);

  // JSX Component Return Section
  return (
    <>
      {list && list?.length > 0 && (
        <div className="follow-list__container">
          <div className={`follow-list ${theme}`}>
            <section className={`follow-list__header ${theme}`}>
              <div className="follow-list__header-text">{heading} 🌍🤝💻</div>
              <div
                className="follow-list__header-btn"
                onClick={() => setDisplay(!display)}>
                <ImCross className="follow-list__header-btn-icon" />
              </div>
            </section>
            <ul className="follow-list__body">
              {list &&
                list.map((element) => (
                  <li className="follow-list__item" key={element._id}>
                    <Link to={`/`} className="follow-list__item-link">
                      <section className="follow-list__item-section">
                        <img
                          src={element.avatar.url}
                          alt="User Avatar"
                          className="follow-list__item-avatar"
                        />
                        <section
                          className={`follow-list__item-content ${theme}`}>
                          <p className="follow-list__item-content-name">
                            {`${element.firstName} ${element.lastName}`}
                          </p>
                          <p className="follow-list__item-content-username">
                            @{element.username}
                          </p>
                        </section>
                      </section>
                    </Link>
                    <section className="follow-list__item-button-container">
                      <button
                        className={`follow-list__item-button ${theme}`}
                        id="follow-list__btn-red"
                        onClick={async () => {
                          if (heading === "Followers") {
                            await dispatch(
                              removeFollower({
                                userid: user?._id,
                                followid: element._id,
                              })
                            );
                          } else {
                            await dispatch(
                              unfollowUser({
                                userid: user?._id,
                                followid: element._id,
                              })
                            );
                          }
                          await dispatch(getFollowers(user?._id));
                          await dispatch(getFollowing(user?._id));
                          await dispatch(getAllFollowingPosts(user?._id));
                          await dispatch(notFollowingUsers(user?._id));
                        }}>
                        <TiUserDelete className="follow-list__item-button-icon" />
                      </button>
                    </section>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

// Export Section
export { ListModal };

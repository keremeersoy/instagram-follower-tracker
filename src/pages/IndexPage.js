import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function IndexPage() {
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [dontFollowYou, setDontFollowYou] = useState([]);
  const [followersData, setFollowersData] = useState(null);
  const [followingData, setFollowingData] = useState(null);
  const [showAllFollowers, setShowAllFollowers] = useState(true);
  const [showAllFollowing, setShowAllFollowing] = useState(true);
  const [error, setError] = useState(false);

  function handleFollowersFile(file) {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      setFollowersData(JSON.parse(e.target.result));
    };
  }

  function handleFollowingFile(file) {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      setFollowingData(JSON.parse(e.target.result));
    };
  }

  useEffect(() => {
    try {
      const followersArray = followersData?.map((follower) => {
        return follower.string_list_data[0].value;
      });
      setFollowers(followersArray);
      setError(false);
    } catch (e) {
      return () => {
        setError(true);
      };
    }

    try {
      const followingsArray = followingData?.relationships_following.map(
        (following) => {
          return following.string_list_data[0].value;
        }
      );
      setFollowings(followingsArray);
      setError(false);
    } catch (e) {
      return () => {
        setError(true);
      };
    }
  }, [followersData, followingData]);

  useEffect(() => {
    const newarray = followings?.filter(
      (following) => !followers?.includes(following)
    );
    setDontFollowYou(newarray);
  }, [followers, followings]);

  return (
    <div className="text-white">
      {/* NAVBAR */}
      <Navbar />
      <div className="flex items-center justify-center mt-4">
        <div className="md:flex items-center justify-center bg-sky-600 px-4 py-2 rounded-md">
          <h1>Don't know how to use it ? </h1>{" "}
          <Link to={"/tutorial"} className="md:ml-2 font-bold">
            Let's Learn
          </Link>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 mb-4">
        {/* UPLOAD FOLLOWERS JSON */}
        <div className="mt-10 md:mx-10 mx-4">
          <label className="block mb-2 text-center">
            Upload <span className="font-bold">Followers</span> JSON
          </label>
          <input
            className="block w-full file:px-4 file:py-2 border file:cursor-pointer file:hover:bg-gray-400 file:duration-300  rounded-lg cursor-pointer focus:outline-none  file:bg-gray-500 file:text-white file:border-none"
            type="file"
            onChange={(e) => {
              handleFollowersFile(e.target.files[0]);
            }}
          />
        </div>

        {/* UPLOAD FOLLOWING JSON */}
        <div className="mt-10 md:mx-10 mx-4">
          <label className="block mb-2 text-center">
            Upload <span className="font-bold">Following</span> JSON
          </label>
          <input
            className="block w-full file:px-4 file:py-2 border file:cursor-pointer file:hover:bg-gray-400 file:duration-300  rounded-lg cursor-pointer focus:outline-none  file:bg-gray-500 file:text-white file:border-none"
            type="file"
            onChange={(e) => {
              handleFollowingFile(e.target.files[0]);
            }}
          />
        </div>
      </div>

      {/* ERROR */}
      {error === true && (
        <div className="flex justify-center my-8">
          <h1 className="w-[800px] bg-red-500 flex justify-center p-2 rounded-md shadow-xl mx-4">
            You uploaded the wrong file. Please upload the correct files and try
            again.
          </h1>
        </div>
      )}

      <div className="md:grid md:grid-cols-3 min-h-[150px]">
        {/* FOLLOWERS */}
        <div className="bg-[#222b39] my-4 md:mx-10 mx-4 rounded-xl shadow-xl min-h-[150px]">
          <h1 className="flex items-center justify-center text-xl p-2 rounded-t-xl font-bold mb-6 bg-[#678983] w-full">
            FOLLOWERS
          </h1>

          <div>
            {showAllFollowers === true && (
              <div>
                {followers?.slice(0, 12).map((follower) => {
                  return (
                    <div className="flex items-center justify-center">
                      {follower}
                    </div>
                  );
                })}
              </div>
            )}
            {showAllFollowers === false &&
              followers?.map((follower) => {
                return (
                  <div className="flex items-center justify-center">
                    {follower}
                  </div>
                );
              })}
            {followers && (
              <div className="flex justify-center p-4">
                <button
                  className="bg-sky-900 p-2 rounded-lg"
                  onClick={() => {
                    setShowAllFollowers(!showAllFollowers);
                  }}
                >
                  {showAllFollowers === true ? "Show All" : "Hide"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FOLLOWİNG */}
        <div className="bg-[#222b39] my-4 md:mx-10 mx-4 rounded-xl shadow-xl min-h-[150px]">
          <h1 className="flex items-center justify-center text-xl p-2 rounded-t-xl font-bold mb-6 bg-[#678983] w-full">
            FOLLOWING
          </h1>
          <div>
            {showAllFollowing === true && (
              <div>
                {followings?.slice(0, 12).map((follower) => {
                  return (
                    <div className="flex items-center justify-center">
                      {follower}
                    </div>
                  );
                })}
              </div>
            )}
            {showAllFollowing === false && (
              <div>
                {followings?.map((follower) => {
                  return (
                    <div className="flex items-center justify-center">
                      {follower}
                    </div>
                  );
                })}
              </div>
            )}
            {followings && (
              <div className="flex justify-center p-4">
                <button
                  className="bg-sky-900 p-2 rounded-lg"
                  onClick={() => {
                    setShowAllFollowing(!showAllFollowing);
                  }}
                >
                  {showAllFollowing === true ? "Show All" : "Hide"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* DON'T FOLLOW YOU */}
        <div className="bg-[#222b39] my-4 md:mx-10 mx-4 rounded-xl shadow-xl min-h-[150px]">
          <h1 className="flex items-center justify-center text-xl p-2 rounded-t-xl font-bold mb-6 bg-[#678983] w-full">
            DON'T FOLLOW YOU
          </h1>

          {dontFollowYou?.map((follower) => {
            return (
              <div className="flex items-center justify-center">{follower}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

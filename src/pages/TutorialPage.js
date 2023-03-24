import React, { useState } from "react";
import Navbar from "../components/Navbar";
import step1 from "../images/dekstopTutorial/step_1.jpg";
import step2 from "../images/dekstopTutorial/step_2.jpg";
import step3 from "../images/dekstopTutorial/step_3.jpg";
import step4 from "../images/dekstopTutorial/step_4.jpg";

export default function TutorialPage() {
  const [tutorial, setTutorial] = useState("");

  return (
    <div className="text-white">
      <Navbar />

      <div className="flex justify-center gap-20 my-10 text-2xl">
        <button
          className="bg-sky-700 p-4 rounded-md"
          onClick={() => {
            setTutorial("desktop");
          }}
        >
          Desktop Tutorial
        </button>
        <button
          className="bg-emerald-700 p-4 rounded-md"
          onClick={() => {
            setTutorial("android");
          }}
        >
          Andorid Tutorial
        </button>
      </div>

      {tutorial === "desktop" && (
        <div className="mx-8 text-white">
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 1</h1>
            <p className="my-2">
              Log in to the account you want to access data from. After logging
              in, go to settings and click on{" "}
              <span className="font-bold">privacy and security</span>. Find the
              Data download heading and click on{" "}
              <span className="font-bold">request download</span>.
            </p>
            <img src={step1} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 2</h1>
            <p className="my-2">
              You will be asked to choose the format you want to download your
              data in. At this point, make sure to select the{" "}
              <span className="font-bold">JSON</span> format and submit the
              download request. Instagram will send you an email with a
              compressed file of your data that you can download.
            </p>
            <img src={step2} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 3</h1>
            <p className="my-2">
              Open the compressed file you downloaded and navigate to the{" "}
              <span className="font-bold">"followers_and_following"</span>{" "}
              folder.
            </p>
            <img src={step3} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 4</h1>
            <p className="my-2">
              You will see two files named{" "}
              <span className="font-bold">"followers_1.json"</span> and{" "}
              <span className="font-bold">"following.json"</span>. These are the
              necessary files for using the application. If you are having
              trouble using the files, try extracting them to your desktop
              first.
            </p>
            <img src={step4} alt="" />
          </div>
        </div>
      )}

      {tutorial === "android" && <div>android</div>}

      {/* <div className="grid lg:grid-cols-2 grid-cols-1 text-white my-10">
        <div className="mx-8">
          desktop
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 1</h1>
            <p className="my-2">
              Log in to the account you want to access data from. After logging
              in, go to settings and click on{" "}
              <span className="font-bold">privacy and security</span>. Find the
              Data download heading and click on{" "}
              <span className="font-bold">request download</span>.
            </p>
            <img src={step1} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 2</h1>
            <p className="my-2">
              You will be asked to choose the format you want to download your
              data in. At this point, make sure to select the{" "}
              <span className="font-bold">JSON</span> format and submit the
              download request. Instagram will send you an email with a
              compressed file of your data that you can download.
            </p>
            <img src={step2} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 3</h1>
            <p className="my-2">
              Open the compressed file you downloaded and navigate to the{" "}
              <span className="font-bold">"followers_and_following"</span>{" "}
              folder.
            </p>
            <img src={step3} alt="" />
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#3d99ea]">Step 4</h1>
            <p className="my-2">
              You will see two files named{" "}
              <span className="font-bold">"followers_1.json"</span> and{" "}
              <span className="font-bold">"following.json"</span>. These are the
              necessary files for using the application. If you are having
              trouble using the files, try extracting them to your desktop
              first.
            </p>
            <img src={step4} alt="" />
          </div>
        </div>

        <div className="mx-8">android</div>
      </div> */}
    </div>
  );
}

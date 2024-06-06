import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useEffect } from "react";
import { IMG_CDN } from "../utils/constant";
import CommonBtn from "../common/CommonBtn";
import { useDispatch } from "react-redux";
import { addRecentlyViewedVideo } from "../utils/movieSlice";
import { toast } from "react-toastify";

const Modal = ({ closeModalFn, popUpOpenData }) => {
  const dispatch = useDispatch();
  const {
    original_title,
    poster_path,
    release_date,
    overview,
    popularity,
    id,
  } = popUpOpenData;

  const WatchMoreFn = () => {
    toast.success(
      `Once Clicked on Watch more ${original_title} added to recently watch video `
    );

    dispatch(
      addRecentlyViewedVideo({
        original_title,
        poster_path,
        release_date,
        overview,
        id,
      })
    );
    document.title = `Netflix | ${"Movies"}`;
    closeModalFn();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50"
        onClick={closeModalFn}
      ></div>
      <div className="p-2 fixed max-h-screen w-[300px] md:w-[500px] bg-white/90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg overflow-y-auto">
        <div className="float-end mr-2">
          <XMarkIcon
            className="w-8 h-8 my-1 cursor-pointer"
            onClick={closeModalFn}
          />
        </div>
        <div className="flex justify-center mt-[6%] w-full">
          <h1 className="text-2xl font-medium">{original_title}</h1>
        </div>
        <div className="w-full mt-3">
          <img
            src={`${IMG_CDN}${poster_path}`}
            alt="poster"
            className="h-[200px] w-full object-contain rounded-lg"
          />
        </div>
        <div className="w-full mt-3">
          <p className="text-gray-600 font-medium">{overview}</p>
        </div>
        <div className="flex flex-row justify-between items-center m-4">
          <span className="font-medium">
            Release Date:- <span className="text-red-500">{release_date}</span>
          </span>
          <span className="font-medium">
            Popularity:- <span className="text-red-500">{popularity}</span>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <CommonBtn
            buttonName={"Watch Now"}
            buttonOnClick={() => WatchMoreFn()}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;

import { useState, useRef } from "react";
import PictureModal from "./pictureModal";
import { MdAddPhotoAlternate } from "react-icons/md";
import { twMerge } from "tailwind-merge";
// 頭貼
const PicContainer = ({ picture, setPicture, className="", aspectRatio = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  function _closeInsideModal() {
    setIsOpen(false);
    setSelectedBgFile("");
  }
  const selectedFileRef = useRef(null);
  const [selectedBgFile, setSelectedBgFile] = useState();
  const handleFile = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (files && files[0].type === "image/gif") {
        setPicture(reader.result);
        // Process the file...
      } else {
        setSelectedBgFile(reader.result);
        setIsOpen(true);
      }
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <>
      <div
        className={twMerge(
          "relative w-[100px] h-[100px] rounded-[15px] border border-solid border-white my-4",
          className
        )}
        style={{ aspectRatio }}
      >
        <div
          className="w-full h-full rounded-2xl bg-[#00000054] cursor-pointer flex items-center justify-center absolute"
          onClick={() => selectedFileRef.current.click()}
        >
          <MdAddPhotoAlternate className="text-white text-5xl" />
          <input
            ref={selectedFileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFile}
          />
        </div>
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={picture}
          alt=""
        />
      </div>
      {isOpen ? (
        <PictureModal
          aspectRatio={aspectRatio}
          selectedBgFile={selectedBgFile}
          setPicture={setPicture}
          closeModal={_closeInsideModal}
        />
      ) : null}
    </>
  );
};

export default PicContainer;

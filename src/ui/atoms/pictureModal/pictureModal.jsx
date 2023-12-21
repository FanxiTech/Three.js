import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useState } from "react";
import { Button, Modal } from "../index";
const PictureModal = ({
  selectedBgFile,
  setPicture,
  aspectRatio,
  closeModal,
}) => {
  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      const originalCanvas = cropper.getCroppedCanvas();
      let width = originalCanvas.width;
      let height = originalCanvas.height;

      let scale = 1;

      if (width > 1080) {
        scale = 1080 / width;
        width = 1080;
        height = height * scale;
      }

      // 創建一個新的 canvas 來保存壓縮後的圖像
      const compressedCanvas = document.createElement("canvas");
      const compressedContext = compressedCanvas.getContext("2d");
      compressedCanvas.width = width;
      compressedCanvas.height = height;
      // 使用 drawImage 方法將原始 canvas 的內容繪製到新 canvas 上，實現壓縮
      compressedContext.drawImage(originalCanvas, 0, 0, width, height);

      // 獲取壓縮後的圖像（這里用的是 toDataURL，但你也可以用 toBlob）
      compressedCanvas.toBlob((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        // 你現在可以使用這個 imageUrl
        console.log("Blob URL:", imageUrl);
        setPicture(imageUrl);
      }, "image/webp");
      // setPicture(cropper.getCroppedCanvas().toDataURL());
      closeModal();
      console.log(cropper.getCroppedCanvas());
    }
  };

  return (
    <Modal className=" text-black" showCloseBtn={false}>
      <div className="cropper">
        <Cropper
          style={{ height: 300, width: 380 }}
          zoomTo={0}
          initialAspectRatio={4}
          preview=".img-preview"
          src={selectedBgFile}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          aspectRatio={aspectRatio}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
      </div>
      <div className="w-full flex mt-12 justify-around">
        <Button onClick={closeModal}>取消</Button>
        <Button onClick={getCropData}>確認</Button>
      </div>
    </Modal>
  );
};

export default PictureModal;

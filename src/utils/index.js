import { MONTH_SHORT } from "../constants";
import { Buffer } from "buffer";
import * as dayjs from "dayjs";
// thousands separators
export function numberWithCommas(x) {
  if (!x) {
    return 0;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formattedTime(timestamp) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();

  // Will display time in 10:30:23 format
  const time = `${hours}:${minutes.substr(-2)}, ${date.getDate()} ${
    MONTH_SHORT[date.getMonth()]
  } ${date.getFullYear()}`;
  return time;
}

export function timeSince(date) {
  const new_date = new Date(date);
  let timestamp = new_date.getTime();
  let seconds = (Date.now() - timestamp) / 1000;
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export function timeForNow(timestamp) {
  const seconds = (Date.now() - timestamp) / 1000;
  if (seconds < 60) {
    return Math.floor(seconds) + " seconds ago";
  }
  if (seconds < 3600) {
    return Math.floor(seconds / 60) + " minutes ago";
  }
  if (seconds < 86400) {
    return Math.floor(seconds / 3600) + " hours ago";
  }
  return dayjs(timestamp).format("YYYY/MM/DD");
}

export function ellipsisMiddleWord(word, number = 6) {
  if (word.length < 10) {
    return word;
  } else {
    return word.slice(0, number) + "..." + word.slice(-4);
  }
}

export function debounceFunction(callback, time = 1000) {
  let debouncedFunction;
  return (...args) => {
    clearTimeout(debouncedFunction);
    debouncedFunction = setTimeout(() => {
      callback(...args);
    }, time);
  };
}

export async function blobURLtoFile(blobUrl, fileName) {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  // console.log(new File([blob], fileName, { type: blob.type }));
  return new File([blob], fileName, { type: blob.type });
}

export function dataURLtoFile(dataURL, fileName) {
  if (!dataURL || !fileName) {
    throw new Error("Invalid parameters");
  }
  if (dataURL.includes("image/gif")) {
    console.log(dataURL);
    const base64 = dataURL.split(",")[1];
    const buffer = Buffer.from(base64, "base64");
    return new File([buffer], fileName, { type: "image/gif" });
  }
  return new Promise((resolve, reject) => {
    // 1. 將 Data URL 轉換為 Image 對象
    const img = new Image();
    img.src = dataURL;

    img.onload = () => {
      // 2. 創建一個 Canvas 並將 Image 繪制到其中
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      let width = img.width;
      let height = img.height;

      let scale = 1;

      if (width > 1080) {
        scale = 1080 / width;
        width = 1080;
        height = height * scale;
      }
      ctx.drawImage(img, 0, 0, width, height);

      // 3. 將 Canvas 內容轉換為 WebP 格式的 Blob 對象
      canvas.toBlob((blob) => {
        // 4. 將 Blob 對象轉換為 File 對象
        const file = new File([blob], fileName, { type: "image/webp" });
        resolve(file);
      }, "image/webp");
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
}

// export function dataURLtoFile(dataURL, fileName) {
//   if (!dataURL || !fileName) {
//     throw new Error("Invalid parameters");
//   }
//   console.log(dataURL);
//   const base64 = dataURL.split(",")[1];
//   const buffer = Buffer.from(base64, "base64");
//   return new File([buffer], fileName, { type: getFileType(dataURL) });
// }
// function getFileType(dataURL) {
//   const match = dataURL.match(/^data:(.+);base64,/);
//   if (!match) {
//     throw new Error("Invalid data URL");
//   }
//   return match[1];
// }

export function truncateDecimal(number) {
  if (!Number.isFinite(number) || number % 1 === 0) {
    return number;
  }
  if (number > 1) return number.toFixed(1);
  const decimalPlaces = (number.toString().split(".")[1] || "").length;
  return decimalPlaces >= 4 ? number.toFixed(4) : number;
}

//時間判斷
export function timeTodayOrBefore(time) {
  const today = new Date().setHours(0, 0, 0, 0);
  const messageDay = new Date(time).setHours(0, 0, 0, 0);
  if (today === messageDay) {
    return dayjs(time).format("h:mm a");
  } else {
    return dayjs(time).format("YYYY/MM/DD");
  }
}

export function getPathWallet() {
  const currentURL = window.location.href;
  let walletAddress = currentURL.split("/").pop() || "";
  if (walletAddress.includes("?")) {
    walletAddress = walletAddress.split("?")[0];
  }
  return walletAddress;
}

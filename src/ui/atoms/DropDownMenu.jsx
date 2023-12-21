import { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ button, children, onClose, minWidth, closeOutSide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleCloseClick(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !closeOutSide
      ) {
        setIsOpen(false);
        onClose?.();
      }
    }

    document.addEventListener("click", handleCloseClick);

    return () => {
      document.removeEventListener("click", handleCloseClick);
    };
  }, [isOpen, onClose, closeOutSide]);

  return (
    <div style={{ textAlign: "right" }} ref={dropdownRef}>
      <button onClick={handleButtonClick} style={{ cursor: "pointer" }}>
        {button}
      </button>
      {isOpen && (
        <div
          style={{
            position:"absolute",
            right: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
            width: "fit-content",
            padding: "5px",
            minWidth: minWidth,
            zIndex:2
          }}
        >
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;

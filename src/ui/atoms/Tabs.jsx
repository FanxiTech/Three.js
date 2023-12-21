import classNames from "classnames";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Tabs = ({ className, value, options, onChange, color }) => {

  function transformOptions(options) {
    if (Array.isArray(options)) {
      if (
        options.length > 0 &&
        typeof options[0] === "object" &&
        "label" in options[0] &&
        "value" in options[0]
      ) {
        // The options array is already in the correct format
        return options;
      } else {
        // Transform the options array to the desired format
        return options.map((option) => {
          return { label: option, value: option };
        });
      }
    } else {
      throw new Error("Options must be an array.");
    }
  }

  return (
    <TabsGroup
      className={className}
      onChange={onChange}
      value={value}
      color={color}
      options={options}
    >
      {transformOptions(options).map((option) => (
        <Tab
          key={option.value}
          label={option.label}
          value={option.value}
          color={color}
        />
      ))}
    </TabsGroup>
  );
};

const TabsGroup = ({
  className,
  options,
  value,
  children,
  onChange,
  color = "#60a5fa",
  ...props
}) => {
  const tabGroupRef = useRef();
  const [activeIndex, setActiveIndex] = useState(
    options.findIndex((ele) => ele.value === value)
  );
  const [tabAttrList, setTabAttrList] = useState([]);

  const handleClickTab = ({ tabValue, tabIndex }) => {
    onChange(tabValue);
    setActiveIndex(tabIndex);
  };

  const handleUpdateTabAttr = useCallback(() => {
    const tabGroupCurrent = tabGroupRef.current;
    const tabNumber = React.Children.count(children);

    setTabAttrList(
      [...Array(tabNumber).keys()].map((tabIndex) => ({
        width: tabGroupCurrent.children[tabIndex].offsetWidth,
        left: tabGroupCurrent.children[tabIndex].offsetLeft,
      }))
    );
  }, [children]);

  useEffect(() => {
    handleUpdateTabAttr();
    window.addEventListener("resize", handleUpdateTabAttr);
    return () => {
      window.removeEventListener("resize", handleUpdateTabAttr);
    };
  }, [handleUpdateTabAttr]);

  return (
    <div className={classNames("relative", className)} {...props}>
      <div className="flex" ref={tabGroupRef}>
        {React.Children.map(children, (child, tabIndex) =>
          React.cloneElement(child, {
            onClick: () =>
              handleClickTab({
                tabValue: child.props.value,
                tabIndex,
              }),
            isActive: child.props.value === value,
          })
        )}
      </div>
      <div
        className={`absolute bottom-0 h-1 transition-all duration-200 ease-in-out delay-0`}
        style={{
          backgroundColor: color,
          left: `${tabAttrList[activeIndex]?.left || 0}px`,
          width: `${tabAttrList[activeIndex]?.width || 0}px`,
        }}
      ></div>
    </div>
  );
};

const Tab = ({ label, value, isActive, onClick, color = "primary" }) => {
  const colorStyle =
    color === "primary" && `hover:bg-[#60a5fa] ${isActive && "text-[#60a5fa]"}`;

  return (
    <div
      className={twMerge(
        `flex items-center justify-center cursor-pointer flex-1 hover:text-white h-12 text-[14px]`,
        colorStyle
      )}
      value={value}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tabs;

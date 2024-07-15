import { useState } from "react";
import { MenuBarIcon } from "./icons/MenuBar";
import { Typography } from "./Typography";
import { ArrowIcon, Close } from "./icons";

export const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    setIsShow(!isShow);
  };

  const MENU_ITEMS = [
    {
      name: "Харилцах данс",
      link: "/retail",
    },
    {
      name: "Энгийн хугацаатай данс",
      link: "/retail",
    },
  ];

  return (
    <>
      <header className="bg-dark px-5 py-2 flex justify-between items-center sm:px-20 relative">
        <div className="w-[70px] h-7">
          <a href="/">
            <img
              src="https://www.m-bank.mn/icons/navbar/ic_m_large.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex space-x-3 items-center">
          <Typography
            color="branding"
            size="xs"
            weight="bold"
            className="text-branding"
          >
            М туслах
          </Typography>
          <div className="w-[1px] h-4 bg-border"></div>

          <div className="cursor-pointer" onClick={onClick}>
            {isShow ? (
              <Close className="stroke-white" />
            ) : (
              <MenuBarIcon className=" stroke-white" />
            )}
          </div>
        </div>
      </header>
      {isShow && (
        <div className="w-[calc(100vw-160px)] h-fit bg-primary absolute top-0 left-1/2 transform -translate-x-1/2 z-10 mt-11 rounded-2xl p-5">
          <div className="mt-2 flex justify-between">
            <Typography weight="bold" className="text-white">
              Танд
            </Typography>
            <ArrowIcon className="text-white fill-white" />
          </div>
          <div className="mt-2">
            {MENU_ITEMS.map((item, index) => (
              <a href={item.link}>
                <div className="py-4 px-2 rounded-xl group hover:bg-dark cursor-pointer">
                  <Typography
                    color="accident"
                    size="xs"
                    weight="semibold"
                    className="group-hover:text-branding"
                  >
                    {item.name}
                  </Typography>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

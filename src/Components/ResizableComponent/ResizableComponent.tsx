import React, { useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenScaleFactor } from "../redux/redux.actions";
import "./ResizableComponent.scss";

interface ResizablePlayerContainerProps {
  children: React.ReactNode;
  childWidth?: number;
}

const ResizablePlayerContainer: React.FC<ResizablePlayerContainerProps> = ({
  children,
  childWidth,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const curChildWidth = childWidth ?? 1366;
    const curChildHeight = (curChildWidth * 9) / 16;
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        const parentWidth = ref.current?.parentElement?.offsetWidth!;
        const parentPossibleHeight =
          ref.current.parentElement?.getBoundingClientRect().height;
        const parentHeight = parentPossibleHeight
          ? parentPossibleHeight
          : ref.current.parentElement?.offsetHeight!;

        const widthScaleFactor = parentWidth / curChildWidth;
        const heightScaleFactor = parentHeight / curChildHeight;

        const scaleFactor =
          widthScaleFactor > heightScaleFactor
            ? parentHeight / curChildHeight
            : parentWidth / curChildWidth;
        dispatch(setScreenScaleFactor(scaleFactor));
        localStorage.setItem("scaleFactor", scaleFactor.toString());
        ref.current.style.transform = `scale(${scaleFactor}) translate(${0}px, ${0}px)`;
        ref.current.style.height = `${curChildWidth * (9 / 16)}px`;
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current?.parentElement!);
      ref.current.style.width = `${childWidth ?? 1366}px`;
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="resizablWrapper" ref={ref}>
      <div className="resizableContainer" id="resizeComponentContainer">
        {children}
      </div>
    </div>
  );
};

export default ResizablePlayerContainer;

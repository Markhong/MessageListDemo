import React, { useEffect } from "react";

export interface MeasurerProps {
  element?: JSX.Element;
  measurerMethod?: () => void;
}
export const Measurer = ({ measurerMethod, element }: MeasurerProps) => {
  useEffect(() => {
    setTimeout(measurerMethod!, 400); // TODO：这里的实现有点尴尬，需要优化
  }, []);
  return (
    <>
      {element}
    </>
  );
};

Measurer.displayName = "Measurer";
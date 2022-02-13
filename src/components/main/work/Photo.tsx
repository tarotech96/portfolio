import React, { forwardRef } from "react";

export const Photo: React.FC<{
  url: any;
  index: number;
  faded?: any;
  style?: any;
}> = forwardRef(({ url, index, faded, style, ...props }, ref: any) => {
  const inlineStyles = {
    opacity: faded ? "0.2" : "1",
    transformOrigin: "0 0",
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
    ...style,
  };

  return <div ref={ref} style={inlineStyles} {...props} />;
});

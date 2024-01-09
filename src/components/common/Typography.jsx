/* eslint-disable react/prop-types */

import clsx from "clsx";

const Typography = ({ children, tag, variant, customClasses }) => {
  const Component = tag || "p";

  const className = clsx({
    'text-dark-primary': variant ==="dark-primary",
    'text-primary': variant ==="primary",
    'text-light-grey': variant ==="light-grey",
    'text-white': variant ==="white",
    'text-4xl' : tag === "h2",
    'text-3xl' : tag === "h3",
    'text-[1.25rem]' : tag === "h4",
    [customClasses]: true
  });
 
  return <Component className={className}>{children}</Component>;
};

export default Typography;
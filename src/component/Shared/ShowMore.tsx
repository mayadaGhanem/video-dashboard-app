import React, { ReactNode } from "react";

export default function ShowMore({
  children,
  className,
}: {
  children: ReactNode;
  className: string | undefined;
}) {
  const [showMoreText, setShowMoreText] = React.useState(false); // Text to show
  function handleShowMore() {
    setShowMoreText((prev) => !prev);
  }
  const classesName = `${className} ${showMoreText ? "line-clamp-none max-h-20 overflow-y-auto" : ""}`;

  return (
    <div>
      <p className={classesName}>{children}</p>
      <a
        href="#"
        onClick={handleShowMore}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {showMoreText?"show less": "show more"}
      </a>
    </div>
  );
}

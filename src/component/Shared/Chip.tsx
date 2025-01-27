export default function Chip({
  children,
  className,
}: {
  children: JSX.Element;
  className: string;
}) {
  return (
    <div
      draggable="true"
      title="Hover chip"
      className={`h-8 px-3 w-max flex gap-2 items-center rounded-full border border-gray-100 text-gray-700 ${className}`}
    >
      {children}
      {/* <span className="block text-sm font-medium">{title}</span> */}
    </div>
  );
}

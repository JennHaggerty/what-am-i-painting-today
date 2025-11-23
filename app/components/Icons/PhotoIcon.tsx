const PhotoIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={props.height || "25px"}
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4,6A3,3,0,1,1,7,9,3,3,0,0,1,4,6Zm8,10L8,13,2,21H22L18,9Z" />
    </svg>
  );
};

export default PhotoIcon;

import { inter } from "@/lib/utils/font";

interface textProp {
  type: string;
  variant: string;
  text: string;
  size?: string;
}
const CustomText = ({
  type = "body",
  variant = "primary",
  text = "[12px]",
  size,
}: textProp) => {
  switch (type) {
    case "h1":
      return (
        <h2
          className={`${inter.className} font-semibold text-xl lg:text-[40px] my-2 lg:leading-[50px] text-slate-600`}
        >
          {text}
        </h2>
      );
    case "body":
      return (
        <p
          className={`${inter.className} ${
            variant === "primary" ? "font-bold" : "font-normal"
          } text-${size} text-slate-600`}
        >
          {text}
        </p>
      );

    default:
      break;
  }
};

export default CustomText;

import { inter } from "@/lib/utils/font";

interface textComponentProp {
  variant: string;
  textSize: string;
  text: string;
  prefix?: string;
  suffix?: string;
}

const TextComponent = ({
  variant,
  textSize,
  text,
  prefix,
  suffix,
}: textComponentProp) => {
  // Define the class names based on the variant and textSize props
  let classNames = inter.className;

  switch (variant) {
    case "primary":
      classNames += " text-slate-600 font-bold";
      break;
    case "secondary":
      classNames += " text-slate-400 font-normal";
      break;
    case "header":
      classNames += " text-slate-600 font-black";
      break;
    case "subheader":
      classNames += " text-slate-600 font-semibold";
      break;
    // Add more cases for additional variants if needed
    default:
      break;
  }

  switch (textSize) {
    case "sm":
      classNames += " text-[12px]";
      break;
    case "md":
      classNames += " text-base";
      break;
    case "lg":
      classNames += " text-lg";
      break;
    case "xl":
      classNames += " text-xl";
      break;
    case "2xl":
      classNames += " text-2xl";
      break;
    case "4xl":
      classNames += " text-4xl";
      break;
    // Add more cases for additional text sizes if needed
    default:
      break;
  }

  return (
    <p className={classNames}>
      {prefix}
      {text}
      {suffix}
    </p>
  );
};

export default TextComponent;

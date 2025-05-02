import { Button } from "@/components/ui/button";

interface ISecondaryButtonProps {
  onClick?: () => void;
  btnText?: string;
  className?: string;
  type?: "submit" | "button";
  Icon?: React.ElementType;
  isDisable?: boolean;
}

const SecondaryButton = ({
  onClick,
  btnText,
  type = "submit",
  className = "",
  Icon,
  isDisable = false,
}: ISecondaryButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isDisable}
      className={`w-full bg-[#81818f] uppercase text-white hover:bg-[#81818f]/80 ${className}`}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="!h-5 !w-5" />}
        {btnText && <span>{btnText}</span>}
      </div>
    </Button>
  );
};

export default SecondaryButton;

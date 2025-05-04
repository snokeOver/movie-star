import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface IPrimaryButtonProps {
  isLoading: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  onClick?: () => void;
  loadingText: string;
  btnText: string;
  className?: string;
  Icon?: React.ElementType;
  type?: "submit" | "button";
  isDisable?: boolean;
}

const PrimaryButton = ({
  isLoading,
  onClick,
  loadingText,
  btnText,
  className = "",
  Icon,
  type = "submit",
  isDisable = false,
  variant = "default",
}: IPrimaryButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      className={`w-full uppercase text-black ${className}`}
      disabled={isLoading || isDisable}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Loader className="h-4 w-4 animate-spin" />
          <span>{loadingText}</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {Icon && <Icon className="!h-4 !w-4" />}
          <span>{btnText}</span>
        </div>
      )}
    </Button>
  );
};

export default PrimaryButton;

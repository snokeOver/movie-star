import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/customUI/dialog";
import { motion } from "framer-motion"; // Import for animations
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

type IActionConfirmationDialogueProps = {
  onConfirm: () => void;
  bodyText: string;
  isLoading?: boolean;
  triggerButton: React.ReactNode;
};

export function ActionConfirmationDialogue({
  onConfirm,
  bodyText,
  isLoading = false,
  triggerButton,
}: IActionConfirmationDialogueProps) {
  const [isOpen, setIsOpen] = useState(false); // Manage open/close state internally

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false); // Close dialog after confirming
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Button that opens the dialog */}
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{triggerButton}</div>
      </DialogTrigger>

      {/* Dialog Content with animation */}
      <DialogContent className="animate-fadeIn scale-95">
        <DialogHeader>
          {/* 🚨 Police Siren Effect (Horizontal Tilt) */}
          <div className="flex items-center justify-center gap-2">
            {/* Left siren - Tilting Left & Right */}
            <motion.span
              className="text-2xl text-red-500"
              animate={{ rotate: [15, -15, 15] }} // Tilts left and right
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              🚨
            </motion.span>

            <DialogTitle className="text-center text-lg font-bold uppercase">
              Alert
            </DialogTitle>

            {/* Right siren - Tilting Right & Left */}
            <motion.span
              className="text-2xl text-red-500"
              animate={{ rotate: [-15, 15, -15] }} // Tilts right and left
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              🚨
            </motion.span>
          </div>

          <DialogDescription className="text-center">
            {bodyText}
          </DialogDescription>
        </DialogHeader>

        {/* Footer Buttons */}
        <DialogFooter className="flex justify-center gap-4">
          <div className="flex-1">
            <SecondaryButton
              type="button"
              onClick={() => setIsOpen(false)}
              btnText="Cancel"
            />
          </div>

          <div className="flex-1">
            <PrimaryButton
              isLoading={isLoading}
              loadingText="Confirming..."
              btnText="Confirm"
              onClick={handleConfirm}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

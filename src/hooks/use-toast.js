import { toast } from "sonner";

/**
 * useToast — simple reusable toast hook
 */
export const useToast = () => {
  const success = (message) => toast.success(message);
  const error = (message) => toast.error(message);
  const info = (message) => toast.info(message);
  const warning = (message) => toast.warning
    ? toast.warning(message)
    : toast(message, { type: "warning" });

  return { success, error, info, warning };
};

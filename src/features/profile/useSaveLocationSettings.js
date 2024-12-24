import { updateLocation } from "../../services/locationsApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useSaveLocationSettings() {
  const { isPending: isSavingSettings, mutate: saveSettings } = useMutation({
    mutationFn: (updateData) => updateLocation(updateData),
    onSuccess: () => {
      toast.success("Location updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isSavingSettings, saveSettings };
}

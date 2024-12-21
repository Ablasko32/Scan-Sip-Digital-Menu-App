import { getLocationData } from "../../services/locationsApi";
import { useQuery } from "@tanstack/react-query";

export default function useLocation(locationID) {
  const {
    data: locationData,
    error: locationError,
    isPending: isLoadingLocation,
  } = useQuery({
    queryKey: ["location", locationID],
    queryFn: () => getLocationData(locationID),
  });

  return { locationData, locationError, isLoadingLocation };
}

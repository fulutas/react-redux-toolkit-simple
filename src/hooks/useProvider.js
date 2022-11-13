import { useSelector } from "react-redux";

export const useProviderCustom = () => {
  const provider = useSelector((state) => state.data.provider);
  return provider + "custom";
};

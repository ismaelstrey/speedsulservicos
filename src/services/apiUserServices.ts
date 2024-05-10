import { JobListing } from "@/@types/services";
import axios from "axios";

export const getAllUserServices = async (): Promise<JobListing[]> => {
  let respData = await axios.get("/api/services");

  return respData.data;
};
export const getTotalServices = async (): Promise<number> => {
  let respData = await axios.get("/api/services/total");
  return respData.data;
};
export const addServices = async (
  services: JobListing
): Promise<JobListing> => {
  let respData = await axios.post("/api/services", services);

  return respData.data;
};
export const deleteService = async (id: number) =>
  await axios.delete(`/api/services/${id}`);

interface PropsService {
  rate: number;
  id: number;
}
export const updateServiceRate = async ({
  id,
  rate,
}: PropsService): Promise<JobListing> => {
  const dataService = { rate: rate }
  const response = await axios.patch(`/api/services/${id}`, dataService);
  return response.data;
};

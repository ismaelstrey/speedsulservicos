import { JobListing } from "@/@types/services";
import axios from "axios";

export const getAllUserServices = async (): Promise<JobListing[]> => {
  let respData = await axios.get("/api/services");

  return respData.data;
};
export const findOneService = async (id: number): Promise<JobListing> => {
  let respData = await axios.get(`/api/services/${id}`);

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
interface PropsServiceUpdate {
  service: JobListing;
}
export const updateServiceRate = async ({
  id,
  rate,
}: PropsService): Promise<JobListing> => {
  const dataService = { rate: rate };
  const response = await axios.patch(`/api/services/${id}`, dataService);
  return response.data;
};
export const updateService = async (
  service: JobListing
): Promise<JobListing> => {
  const { id } = service;
  console.log(service);
  const response = await axios.patch(`/api/services/${id}`, service);
  return response.data;
};

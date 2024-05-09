import { JobListing } from "@/@types/services";
import axios from "axios";

export const getAllUserServices = async (): Promise<JobListing[]> => {
  let respData = await axios.get("/api/services");

  return respData.data;
};

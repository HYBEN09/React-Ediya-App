import data from "../api/ediya.json";

import { createContext } from "react";

export const ediyaData = { ...data };

export default createContext(ediyaData);

import { json, type LoaderFunctionArgs } from "react-router-dom";
import { AuthType } from "../types";
import { AuthDao } from "../dao/auth";

export const rootLoader: (
  args: LoaderFunctionArgs
) => Promise<Response> | never = async (args) => {
  try {
    const { request } = args;
    void request;
    const res: Partial<AuthType> = {};
    const authToken = AuthDao.getAccessToken;
    res.token = authToken || null;
    return json(res as AuthType);
  } catch (err) {
    throw new Response("internal server error", { status: 500 });
  }
};

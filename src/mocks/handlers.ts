import { rest } from "msw";
import { mockImages } from "./mockData";

export const handlers = [
  rest.get("https://picsum.photos/v2/list?page=1&limit=10", (_, res, ctx) => {
    return res(ctx.json(mockImages));
  }),
];

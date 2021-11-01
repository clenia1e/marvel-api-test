import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";

const server = setupServer(
  rest.get(
    "https://gateway.marvel.com/v1/public/characters",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            offset: 0,
            limit: 20,
            total: 1,
            count: 1,
            results: [
              {
                id: 1011334,
                name: "test man",
                description: "",
                modified: "2014-04-29T14:18:17-0400",
                thumbnail: {
                  path: "http://testimage.com/12378912",
                  extension: "jpg",
                },
              },
            ],
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders home page", async () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

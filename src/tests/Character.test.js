import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Character from "../Character";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("lodash.debounce", () => (fn) => fn);

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
                id: 1011339,
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
  ),
  rest.get(
    "https://gateway.marvel.com/v1/public/characters/*",
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
                title: "release 1",
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
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

test("should render character compoenent", async () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Character />
    </Router>
  );
  const header = await waitFor(() => getByText(/release 1/i));
  expect(header).toBeInTheDocument();
});

test("should search for a character", async () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  const { getByTestId } = render(
    <Router history={history}>
      <Character />
    </Router>
  );
  const searchInput = await waitFor(() => getByTestId("search-input"));
  fireEvent.change(searchInput, { target: { value: "test man" } });
  expect(history.push).toHaveBeenCalledWith("/", { searchName: "test man" });
});

test("should add a favorite", async () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Character />
    </Router>
  );

  const favoriteButton = await waitFor(() => getByTestId("character-favorite"));
  const favoriteIcon = await waitFor(() => getByTestId("icon-favorite"));
  fireEvent.click(favoriteButton);
  expect(favoriteIcon.src).toBe("http://localhost/favorito_01.svg");
});

test("should remove a favorite", async () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Character />
    </Router>
  );

  const favoriteButton = await waitFor(() => getByTestId("character-favorite"));
  fireEvent.click(favoriteButton);
  const favoriteIcon = await waitFor(() => getByTestId("icon-favorite"));
  expect(favoriteIcon.src).toBe("http://localhost/favorito_02.svg");
});

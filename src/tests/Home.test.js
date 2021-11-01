import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from "../Home";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("lodash.debounce", () => (fn) => fn);

const data = [
  {
    id: 1011335,
    name: "local man",
    description: "",
    modified: "2014-04-29T14:18:17-0400",
    thumbnail: {
      path: "http://testimage.com/12378912",
      extension: "jpg",
    },
  },
];
localStorage.setItem("favorites", JSON.stringify(data));

const server = setupServer(
  rest.get(
    "https://gateway.marvel.com/v1/public/characters",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const nameStartsWith = query.get("nameStartsWith");
      const offset = query.get("offset");
      const offsetHero = offset > 0 ? "pagination man" : null;
      const orderBy = query.get("orderBy");
      const orderedHero = orderBy === "-name" ? "order man" : null;
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            offset: 0,
            limit: 20,
            total: 300,
            count: 20,
            results: [
              {
                id: 1011334,
                name: offsetHero || nameStartsWith || "test man",
                description: "",
                modified: "2014-04-29T14:18:17-0400",
                thumbnail: {
                  path: "http://testimage.com/12378912",
                  extension: "jpg",
                },
              },
              {
                id: 1011335,
                name: orderedHero || "local man",
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

test("should render home page", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  const linkElement = await waitFor(() => screen.getByText(/test man/i));
  expect(linkElement).toBeInTheDocument();
});

test("should search an specific hero on home page", async () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const searchInput = await waitFor(() => getByTestId("search-input"));
  fireEvent.change(searchInput, { target: { value: "search man" } });
  const hero = await waitFor(() => getByText(/search man/i));
  expect(hero).toBeInTheDocument;
});

test("should show only favorites", async () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const favoriteButton = await waitFor(() => getByTestId("toggle-favorite"));
  fireEvent.click(favoriteButton);
  const hero = await waitFor(() => getByText(/local man/i));
  expect(hero).toBeInTheDocument;
});

test("should add a favorite", async () => {
  const history = createMemoryHistory();
  const { getAllByTestId, getByText, getByTestId } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const favoriteButton = await waitFor(() =>
    getAllByTestId("character-favorite")
  );
  fireEvent.click(favoriteButton[0]);
  const favoriteToggle = await waitFor(() => getByTestId("toggle-favorite"));

  fireEvent.click(favoriteToggle);
  const hero = await waitFor(() => getByText(/test man/i));
  expect(hero).toBeInTheDocument();
});

test("should remove a favorite", async () => {
  const history = createMemoryHistory();
  const { getAllByTestId, getByTestId } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const favoriteButton = await waitFor(() =>
    getAllByTestId("character-favorite")
  );
  fireEvent.click(favoriteButton[1]);
  const favoriteToggle = await waitFor(() => getByTestId("toggle-favorite"));

  fireEvent.click(favoriteToggle);
  expect(favoriteButton[1]).not.toBeInTheDocument();
});

test("should go to next page by circle", async () => {
  const history = createMemoryHistory();
  const { getAllByTestId, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const pagButton = await waitFor(() => getAllByTestId("pagination-button"));
  fireEvent.click(pagButton[2]);
  const hero = await waitFor(() => getByText(/pagination man/i));
  expect(hero).toBeInTheDocument;
});

test("should go to next page by next button", async () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );
  await waitFor(() => screen.getByText(/test man/i));
  const pagButton = await waitFor(() => getByTestId("pagination-next"));
  fireEvent.click(pagButton);
  const hero = await waitFor(() => getByText(/pagination man/i));
  expect(hero).toBeInTheDocument;
});

test("should toggle order", async () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );
  await waitFor(() => screen.getByText(/test man/i));
  const toggle = await waitFor(() => getByTestId("toggle-asc"));
  fireEvent.click(toggle);
  const hero = await waitFor(() => getByText(/order man/i));
  expect(hero).toBeInTheDocument;
});

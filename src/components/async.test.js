import {
  render,
  screen,
} from '@testing-library/react';

import Async from './async';

describe("Async component", () => {
  test("render posts on api call", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "my first post" }],
    });
    render(<Async />);

    const post = await screen.findAllByRole("listitem");
    expect(post).not.toHaveLength(0);
  });
});

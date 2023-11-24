import { render, screen } from "@testing-library/react";
import Sponser from "@/components/Sponsor";
import "@testing-library/jest-dom";
import test from "node:test";

test("test", async () => {
  render(<Sponser />);
  const txt = await screen.getByText("Become a Sponsor");
  expect(txt).toBeInTheDocument();
});

import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
      { id: 2, name: "Item A", imageUrl: "test", price: 10, quantity: 3 },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: { cartItems: initialCartItems },
      },
    });

    const cartElement = screen.getByText("4");
    expect(cartElement).toBeInTheDocument();
  });
});

import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("ProductCard component tests", () => {
  test("should add product to card when clicking the add to cart button", async () => {
    const mokeProduct = { id: 1, imageUrl: "test", name: "item A", price: 10 };
    const { store } = renderWithProviders(
      <ProductCard product={mokeProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );
    const buttonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(buttonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});

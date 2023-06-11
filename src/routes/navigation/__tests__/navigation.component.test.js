import { getByText, screen } from "@testing-library/react";
import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Navigation component tests", () => {
  test("should render sign in link and not sign out if there is no current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });
  test("should render a sign out and not sign in if there is a current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test("should not render cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });
    const dropdownElement = screen.queryByText(/your cart is empty/i);
    expect(dropdownElement).toBeNull();
  });

  test("should render cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });
    const dropdownElement = screen.getByText(/your cart is empty/i);
    expect(dropdownElement).toBeInTheDocument();
  });
});

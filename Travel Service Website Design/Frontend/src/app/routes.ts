import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Offers } from "./pages/Offers";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Auth } from "./pages/Auth";
import { Booking } from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "offers", Component: Offers },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "auth", Component: Auth },
      { path: "booking", Component: Booking },
      { path: "booking/:offerId", Component: Booking },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import PaymentLayout from "./layout/PaymentLayout";
import SharedLayout from "./layout/SharedLayout";
import About from "./pages/About";
import AirtimePaymentPage from "./pages/AirtimePaymentPage";
import BettingLottery from "./pages/BettingLottery";
import CableTv from "./pages/CableTv";
import CollectionLevies from "./pages/CollectionLevies";
import Contact from "./pages/Contact";
import EducationPayment from "./pages/EducationPayment";
import Electricity from "./pages/Electricity";
import Landing from "./pages/Landing";
import TelecomsPayment from "./pages/TelecomsPayment";
import TransportToll from "./pages/TransportToll";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      {
        path: "/payment",
        element: <PaymentLayout />,
        children: [
          { path: "/payment/payment-airtime", element: <AirtimePaymentPage /> },
          {
            path: "/payment/payment-electricity-bills",
            element: <Electricity />,
          },
          {
            path: "/payment/payment-cable-bills",
            element: <CableTv />,
          },
          {
            path: "/payment/telecoms-payment",
            element: <TelecomsPayment />,
          },
          {
            path: "/payment/transportation-toll-payment",
            element: <TransportToll />,
          },
          {
            path: "/payment/collection-levies-payment",
            element: <CollectionLevies />,
          },
          {
            path: "/payment/education-payment",
            element: <EducationPayment />,
          },
          {
            path: "/payment/betting-lottery",
            element: <BettingLottery />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <h1></h1>;
}

export default App;

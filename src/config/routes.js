import {
  Around_You,
  ERROR,
  HISTORY,
  HOME_PAGE,
  SEARCH,
  SIGN_IN,
  SIGN_UP,
  Top_Charts,
} from "../constants/routes";
import AuthGuard from "../guard/AuthGuard";
import GuestGuard from "../guard/GuestGuard";
import pages from "../pages";

export const routes = [
  { id: 0, path: HOME_PAGE, element: pages.Home, Guard: AuthGuard },
  { id: 1, path: SIGN_IN, element: pages.SingInPage, Guard: GuestGuard },
  { id: 2, path: SIGN_UP, element: pages.SignUpPage, Guard: GuestGuard },
  { id: 3, path: Around_You, element: pages.Around, Guard: AuthGuard },
  { id: 4, path: Top_Charts, element: pages.TopCartsPage, Guard: AuthGuard },
  { id: 5, path: SEARCH, element: pages.SearchPage, Guard: AuthGuard },
  { id: 6, path: HISTORY, element: pages.HistoryPage, Guard: AuthGuard },
  { id: 7, path: ERROR, element: pages.Error },
];

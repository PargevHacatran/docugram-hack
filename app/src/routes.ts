import { Auth, Chat, Sub } from "./pages";
import { CHAT_PATH, AUTH_PATH, SUB_PATH } from "./utils/consts";

export const publicRoutes = [
    {
        path: AUTH_PATH,
        Component: Auth
    },
    {
        path: SUB_PATH,
        Component: Sub
    }
];

export const privateRoutes = [
    {
        path: CHAT_PATH,
        Component: Chat 
    }
]
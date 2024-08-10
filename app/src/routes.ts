import { Auth, Chat } from "./pages";
import { CHAT_PATH, AUTH_PATH } from "./utils/consts";

export const publicRoutes = [
    {
        path: AUTH_PATH,
        Component: Auth
    },
];

export const privateRoutes = [
    {
        path: CHAT_PATH,
        Component: Chat 
    }
]
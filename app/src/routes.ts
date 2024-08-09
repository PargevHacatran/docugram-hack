import { Chat, Login } from "./pages";
import { CHAT_PATH, LOGIN_PATH } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_PATH,
        Component: Login
    },
];

export const privateRoutes = [
    {
        path: CHAT_PATH,
        Component: Chat 
    }
]
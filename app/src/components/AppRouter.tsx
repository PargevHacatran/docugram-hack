import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

interface IAppRouter {
    path: string;
    Component: React.ComponentType; 
}

export const AppRouter = () => {
    // const [user, setUser] = useState<boolean>(false);

    // const auth = getAuth();
    
    // onAuthStateChanged(auth, (user)  => {
    //     if (user) {
    //         setUser(true);
    //     } else {
    //         setUser(false);
    //     }
    // });

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    const user = true;

    return user 
        ? (
            <Routes>
                {privateRoutes.map(({ path, Component }: IAppRouter) => (
                    <Route path={path} element={<Component />} />
                ))}
            </Routes>
        )
        : (
            <Routes>
                {publicRoutes.map(({ path, Component }: IAppRouter) => (
                    <Route path={path} element={<Component />} />
                ))}
            </Routes>
        );
};
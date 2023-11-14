import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = { username: 'nombre' };

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    return useContext(UserContext);
};

"use client";

import React, { createContext, useContext, useState } from "react";

export interface User {
  id: string;
  email: string;
  firstName?: string;
  birthday?: string;
  photo?: string;
}

interface UserContextType {
  user: User;
  login: () => void;
  logout: () => void;
  signup: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const testUser = {
  id: "1234",
  email: "email@hotmail.com",
  firstName: "Jennifer",
  photo: "jennifer.jpg",
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser(testUser);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = () => {
    console.log("Signup");
  };

  const value: UserContextType = {
    user,
    login,
    logout,
    signup,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

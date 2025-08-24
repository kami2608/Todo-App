import { createContext, useEffect, useState, type ReactNode } from "react";
import { fireAuth } from "../../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <AuthContext.Provider value={user}>
        {loading ? <p>Loading...</p> : children}
      </AuthContext.Provider>
    </>
  );
}

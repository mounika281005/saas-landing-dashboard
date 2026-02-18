"use client";

import { useEffect, useState } from "react";

/* ================= USER TYPE ================= */
export interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
  };
  address?: {
    city: string;
  };
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [localUsers, setLocalUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH API USERS ================= */
  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        if (isMounted) {
          setUsers(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  /* ================= LOAD LOCAL USERS ================= */
  useEffect(() => {
    const storedUsers = localStorage.getItem("localUsers");

    if (storedUsers) {
      try {
        const parsed: User[] = JSON.parse(storedUsers);
        setLocalUsers(parsed);
      } catch {
        setLocalUsers([]);
      }
    }
  }, []);

  return {
    users,
    localUsers,
    loading,
    error,
  };
}

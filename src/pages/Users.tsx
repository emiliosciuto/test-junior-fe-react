import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [newName, setNewName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dati");
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Errore durante la fetch");
        setLoading(false);
      });
  }, []);

  const handleAddUser = () => {
    if (!newName || !newEmail) return;

    const newUser: User = {
      id: users.length + 1,
      name: newName,
      email: newEmail,
    };

    setUsers([...users, newUser]);
    setNewName("");
    setNewEmail("");
  };

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista Utenti</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}

      <h2>Aggiungi Utente</h2>

      <input
        type="text"
        placeholder="Nome"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      <button onClick={handleAddUser}>Aggiungi</button>
    </div>
  );
};

export default Users;

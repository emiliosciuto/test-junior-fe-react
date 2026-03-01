type UserCardProps = {
  id: number;
  name: string;
  email: string;
};

const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <strong>{name}</strong>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;

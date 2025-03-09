type BaseResponse = {
  data: unknown;
  loading: boolean;
  error: string | null;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const Users = ({ data, loading, error }: BaseResponse) => {
  const users = data as User[];
};

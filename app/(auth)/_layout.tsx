import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/ContextProvider/AuthContecxt';

export default function AuthLayout() {
  const { isAuthenticated }: any = useAuth();

  if (isAuthenticated) {
    return <Redirect href={'/'} />;
  }

  return <Stack />;
}

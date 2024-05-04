'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, TLoginSchema } from '@/schemas/User';
import { LoginCard } from '@/components/Login/LoginCard';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
  const loginMutation = useMutation({
    mutationKey: ['Login-User'],
    mutationFn: async () => {
      return;
    },
  });

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: TLoginSchema) {
    console.log(data);
  }

  return <LoginCard form={form} onSubmit={onSubmit} />;
};

export default Login;

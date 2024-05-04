import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { TLoginSchema } from '@/schemas/User';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  form: UseFormReturn<TLoginSchema, any, undefined>;
  onSubmit: (data: TLoginSchema) => void;
};

export const LoginCard = ({ form, onSubmit }: Props) => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Login,</CardTitle>
              <CardDescription>
                Welcome to ClubTravalet operations
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username / Email</FormLabel>
                    <FormControl>
                      <Input placeholder='exmaple@exmaple.com' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is either your company email or username.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' />
                    </FormControl>
                    <FormDescription>
                      Hint: password must contain at least 8 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <div className='w-full flex items-center justify-between'>
                <Button type='submit'>Submit</Button>
                <Button variant='link'>Forgot password</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

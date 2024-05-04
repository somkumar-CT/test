'use client';
import { HourPicker } from '@/components/HourPicker';
import { SelectBar } from '@/components/selectBar';
import { Button } from '@/components/ui/button';
import { apiClient } from '@/utils/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { DateTime } from 'luxon';
import ImageShowCase from '@/components/ImageShowCase';
import { RatingStarFullIcon } from '@/components/Icons/RatingStar';

const Test = () => {
  const [date, setDate] = useState<Date | undefined>();
  const queryClient = useQueryClient();

  const { data: times, isLoading } = useQuery({
    queryKey: ['get-all-booked-dates'],
    queryFn: async () => {
      return await apiClient.get('/getAll');
    },
    select: (data) => {
      return data.data;
    },
  });

  const bookMutation = useMutation({
    mutationKey: ['booking-mutation'],
    mutationFn: async () => {
      return await apiClient.post('', {
        checkInTime: DateTime.fromJSDate(date!).toUTC().toISO(),
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['get-all-booked-dates'] });
      console.log(data);
    },
  });

  const handleSubmit = () => {
    if (date) {
      console.log(DateTime.fromJSDate(date).toISO());
      bookMutation.mutateAsync();
    }
  };

  const data = [{ id: 1, time: 20 }];

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='h-[400px] mb-40 mt-2 space-y-4'>
        <h3 className='text-3xl font-bold'>Uniqioo containoboo</h3>
        <ImageShowCase
          images={[
            '/assets/container-1.webp',
            '/assets/container-2.webp',
            '/assets/container-3.webp',
            '/assets/container-4.webp',
            '/assets/container-5.webp',
          ]}
        />
        <div>
          <p className='text-xl font-semibold'>
            Tiny container stay in kochi, Kerala
          </p>
          <div className='flex items-center space-x-2'>
            <RatingStarFullIcon />
            <p>5.0</p>
          </div>
        </div>
      </div>
      <SelectBar data={times} />
      <div className='mt-20 space-y-2'>
        <HourPicker date={date} setDate={setDate} />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Test;

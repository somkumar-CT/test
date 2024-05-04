import { cn } from '@/lib/utils';

type Props = {
  data: { id: number; time: number }[];
};

export const SelectBar = ({ data }: Props) => {
  // const data = [
  //   {
  //     time: 1,
  //     isSlotAvaliable: true,
  //   },
  //   {
  //     time: 2,
  //     isSlotAvaliable: false,
  //   },
  //   {
  //     time: 3,
  //     isSlotAvaliable: true,
  //   },
  //   {
  //     time: 4,
  //     isSlotAvaliable: false,
  //   },
  //   {
  //     time: 5,
  //     isSlotAvaliable: true,
  //   },
  //   {
  //     time: 6,
  //     isSlotAvaliable: true,
  //   },
  // ];

  return (
    <div className='bg-amber-200 h-fit'>
      <div className='h-2 w-full bg-neutral-400 rounded-md flex'>
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-1/4 h-full  relative flex',
              data.some((item) => item.time === index + 1)
                ? 'bg-red-500'
                : 'bg-emerald-400'
            )}
          >
            <div className='absolute bottom-[-30px] text-xs w-full'>
              <p className='text-center'>-{index + 1}:00-</p>
            </div>
            <div
              className='h-full w-1/2'
              onClick={() => {
                console.log('first half');
              }}
            ></div>
            <div
              className='h-full w-1/2'
              onClick={() => {
                console.log('second half');
              }}
            ></div>
          </div>
        ))}

        {/* {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              'w-1/4 h-full  relative flex',
              item.isSlotAvaliable ? 'bg-emerald-400' : 'bg-red-500',
            )}
          >
            <div className='absolute bottom-[-30px] text-xs w-full'>
              <p className='text-center'>-{item.time}-</p>
            </div>
            <div
              className='h-full w-1/2'
              onClick={() => {
                console.log('first half');
              }}
            ></div>
            <div
              className='h-full w-1/2'
              onClick={() => {
                console.log('second half');
              }}
            ></div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

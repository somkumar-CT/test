import { useRef } from 'react';
import { Label } from './ui/label';
import { TimePickerInput } from './ui/time-picker-input';

type Props = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export const HourPicker = ({ date, setDate }: Props) => {
  const minuteRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex items-end gap-2'>
      <div className='grid gap-1 text-center'>
        <Label htmlFor='hours' className='text-xs'>
          Hours
        </Label>
        <TimePickerInput
          picker='hours'
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className='grid gap-1 text-center'>
        <Label htmlFor='minutes' className='text-xs'>
          Minutes
        </Label>
        <TimePickerInput
          disabled
          picker='minutes'
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
    </div>
  );
};

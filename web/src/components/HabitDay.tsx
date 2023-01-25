import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx'
import dayjs  from 'dayjs';
import { HabitsList } from './HabitList';
import { useState } from 'react';

interface HabitDayProps {
    date: Date
    defaultCompleted?: number
    amount?: number
}

export function HabitDay({defaultCompleted = 0, amount = 0, date}: HabitDayProps) {

  const [completed, setCompleted] = useState(defaultCompleted)

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  const compledtedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  function handleAmountCompletedChange(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors', {
          'bg-zinc-00 border-violet-800': compledtedPercentage === 0,
          'bg-violet-900 border-violet-700': compledtedPercentage > 0 && compledtedPercentage < 20,
          'bg-violet-800 border-violet-600': compledtedPercentage >= 20 && compledtedPercentage < 40,
          'bg-violet-700 border-violet-500': compledtedPercentage >= 40 && compledtedPercentage < 60,
          'bg-violet-600 border-violet-500': compledtedPercentage >= 60 && compledtedPercentage < 80,
          'bg-violet-500 border-violet-400': compledtedPercentage >= 80,

        })}/>

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col' >
          <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

          <ProgressBar progress={compledtedPercentage}/>

          <HabitsList
            date={date}
            onCompletedChange={handleAmountCompletedChange}
          />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

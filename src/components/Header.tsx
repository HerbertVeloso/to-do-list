import { BsCheck2Square } from 'react-icons/bs';

import { AddButton } from './AddButton';

export function Header () {
  return (
    <header className='bg-slate-800'>
      <div className='p-6 flex items-center justify-between max-w-7xl m-auto'>
      <div className='flex items-center gap-2'>
        <BsCheck2Square size={24} color='#f8fafc' />
        <h1 className='text-slate-50 text-xl font-medium'>To Do List</h1>
      </div>
      <AddButton />
      </div>
    </header>
  );
}
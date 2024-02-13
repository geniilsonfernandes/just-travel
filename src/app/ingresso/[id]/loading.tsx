export default function Loading() {
  return (
    <div className='container py-6 flex flex-col gap-4'>
      <div className='h-[100px] w-full bg-slate-200 animate-pulse rounded-md' />
      <div className='h-[300px] w-full bg-slate-200 animate-pulse rounded-md' />

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-8'>
          <div className='h-[400px] w-full bg-slate-200 animate-pulse rounded-md' />
        </div>
        <div className='col-span-4'>
          <div className='h-[400px] w-full bg-slate-200 animate-pulse rounded-md' />
        </div>
      </div>
    </div>
  )
}

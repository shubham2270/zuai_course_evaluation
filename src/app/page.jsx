import Image from "next/image";

export default function Home() {
  return (
    <main className='flex justify-center pt-180 bg-light-bg h-full'>
      <div className='max-w-6x flex'>
        <div className="max-w-740 flex-col">
          <div className='font-bold text-3xl'>Hey IB Folks ! Unsure about the quality of your answers? <span className='font-bold text-3xl text-primary'>We get you.</span></div>

        </div>
         <Image
          src="/spaceman.svg"
          alt="spaceman image with text"
          width='343'
          height='626'
          className='self-start'
          />
      </div>
    </main>
  );
}

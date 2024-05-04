'use client';

import Image from 'next/image';
// import Link from 'next/link';
type Props = {
  images: string[];
};
function ImageShowCase({ images }: Props) {
  return (
    <div className='h-full grid grid-rows-2 grid-cols-4 gap-2 relative'>
      {/* <Link
        href='#'
        className='absolute right-2 bottom-3 bg-white px-3 py-1 rounded-md'
      >
        show more
      </Link> */}
      <div className='row-span-2 col-span-2'>
        <Image
          alt=''
          unoptimized
          width={0}
          height={0}
          // src={`data:image/png;base64,${images[0]}`}
          src={images[0]}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className='row-span-1 col-span-1'>
        <Image
          alt=''
          unoptimized
          width={0}
          height={0}
          // src={`data:image/png;base64,${images[1]}`}
          src={images[1]}
          className='h-full w-full rounded-lg object-cover'
        />{' '}
      </div>
      <div className='row-span-1 col-span-1'>
        <Image
          alt=''
          unoptimized
          width={0}
          height={0}
          // src={`data:image/png;base64,${images[2]}`}
          src={images[2]}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className='row-span-1 col-span-1'>
        <Image
          alt=''
          unoptimized
          width={0}
          height={0}
          // src={`data:image/png;base64,${images[3]}`}
          src={images[3]}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className='row-span-1 col-span-1'>
        <Image
          alt=''
          unoptimized
          width={0}
          height={0}
          // src={`data:image/png;base64,${images[4]}`}
          src={images[4]}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
    </div>
  );
}

export default ImageShowCase;

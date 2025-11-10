import React from 'react'


export default function column() {
  return (
    <div className='bg-zinc-950 space-x-2 space-y-4  2xl:columns-5 xl:columns-4 md:columns-3 columns-1 '>
     {

        [1,2,3,4,5,6,7,8,9,10].map((_,i)=>
        <div className='bg-fuchsia-200 p-3 rounded break-inside-avoid p-2'>
        <img src={"https://picsum.photos/200/200?random=1"+ i} alt="" className='w-full'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus nulla, ducimus, doloribus consectetur excepturi eos, enim ullam doloremque ad maiores mollitia sunt quo? Accusamus amet cumque quia ea dolorum.</p>
        </div>
            
        )
     }
    </div>
  )
}

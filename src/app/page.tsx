import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPlayBackSharp } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
//import createtask from "@/actions/createtask"

const page = () => {

  // export const createtask: React.FC (async (name: string, isCompleted:boolean))=> {
  //   const[entries,setEntries]= useState( <LoremEntry[]>([]));
  //   useEffect(() => {
  //     const fetchedList: LoremEntry[]= await createtask();
  //     setEntry(prevEntry=> prevEntry.filter=>(entry.id!==id))
  //     };
  // }
  // export onDelete: React.FC(async (id: string)){
  //   Lorem.deletetask(id)
  // }
  return (
    <div className='bg-white max-auto container h-screen w-ful '>
      <div className='flex flex-row justify-center items-center mt-4 gap-5 justify-evenly'>
<div className='bg-red-500 w-[200px] h-200px border border-black rounded-lg '>
<p className='text-xl text-black justify-center items-center font-mono'>Total Tasks</p>
<h1 className='text-8xl text-black font-mono'>04</h1>
</div>
<div className='bg-red-500 w-[200px] h-200px border border-black rounded-lg '>
<p className='text-xl text-black font-mono'>Pending</p>
<h1 className='text-8xl text-black font-mono'>02</h1>
</div>
<div className='bg-red-500 w-[200px] h-200px border border-black rounded-lg '>
<p className='text-xl text-black font-mono'>Completed</p>
<h1 className='text-8xl text-black font-mono'>02</h1>
</div>
      </div>
    
      <div className='flex flex-row justify-center items-center mt-6 gap-4'>
<div className='text-gray-500 w-[800px] pl-2'>
  <Input   placeholder='Enter task here.. '/>
</div>

<Button className='bg-black text-white w-[180px] pr-2'>Add Task <IoMdAdd className='bg-purple-500 ' /></Button>
      </div>
<div>


      <div className='flex flex-row  items-center mt-6  border border-black h-[100px]'>
<div className='text-black w-[200px]'>
<h1> This is a sample task 1</h1>
</div>
<div className='rounded-2xl h-[40px] pl-[700px] '>
<Button className='bg-black text-white w-[180px]  '>Mark as completed</Button>
</div>
<div>
  <Button className='bg-white'>
<FaRegTrashAlt className='bg-black'/>
</Button>
</div>
</div>

<div className='flex flex-row  items-center mt-6  border border-black h-[100px]'>
<div className='text-black w-[200px]'>
<h1> This is a sample task 2</h1>
</div>
<div className='rounded-2xl h-[40px] pl-[700px] '>
<Button className='bg-black text-white w-[180px]  '>Mark as completed</Button>
</div>
<div>
  <Button className='bg-white'>
<FaRegTrashAlt className='bg-black'/>
</Button>
</div>
</div>

<div className='flex flex-row  items-center mt-6  border border-black h-[100px]'>
<div className='text-black w-[200px]'>
<h1> This is a sample task 3</h1>
</div>
<div className='rounded-2xl h-[40px] pl-[700px] '>
<Button className='bg-black text-white w-[180px]  '>Mark as completed</Button>
</div>
<div>
  <Button className='bg-white'>
<FaRegTrashAlt className='bg-black'/>
</Button>
</div>
</div>
      </div>
      <div className='flex justify-between mt-6 '>
        <Button className='bg-white text-black border border-black w-[150px]'> <IoPlayBackSharp />Previous</Button>
        <Button className='bg-white text-black border border-black w-[150px]'>Next <TbPlayerTrackNextFilled /></Button>
      </div>
    </div>
  ) 
}

export default page

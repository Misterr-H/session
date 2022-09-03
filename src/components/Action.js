import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Chip from './Chip';

const Action = () => {
    const [text, setText] = useState("Images")
    const [clas, setClas] = useState("flex");

    return (
        <div className="flex flex-col mt-20 items-center">
            <h1 className="text-xl md:text-3xl font-medium tracking-wide">All the assets you need, in one place</h1>
            <h1 className="text-sm text-center md:text-lg font-light mt-4">Find and download the best high-quality photos, designs and mockups</h1>

            <div className="flex text-black items-center bg-white mt-10" onClick={() => {
                if(clas === "hidden")
                setClas("flex")
                else
                setClas("hidden")
            }} >
                <div className='flex mx-2'>
                    {text}
                </div>

               
                {/* <div className="border-r-2 border-gray-300 mx-2 pr-2 hidden md:flex">
                    <select defaultValue={'images'} className={' w-48 outline-none'}>
                        <option value={'images'}>Images</option>
                        <option value={'collections'}>Collections</option>
                    </select>
                </div> */}
                <input className="w-72 p-2 md:p-0 md:w-96 outline-none"/>
                <SearchIcon className='cursor-pointer' sx={{
                    background:'white',
                    padding:'0.5rem'
                }} fontSize="large" />
            </div>

            <div className={'flex-col bg-white text-black p-1 mt-1 -ml-96 shadow-black shadow-2xl ' + clas}>
                    <h1 className='my-2 cursor-pointer' onClick={() => {
                        setText("Images")
                    }} >Images</h1>
                    <h1 className='my-2 cursor-pointer' onClick={() => {
                        setText("Collections")
                    }} >Collections</h1>
                </div>

            <div className='flex mt-5'>
                <Chip text={'Poster'} />
                <Chip text={'Text effect'} />
                <Chip text={'Business Card'} />
            </div>

        </div>
    )
}

export default Action;
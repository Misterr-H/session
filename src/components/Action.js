import SearchIcon from '@mui/icons-material/Search';
import Chip from './Chip';

const Action = () => {
    return (
        <div className="flex flex-col mt-20 items-center">
            <h1 className="text-3xl font-medium tracking-wide">All the assets you need, in one place</h1>
            <h1 className="text-lg font-light mt-4">Find and download the best high-quality photos, designs and mockups</h1>

            <div className="flex text-black items-center bg-white mt-10">
                <div className="border-r-2 border-gray-300 mx-2 pr-2">
                    <select defaultValue={'images'} className={' w-48 outline-none'}>
                        <option value={'images'}>Images</option>
                        <option value={'collections'}>Collections</option>
                    </select>
                </div>
                <input className="w-96 outline-none"/>
                <SearchIcon className='cursor-pointer' sx={{
                    background:'white',
                    padding:'0.5rem'
                }} fontSize="large" />
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
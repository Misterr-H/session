import SearchIcon from '@mui/icons-material/Search';

const Chip = (props) => {
    return (
        <div className='flex
                        bg-[#5A89E3]
                        p-1 rounded-md
                        mx-2
                        text-xs
                        items-center
                        hover:bg-blue-400
                        duration-300
                        cursor-pointer'>
            <SearchIcon />
            <h1 className='cursor-pointer'>{props.text}</h1>

        </div>
    )
}

export default Chip;
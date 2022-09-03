const CategoryItem = (props) => {
    return (
        <div className="flex-none flex flex-col items-center my-20 mx-5">
            <div className="border-4
            border-[#86ADF0]
            rounded-full
            p-0.5
            overflow-hidden">
                 <img src={props.image}
                 className="w-24
                 h-24
                 rounded-full
                 brightness-50
                 hover:brightness-100
                 duration-300
                 hover:scale-110" />
            </div>
            <h1 className="mt-4">{props.name}</h1>
        </div>
    )
}

export default CategoryItem;
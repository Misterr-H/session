import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <div className="flex md:justify-center overflow-x-scroll">
            <CategoryItem name="Vectors" image="https://source.unsplash.com/random/300×300/?Vectors" />
            <CategoryItem name="Illustartions" image="https://source.unsplash.com/random/300×300/?Illustrations"/>
            <CategoryItem name="Photos" image="https://source.unsplash.com/random/300×300/?photos"/>
            <CategoryItem name="Templates" image="https://source.unsplash.com/random/300×300/?templates"/>
            <CategoryItem name="Fonts" image="https://source.unsplash.com/random/300×300/?fonts"/>
            <CategoryItem name="Mockups" image="https://source.unsplash.com/random/300×300/?mockups"/>
            <CategoryItem name="Backgrounds" image="https://source.unsplash.com/random/300×300/?backgrounds"/>
            <CategoryItem name="Text Effexts" image="https://source.unsplash.com/random/300×300/?text%20effects"/>
        </div>
    )
}

export default Categories;
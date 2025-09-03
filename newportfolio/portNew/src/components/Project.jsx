import InfiniteCards from "./InfiniteCards"
const cards = [
  { id: 1, title: "Card 1", content: "Description for card 1" },
  { id: 2, title: "Card 2", content: "Description for card 2" },
  { id: 3, title: "Card 3", content: "Description for card 3" },
];
function Project() {
    return (
        <div className="max-w-7xl h-full px-4 md:px-8 py-8 mx-auto">
            <h1 className="border-b border-b-gray-500 text-xl xs:text-4xl font-bold max-sm:text-center ">✨Projects I have worked on...</h1>

            <div className="w-full xs:mt-4 ">
                <div className=" flex  justify-center bg-transparent">
                    <InfiniteCards cards={cards} />
                </div>
                <div className="flex  justify-center bg-transparent">
                    <InfiniteCards cards={cards} />
                </div>
                <div className=" flex  justify-center bg-transparent">
                    <InfiniteCards cards={cards} />
                </div>
            </div>
        </div>
    )
}

export default Project
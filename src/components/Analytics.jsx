import HondaCivic from "../assets/images/HondaCivic.jpg"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 scroll-px-48">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={HondaCivic} alt="Honda vehicle" />
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold uppercase">
                    Verified Eastern Cape Used Dealers
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Interact and book appointments to view vehicles </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate ut reiciendis adipisci sunt laudantium minima quo ea praesentium id, ipsum provident a, consequatur non? Odio necessitatibus iure praesentium vero.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics
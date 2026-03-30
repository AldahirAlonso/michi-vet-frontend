function Hero() {
    return (
        <main className="bg-">
            <div className=" py-65">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Bienvenidos a MichiVet Cuernavaca</h1>
                <p className="text-lg text-center text-gray-600 mb-8">Cuidamos a tus mascotas con amor y profesionalismo</p>
                <div className="flex justify-center">
                    <a href="#servicios" className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300">Nuestros Servicios</a>
                </div>
            </div>
        </main>
    )
}

export default Hero;
import { Calendar } from 'lucide-react';

function Hero() {
    return (
        <section className="relative bg-white-100 py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">

                <div className="lg:w-1/2 text-center lg:text-left z-10">
                    <h1 className="text-6xl font-extrabold text-purple-500 leading-tight mb-6">
                        El cuidado que tu <span className="text-pink-400">michi</span> merece
                    </h1>

                    <p className="text-lg text-gray-600 font-light mx-auto mb-8 max-w-lg lg:mx-0">En MichiVet somos especialistas apasionados por la salud felina.
                        Brindamos atención médica de alta calidad en un ambiente diseñado solo para gatos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button className="bg-purple-400 text-white px-8 py-3 rounded-full hover:bg-purple-500 transition-all shadow-md hover:shadow-lg active:scale-95">
                            <Calendar size={32} className="text-black w-10 h-8" />
                            Agenda tu cita
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 mt-12 flex flex-col justify-center relative gap-4">
                    <div className=" gap-4"></div>
                    <img
                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600"
                        alt="Imagen de un gato feliz"
                        className="relative z-10 rounded-2xl w-full max-w-md object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero;
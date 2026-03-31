import { Calendar } from 'lucide-react';

function Hero() {
    return (
        <section className="bg-gray-100 py-20">
            <div>
                <h1 className="text-5xl text-blue-500 text-center font-extrabold mb-6">
                    El cuidado que tu <span className="text-pink-400">michi</span> merece
                </h1>
                <p className="text-lg text-gray-600 text-center font-light mx-auto mb-8">En MichiVet somos especialistas apasionados por la salud felina.
                    Brindamos atención médica de alta calidad en un ambiente diseñado solo para gatos.
                </p>
                <div className="flex justify-center">

                    <a href="#contacto" className="bg-blue-400 text-white px-5 py-3 rounded-full hover:bg-blue-500 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center">
                        <Calendar size={32} className="text-black w-10 h-8" />
                        Agenda tu cita
                    </a>
                </div>

                <div className={"mt-12 flex justify-center"}>

                    <img src="/images/hero-cat.png" alt="Imagen de un gato feliz" className="w-96 h-auto rounded-lg shadow-lg" />

                </div>
            </div>


        </section>
    )
}

export default Hero;
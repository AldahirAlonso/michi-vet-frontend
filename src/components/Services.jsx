function Services(){
    return (
        <section className="bg-gray-100 py-16 lg:py-24">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Consulta General</h3>
                        <p className="text-gray-600">Evaluación completa de la salud de tu gato, diagnóstico y recomendaciones personalizadas.</p>
                    </div>
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Vacunación</h3>
                        <p className="text-gray-600">Protege a tu gato contra enfermedades comunes con nuestro programa de vacunación completo.</p>
                    </div>
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Cirugias</h3>
                        <p className="text-gray-600">Procedimientos quirúrgicos seguros y efectivos, desde esterilizaciones hasta cirugías de emergencia.</p>
                    </div>
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Grooming Especializado</h3>
                        <p className="text-gray-600">Corte de pelo, baño y cuidado de uñas adaptados a las necesidades específicas de los gatos.</p>
                    </div>
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Emergencias 24/7</h3>
                        <p className="text-gray-600">Atención inmediata para situaciones críticas, con un equipo preparado para manejar cualquier emergencia.</p>
                    </div>
                    <div className="bg-white border-3 border-pink-300 rounded-xl p-6 transition-shadow hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Asesoramiento Nutricional</h3>
                        <p className="text-gray-600">Planes de alimentación personalizados para mantener a tu gato saludable y feliz.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
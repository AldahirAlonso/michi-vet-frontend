function About() {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 py-12 lg:py-24">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-extrabold mb-6">Sobre Nosotros</h2>
                        <p className="text-gray-700 mb-6">En MichiVet, somos apasionados por el bienestar de los gatos. Nuestro equipo de veterinarios y especialistas está dedicado a proporcionar la mejor atención posible para tu felino. Con años de experiencia y un enfoque centrado en el cuidado personalizado, nos esforzamos por crear un ambiente acogedor y seguro para cada gato que atendemos.</p>
                        <p className="text-gray-700">Desde consultas generales hasta procedimientos especializados, ofrecemos una amplia gama de servicios diseñados para mantener a tu gato saludable y feliz. Creemos que cada gato merece el mejor cuidado, y estamos comprometidos a brindar ese nivel de atención en cada visita.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Sobre Nosotros" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
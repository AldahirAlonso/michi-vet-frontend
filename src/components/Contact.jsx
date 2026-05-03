function Contact() {
    return (
        <section className="bg-blue-200 p-20 lg:p-28">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className="bg-purple-400 text-2xl font-bold text-center rounded-full py-4 px-4">Contacto</h2>

                <div className="w-full">
                    <h3 className="text-3xl font-bold text-center mt-8 mb-4">¿Tienes alguna duda?</h3>
                    <p className="text-center mt-8 mb-8 text-xl font-light">Ponte en <span className="text-purple-600 font-semibold">contacto</span> con nosotros si deseas agendar una consulta, o resolver cualquier duda sobre el cuidado de tu mascota.</p>

                    <div className="max-w-md mx-auto bg-gray-200 p-10 border border-gray-300 rounded-lg shadow-lg">
                        <form className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="email">Nombre del gato</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Nombre de tu gato" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="email">Correo electrónico</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu correo electrónico" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="email">Telefono</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu teléfono" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
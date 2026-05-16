import { useState } from 'react';

function Contact() {
    // 1. Creamos un estado único para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        nombreGato: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    // Estado opcional para mostrar mensajes de éxito o error al usuario
    const [status, setStatus] = useState({ info: '', error: false });

    // 2. Función para actualizar el estado cada vez que el usuario escribe
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. Función para enviar los datos al Backend al hacer submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Validación básica
        if (Object.values(formData).some(field => field.trim() === '')) {
            setStatus({ info: 'Todos los campos son obligatorios', error: true });
            return;
        }

        try {
            // Tu API de Express (ajusta el puerto si usas otro, ej: 4000)
            const respuesta = await fetch('http://localhost:4000/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const resultado = await respuesta.json();

            if (resultado.success) {
                setStatus({ info: '¡Mensaje enviado con éxito!', error: false });
                // Limpiar el formulario
                setFormData({ nombre: '', nombreGato: '', email: '', telefono: '', mensaje: '' });
            } else {
                setStatus({ info: 'Hubo un error al enviar el mensaje', error: true });
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setStatus({ info: 'No se pudo conectar con el servidor', error: true });
        }
    };

    return (
        <section className="bg-blue-200 p-20 lg:p-28">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className="bg-purple-400 text-2xl font-bold text-center rounded-full py-4 px-4">Contacto</h2>

                <div className="w-full">
                    <h3 className="text-3xl font-bold text-center mt-8 mb-4">¿Tienes alguna duda?</h3>
                    <p className="text-center mt-8 mb-8 text-xl font-light">
                        Ponte en <span className="text-purple-600 font-semibold">contacto</span> con nosotros si deseas agendar una consulta, o resolver cualquier duda sobre el cuidado de tu mascota.
                    </p>

                    <div className="max-w-md mx-auto bg-gray-200 p-10 border border-gray-300 rounded-lg shadow-lg">
                        
                        {/* Alerta visual de éxito o error */}
                        {status.info && (
                            <div className={`p-3 mb-4 rounded text-center font-bold text-white ${status.error ? 'bg-red-500' : 'bg-green-500'}`}>
                                {status.info}
                            </div>
                        )}

                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="nombre" name="nombre" type="text" placeholder="Tu nombre" 
                                    value={formData.nombre} onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="nombreGato">Nombre del gato</label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="nombreGato" name="nombreGato" type="text" placeholder="Nombre de tu gato" 
                                    value={formData.nombreGato} onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="email">Correo electrónico</label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" name="email" type="email" placeholder="Tu correo electrónico" 
                                    value={formData.email} onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="telefono" name="telefono" type="tel" placeholder="Tu teléfono" 
                                    value={formData.telefono} onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-950 text-sm font-bold mb-2" htmlFor="mensaje">Mensaje</label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" 
                                    value={formData.mensaje} onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Enviar
                                </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
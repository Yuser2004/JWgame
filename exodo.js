window.booksData = window.booksData || {};

window.booksData[2] = {
    id: 2,
    title: "Éxodo",
    icon: "🔥",
    quiz: [
        {
            q: "Según Éxodo 3:15, ¿cuál es el nombre divino que Dios dio a Moisés para recordar de generación en generación?",
            options: ["El Señor", "Jehová", "Adonai", "Yahvé"],
            correct: 1,
            reading: "Éxodo 3:15 señala expresamente: 'Jehová... Este es mi nombre para siempre'."
        },
        {
            q: "Según Éxodo 9:16, ¿con qué propósito principal permitió Jehová que Faraón siguiera con vida?",
            options: [
                "Para darle tiempo de arrepentirse",
                "Para mostrar su poder y declarar Su nombre en toda la tierra",
                "Para probar la paciencia del pueblo de Israel",
                "Para destruir los templos egipcios"
            ],
            correct: 1,
            reading: "En Éxodo 9:16 Jehová explica que permitió a Faraón permanecer para mostrar Su poder y proclamar Su nombre."
        },
        {
            q: "Según Éxodo 28:36, ¿qué inscripción estaba grabada en la lámina brillante de oro puro del turbante de Aarón?",
            options: [
                "Santo es Jehová",
                "La santidad pertenece a Jehová",
                "Jehová es nuestro Dios",
                "Consagrado al Señor"
            ],
            correct: 1,
            reading: "Éxodo 28:36 indica que debía grabarse: 'La santidad pertenece a Jehová'."
        }
    ],
    investigation: [
        { id: "inv-ex-1", event: "Recibió la comisión en la zarza ardiente y confrontó al Faraón.", correct: "Moisés" },
        { id: "inv-ex-2", event: "Fue nombrado el primer Sumo Sacerdote de la nación de Israel.", correct: "Aarón" },
        { id: "inv-ex-3", event: "Comandó a las tropas en la batalla contra los amalequitas en Rejidim.", correct: "Josué" }
    ],
    characters: ["Seleccionar...", "Moisés", "Aarón", "Josué", "Míriam", "Jetro"]
};
window.booksData = window.booksData || {};

window.booksData[1] = {
    id: 1,
    title: "Génesis",
    icon: "🌱",
    quiz: [
        {
            q: "¿Cuántos libros componen las Escrituras inspiradas en total según la Biblia?",
            options: ["39", "66", "73", "40"],
            correct: 1,
            reading: "La respuesta correcta es 66. Revisa el índice de tu Traducción del Nuevo Mundo."
        },
        {
            q: "Aproximadamente, ¿cuántos hombres usó Jehová para redactar la Biblia?",
            options: ["12", "70", "40", "100"],
            correct: 2,
            reading: "La respuesta correcta es 40 hombres. Consulta la portada de la TNM para repasar este detalle."
        },
        {
            q: "Según Génesis 3:15, ¿quién prometió Jehová que aplastaría en la cabeza a la serpiente?",
            options: ["El gran dragón", "La descendencia de la mujer", "Los ángeles", "Moisés"],
            correct: 1,
            reading: "Génesis 3:15 señala directamente a 'La descendencia de la mujer'."
        }
    ],
    investigation: [
        { id: "inv-g-1", event: "Construyó el arca y sobrevivió al Diluvio global con su familia.", correct: "Noé" },
        { id: "inv-g-2", event: "Salió de Ur por fe y recibió la promesa de la descendencia.", correct: "Abrahán" },
        { id: "inv-g-3", event: "Fue vendido a Egipto y llegó a ser el segundo al mando del faraón.", correct: "José" }
    ],
    characters: ["Seleccionar...", "Abrahán", "José", "Noé", "Jacob"]
};
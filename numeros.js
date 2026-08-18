window.booksData = window.booksData || {};

window.booksData[4] = {
    id: 4,
    title: "Números",
    icon: "⛺",
    quiz: [
        {
            q: "Según Números 13:27-30, ¿quiénes de los 12 espías trajeron un informe positivo sobre la Tierra Prometida y animaron al pueblo?",
            options: [
                "Josué y Caleb",
                "Moisés y Aarón",
                "Gedeón y Barac",
                "Eleazar y Coré"
            ],
            correct: 0,
            reading: "Números 13:30 y 14:6-9 señalan que solo Caleb y Josué mostraron fe y confianza para entrar en la tierra."
        },
        {
            q: "Según Números 21:8-9, ¿qué objeto mandó Jehová a hacer a Moisés para salvar a quienes habían sido mordidos por serpientes venenosas?",
            options: [
                "Un altar de bronce",
                "Una serpiente de cobre",
                "Un arca de madera de acacia",
                "Un bastón florecido"
            ],
            correct: 1,
            reading: "Números 21:9 registra: 'Moisés en seguida hizo una serpiente de cobre y la puso sobre un poste'."
        },
        {
            q: "Según Números 22:28, ¿a través de qué ser milagroso le habló Jehová a Balam para advertirle en el camino?",
            options: [
                "Un ángel resplandeciente",
                "Una burra (asna)",
                "Un león del desierto",
                "Una nube en forma de columna"
            ],
            correct: 1,
            reading: "Números 22:28 relata: 'Entonces Jehová hizo que la burra hablara y ella le dijo a Balam...'."
        }
    ],
    investigation: [
        { id: "inv-num-1", event: "Lideró una rebelión desafiando la autoridad de Moisés y Aarón, y la tierra se abrió bajo sus pies.", correct: "Coré" },
        { id: "inv-num-2", event: "Profeta contratado por el rey Balac para maldecir a Israel, aunque terminó pronunciando bendiciones.", correct: "Balam" },
        { id: "inv-num-3", event: "Uno de los espías valientes que fue designado para suceder a Moisés como líder.", correct: "Josué" }
    ],
    characters: ["Seleccionar...", "Coré", "Balam", "Josué", "Balac", "Efraín"]
};
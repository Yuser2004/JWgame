window.booksData = window.booksData || {};

window.booksData[5] = {
    id: 5,
    title: "Deuteronomio",
    icon: "📖",
    quiz: [
        {
            q: "Según Deuteronomio 6:4-5, ¿cuál es el mandamiento fundamental?",
            options: [
                "Ama a Jehová tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas",
                "ama a tu prójimo como a ti mismo",
                "Guardarás el sábado y no harás en él trabajo alguno",
                "Ofrecerás sacrificios de alabanza en el templo todos los días"
            ],
            correct: 0,
            reading: "Deuteronomio 6:5 dice: 'Ama a Jehová tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas'."
        },
        {
            q: "Según Deuteronomio 34:1-4, ¿desde qué monte le mostró Jehová a Moisés la Tierra Prometida antes de su muerte?",
            options: [
                "Monte Nebo (Pisgá)",
                "Monte Carmelo",
                "Monte Sinaí",
                "Monte Gerizim"
            ],
            correct: 2,
            reading: "Deuteronomio 34:1 señala que Moisés subió al monte Nebo, a la cumbre del Pisgá, desde donde vio la tierra."
        },
        {
            q: "Según Deuteronomio 18:18, ¿qué prometió Jehová nombrar en el futuro similar a Moisés?",
            options: [
                "Un rey terrenal",
                "Un profeta",
                "Un juez militar",
                "Un templo de piedra"
            ],
            correct: 1,
            reading: "Deuteronomio 18:18 registra: 'Nombrare para ellos de entre sus hermanos un profeta como tú'."
        }
    ],
    investigation: [
        { id: "inv-deut-1", event: "Líder de Israel que dio discursos de despedida repasando la Ley antes de morir en Moab.", correct: "Moisés" },
        { id: "inv-deut-2", event: "Nombrado formalmente por imposición de manos como el sucesor lleno del espíritu de sabiduría.", correct: "Josué" },
        { id: "inv-deut-3", event: "Rey gigante de Basán cuya cama de hierro medía más de 4 metros de largo.", correct: "Og" }
    ],
    characters: ["Seleccionar...", "Moisés", "Josué", "Og", "Caleb", "Gedeón"]
};
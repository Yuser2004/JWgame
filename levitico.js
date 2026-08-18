window.booksData = window.booksData || {};

window.booksData[3] = {
    id: 3,
    title: "Levítico",
    icon: "📜",
    quiz: [
        {
            q: "Según Levítico 17:11, ¿por qué la vida de la carne está en la sangre y se usaba sobre el altar?",
            options: [
                "Porque era un mandato ritual exclusivo para la tribu de Leví",
                "Porque la sangre realiza expiación por la vida de las personas",
                "Porque la sangre representaba la fuerza de los animales",
                "Porque servía como alimento reservado para los sacerdotes"
            ],
            correct: 1,
            reading: "Levítico 17:11 aclara: 'La vida de la carne está en la sangre... porque es la sangre la que hace expiación'."
        },
        {
            q: "Según Levítico 19:18, ¿cuál es el mandato fundamental respecto a las demás personas que Jesús más tarde destacó como el segundo gran mandamiento?",
            options: [
                "Debes dar diezmos de todo lo que poseas",
                "Debes amar a tu prójimo como a ti mismo",
                "Debes corregir públicamente a tu hermano",
                "Debes perdonar siete veces a tu compañero"
            ],
            correct: 1,
            reading: "En Levítico 19:18 se manda: 'Tienes que amar a tu prójimo como a ti mismo. Yo soy Jehová'."
        },
        {
            q: "Según Levítico 25:10, ¿cada cuántos años se celebraba el Jubileo, año en el que se proclamaba libertad en la tierra?",
            options: ["Cada 7 años", "Cada 40 años", "Cada 50 años", "Cada 70 años"],
            correct: 2,
            reading: "Levítico 25:10 especifica: 'Tienen que santificar el año número 50 y proclamar libertad en la tierra'."
        }
    ],
    investigation: [
        { id: "inv-lev-1", event: "Fue nombrado Sumo Sacerdote para oficiar en el tabernáculo según la Ley.", correct: "Aarón" },
        { id: "inv-lev-2", event: "Ofrecieron 'fuego no autorizado' delante de Jehová y murieron consumidos por fuego.", correct: "Nadab y Abihú" },
        { id: "inv-lev-3", event: "Recibió todas las instrucciones del santuario directamente de Jehová en el monte.", correct: "Moisés" }
    ],
    characters: ["Seleccionar...", "Aarón", "Nadab y Abihú", "Moisés", "Eleazar"]
};
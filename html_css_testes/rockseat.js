// Goal - toggle into celsius degree and fahrenheit degree
// function transformDegree(degree) {
//   const celsiusExist = degree.toUpperCase().includes("C");
//   const fahrenheitExist = degree.toUpperCase().includes("F");

//   if (!celsiusExist && !fahrenheitExist)
//     throw new Error("Grau não indentificado");
//   else {
//     let formula;
//     let updatedDegree;
//     let degreeSign;

//     if (celsiusExist) {
//       // C => F
//       updatedDegree = Number(degree.replace("C", ""));
//       degreeSign = "F";

//       formula = (celsius) => {
//         return (celsius * 9) / 5 + 32;
//       };
//     } else {
//       // F => C
//       updatedDegree = Number(degree.replace("F", ""));
//       degreeSign = "C";

//       formula = (fahrenheit) => {
//         return ((fahrenheit - 32) * 5) / 9;
//       };
//     }

//     return formula(updatedDegree).toFixed(1) + degreeSign;
//   }
// }

// try {
//   console.log(transformDegree("13C"));
// } catch (error) {
//   console.log(error);
// }

/* 
∞ Buscando e contando dados em Arrays ∞
Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
    • Contar o número de categorias e o número de livros em cada categoria
    • Contar o número de autores
    • Mostrar livros do autor Auguto Cury
    • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 */
const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];


// • Contar o número de categorias e o número de livros em cada categoria
const totalCategories = booksByCategory.length;
for (const category of booksByCategory) {
  console.log(`Categoria: ${category.category}`);
  console.log(`Total de  livros: ${category.books.length}`);
}


// • Contar o número de autores
console.log(countAuthors());

function countAuthors() {
  const authors = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      // Se já tiver esse autor no array eu não adiciono ele dnv
      if (!authors.includes(book.author)) authors.push(book.author);
    }
  }

  return `Total de autores: ${authors.length}`;
}


// • Mostrar livros do autor Auguto Cury
console.log(searchBookByAuthor("George S. Clason"));

function searchBookByAuthor(author) {
  const booksByAuthor = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      //
      if (author === book.author) {
        booksByAuthor.push(book.title);
      }
    }
  }

  let books = booksByAuthor.join(", ");

  return `Livros do "${author}": ${books}`;
}

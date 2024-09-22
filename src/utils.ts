const generateNotes = () => {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    note: Math.floor(Math.random() * 21),
  }))
}

const FAKEUSERS = [
  {
    userName: 'João Silva Carlos Alberto',
    email: 'joao.silva@email.com',
    password: 'passwordSegura123',
    userType: 'normal',
    details: [
      { id: 0, detailType: 'Nº', content: '11967' },
      { id: 1, detailType: 'Classe: ', content: '12ª' },
      { id: 2, detailType: 'Curso: ', content: 'Enfermagem' },
      { id: 3, detailType: 'Turno: ', content: 'Manhã' },
    ],
    grades: {
      tenth_class: [
        { id: 0, subject: 'Geografia', notes: generateNotes() },
        { id: 1, subject: 'Educação Física', notes: generateNotes() },
        { id: 2, subject: 'História', notes: generateNotes() },
        { id: 3, subject: 'Matemática', notes: generateNotes() },
        { id: 4, subject: 'Biologia', notes: generateNotes() },
        { id: 5, subject: 'Química', notes: generateNotes() },
        { id: 6, subject: 'Literatura', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
        { id: 8, subject: 'Gestão de Redes', notes: generateNotes() },
        { id: 9, subject: 'Comportamento Organizacional', notes: generateNotes() },
        { id: 10, subject: 'Física', notes: generateNotes() },
        { id: 11, subject: 'Sistemas Digitais', notes: generateNotes() },
        { id: 12, subject: 'Engenharia de Redes', notes: generateNotes() },
      ],
      eleventh_class: [
        { id: 0, subject: 'Física', notes: generateNotes() },
        { id: 1, subject: 'Química', notes: generateNotes() },
        { id: 2, subject: 'Matemática', notes: generateNotes() },
        { id: 3, subject: 'Biologia', notes: generateNotes() },
        { id: 4, subject: 'História', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
      ],
      twelfth_class: [
        { id: 0, subject: 'Matemática', notes: generateNotes() },
        { id: 1, subject: 'História', notes: generateNotes() },
        { id: 2, subject: 'Química', notes: generateNotes() },
        { id: 3, subject: 'Física', notes: generateNotes() },
        { id: 4, subject: 'Arte', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
    },
  },
  {
    userName: 'Maria Oliveira De Almeida',
    email: 'maria.oliveira@email.com',
    password: 'senhaForte456',
    userType: 'bolseiro',
    details: [
      { id: 0, detailType: 'Nº', content: '11968' },
      { id: 1, detailType: 'Classe: ', content: '11ª' },
      { id: 2, detailType: 'Curso: ', content: 'Psicologia' },
      { id: 3, detailType: 'Turno: ', content: 'Tarde' },
    ],
    grades: {
      tenth_class: [
        { id: 0, subject: 'Matemática', notes: generateNotes() },
        { id: 1, subject: 'História', notes: generateNotes() },
        { id: 2, subject: 'Química', notes: generateNotes() },
        { id: 3, subject: 'Física', notes: generateNotes() },
        { id: 4, subject: 'Arte', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
      eleventh_class: [
        { id: 0, subject: 'Física', notes: generateNotes() },
        { id: 1, subject: 'Química', notes: generateNotes() },
        { id: 2, subject: 'Matemática', notes: generateNotes() },
        { id: 3, subject: 'Biologia', notes: generateNotes() },
        { id: 4, subject: 'História', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
      ],
      twelfth_class: [
        { id: 0, subject: 'Geografia', notes: generateNotes() },
        { id: 1, subject: 'Educação Física', notes: generateNotes() },
        { id: 2, subject: 'História', notes: generateNotes() },
        { id: 3, subject: 'Matemática', notes: generateNotes() },
        { id: 4, subject: 'Biologia', notes: generateNotes() },
        { id: 5, subject: 'Química', notes: generateNotes() },
        { id: 6, subject: 'Literatura', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
    },
  },
  {
    userName: 'Pedro Santos Jorge Gomes',
    email: 'pedro.santos@email.com',
    password: 'senha123456',
    userType: 'normal',
    details: [
      { id: 0, detailType: 'Nº', content: '11969' },
      { id: 1, detailType: 'Classe: ', content: '10ª' },
      { id: 2, detailType: 'Curso: ', content: 'Engenharia' },
      { id: 3, detailType: 'Turno: ', content: 'Noite' },
    ],
    grades: {
      tenth_class: [
        { id: 0, subject: 'Matemática', notes: generateNotes() },
        { id: 1, subject: 'História', notes: generateNotes() },
        { id: 2, subject: 'Química', notes: generateNotes() },
        { id: 3, subject: 'Física', notes: generateNotes() },
        { id: 4, subject: 'Arte', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
      eleventh_class: [
        { id: 0, subject: 'Física', notes: generateNotes() },
        { id: 1, subject: 'Química', notes: generateNotes() },
        { id: 2, subject: 'Matemática', notes: generateNotes() },
        { id: 3, subject: 'Biologia', notes: generateNotes() },
        { id: 4, subject: 'História', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
      ],
      twelfth_class: [
        { id: 0, subject: 'Geografia', notes: generateNotes() },
        { id: 1, subject: 'Educação Física', notes: generateNotes() },
        { id: 2, subject: 'História', notes: generateNotes() },
        { id: 3, subject: 'Matemática', notes: generateNotes() },
        { id: 4, subject: 'Biologia', notes: generateNotes() },
        { id: 5, subject: 'Química', notes: generateNotes() },
        { id: 6, subject: 'Literatura', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
    },
  },
  {
    userName: 'Ana Costa Da Silva',
    email: 'ana.costa@email.com',
    password: 'minhaSenha789',
    userType: 'bolseiro',
    details: [
      { id: 0, detailType: 'Nº', content: '11970' },
      { id: 1, detailType: 'Classe: ', content: '12ª' },
      { id: 2, detailType: 'Curso: ', content: 'Matemática' },
      { id: 3, detailType: 'Turno: ', content: 'Manhã' },
    ],
    grades: {
      tenth_class: [
        { id: 0, subject: 'Matemática', notes: generateNotes() },
        { id: 1, subject: 'História', notes: generateNotes() },
        { id: 2, subject: 'Química', notes: generateNotes() },
        { id: 3, subject: 'Física', notes: generateNotes() },
        { id: 4, subject: 'Arte', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
      eleventh_class: [
        { id: 0, subject: 'Física', notes: generateNotes() },
        { id: 1, subject: 'Química', notes: generateNotes() },
        { id: 2, subject: 'Matemática', notes: generateNotes() },
        { id: 3, subject: 'Biologia', notes: generateNotes() },
        { id: 4, subject: 'História', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
      ],
      twelfth_class: [
        { id: 0, subject: 'Geografia', notes: generateNotes() },
        { id: 1, subject: 'Educação Física', notes: generateNotes() },
        { id: 2, subject: 'História', notes: generateNotes() },
        { id: 3, subject: 'Matemática', notes: generateNotes() },
        { id: 4, subject: 'Biologia', notes: generateNotes() },
        { id: 5, subject: 'Química', notes: generateNotes() },
        { id: 6, subject: 'Literatura', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
    },
  },
  {
    userName: 'Carlos Lima Santiago',
    email: 'carlos.lima@email.com',
    password: 'senhaSecreta321',
    userType: 'normal',
    details: [
      { id: 0, detailType: 'Nº', content: '11971' },
      { id: 1, detailType: 'Classe: ', content: '11ª' },
      { id: 2, detailType: 'Curso: ', content: 'Física' },
      { id: 3, detailType: 'Turno: ', content: 'Tarde' },
    ],
    grades: {
      tenth_class: [
        { id: 0, subject: 'Matemática', notes: generateNotes() },
        { id: 1, subject: 'História', notes: generateNotes() },
        { id: 2, subject: 'Química', notes: generateNotes() },
        { id: 3, subject: 'Física', notes: generateNotes() },
        { id: 4, subject: 'Arte', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
      eleventh_class: [
        { id: 0, subject: 'Física', notes: generateNotes() },
        { id: 1, subject: 'Química', notes: generateNotes() },
        { id: 2, subject: 'Matemática', notes: generateNotes() },
        { id: 3, subject: 'Biologia', notes: generateNotes() },
        { id: 4, subject: 'História', notes: generateNotes() },
        { id: 5, subject: 'Geografia', notes: generateNotes() },
        { id: 6, subject: 'Educação Física', notes: generateNotes() },
      ],
      twelfth_class: [
        { id: 0, subject: 'Geografia', notes: generateNotes() },
        { id: 1, subject: 'Educação Física', notes: generateNotes() },
        { id: 2, subject: 'História', notes: generateNotes() },
        { id: 3, subject: 'Matemática', notes: generateNotes() },
        { id: 4, subject: 'Biologia', notes: generateNotes() },
        { id: 5, subject: 'Química', notes: generateNotes() },
        { id: 6, subject: 'Literatura', notes: generateNotes() },
        { id: 7, subject: 'Sociologia', notes: generateNotes() },
      ],
    },
  },
]

export { FAKEUSERS }

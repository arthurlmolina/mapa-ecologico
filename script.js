const icones = {
  red: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  green: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  blue: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  orange: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}


const map = L.map('map').setView([-23.420999, -51.933056], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
/*CORES DOS MARCADORES: 
 VERDE: COLETA DE RECICLÁVEIS
 VERMELHO:DESCARTE DE LIXO ELETRÔNICO
 AZUL: DOAÇÃO DE ROUPAS
 LARANJA: PARADAS DE ÔNIBUS ELÉTRICOS
*/
const pontos = [
  //COLETA COLETA DE RECICLÁVEIS
  {
    nome: "Maringá Park Shopping",
    endereco: "Av. São Paulo, 1099 - Zona 01, 87013-040",
    horario: "10:00 - 22:00 (Domingo 12:00 - 22:00)",
    tipo: "COLETA DE RECICLÁVEIS",
    coordenadas: [ -23.422320097083347, -51.93288196011299 ],
    cor: "green"
  },
  {
    nome: "Terminal Intermodal Urbano de Maringá",
    endereco: "Av. Adv Horacio Raccanello Filho, 667 - Zona 7, 87020-035",
    horario: " Segunda a Sábado 5:30 - 23:45 (Domingo 6:30 - 23:45)",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [-23.418218597108552, -51.93814551963553],
    cor: "green"
  },
  {
    nome: "Praça Dep. Renato Celidônio",
    endereco: "Praça Dep. Renato Celidônio - Zona 01, 87013-220",
    horario: "Praça pública",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.424459241703406, -51.93849647763585 ],
    cor: "green"
  },
  
  {
    nome: "Eurogarden",
    endereco: "Eurogarden - Zona 8, 87051-091",
    horario: "Espaço público",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.43919065667356, -51.90449753312733],
    cor: "green"
  },
  {
    nome: "Parque Alfredo Werner Nyffeller",
    endereco: "R. Bogotá, 755 - Vila Morangueira, 87040-120",
    horario: "06:00 - 20:30",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.413015517021794, -51.91838160224895 ],
    cor: "green"
  },
  {
    nome: "Cemitério Municipal de Maringá",
    endereco: "Av, R. Ver. Primo Monteschio, 435 - Zona 02, 87010-440",
    horario: "08:00 - 18:00",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.438062588965067, -51.93123076196329 ],
    cor: "green"
  },
  
  {
    nome: "UPA Zona Sul",
    endereco: "Av. Arquiteto Nildo Ribeiro da Rocha, 865 - Jardim Higienópolis, 87053-270",
    horario: "Aberto 24 horas",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.451780169912286, -51.92416183312701 ],
    cor: "green"
  },

  //DESCARTE DE LIXO ELETRÔNICO
  {
    nome: "Maringá Park Shopping",
    endereco: "Av. São Paulo, 1099 - Zona 01, 87013-040",
    horario: "10:00 - 22:00 (Domingo 12:00 - 22:00)",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [-23.422411 , -51.932598],
    cor: "red"
  },
  {
    nome: "Paço Municipal Silvio Magalhães Barros",
    endereco: "Av. XV de Novembro, 701 - Zona 01, 87013-230",
    horario: "08:00 - 11:30, 13:00 - 17:00 (Sábado e Domingo fechado)",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [ -23.424248492593772, -51.939265537585285],
    cor: "red"
  },
  {
    nome: "Faculdade Maringá",
    endereco: "Av. Prudente de Morais, 815 - Zona Armazem, 87020-010 ",
    horario: "07:00 - 23:00 (Sábado e Domingo fechado)",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [ -23.416332293740833, -51.94093457545659],
    cor: "red"
  },
  {
    nome: "Polícia Militar de Maringá - 4º Batalhão",
    endereco: "R. Mitsuzo Taguchi, 99 - Vila Nova, 87045-110",
    horario: " Segunda a sexta 08:00 - 17:30 (exceto quarta 08:00 - 12:00) (Sábado e Domingo fechado)",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [-23.424577108462714, -51.90738906196376],
    cor: "red"
  },
  {
    nome: "Câmara Municipal de Maringá",
    endereco: "Av. Papa João XXIII, 239 - Zona 2, 87010-260",
    horario: "08:00 - 18:00 (Sábado e Domingo fechado)",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [-23.427556158154495, -51.937927177307024 ],
    cor: "red"
  },
  {
    nome: "Tiro de Guerra 05-009",
    endereco: "Av. Mandacaru, 730 - Zona 06, Maringá - PR, 87080-000",
    horario: "Aberto 24 horas",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [ -23.407933078526256, -51.95586724045021],
    cor: "red"
  },


  R. Ana Neri, 1073 - Jardim Alvorada, Maringá - PR, 87035-260
  //PONTO DE ÔNIBUS ELÉTRICO
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas : [ , ],
    cor: " "
  },
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas: [ , ],
    cor: " "
  },
  
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas: [ , ],
    cor: " "
  },
  //DOAÇÃO DE ROUPAS
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas: [ , ],
    cor: " "
  },
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas: [ , ],
    cor: " "
  },
  
  {
    nome: " ",
    endereco: " ",
    horario: " ",
    tipo: " ",
    coordenadas: [ , ],
    cor: " "
  },

]
pontos.forEach(ponto => {
  const marcador = L.marker(ponto.coordenadas, {
    icon: icones[ponto.cor] || icones.blue // fallback se cor não existir
  }).addTo(map);
  //cria o pop up do marcador
  marcador.bindPopup(`
    <strong>${ponto.nome}</strong><br>
    <em>${ponto.tipo}</em><br>
    ${ponto.endereco}<br>
    <strong>${ponto.horario}</strong>
  `);
});
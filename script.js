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
  {
    nome: "UPA Zona Norte",
    endereco: "R. Ana Neri, 1073 - Jardim Alvorada, 87035-260",
    horario: "Aberto 24 horas",
    tipo: "COLETA DE RECICLÁVEIS (ECOLIX)",
    coordenadas: [ -23.39537819753158, -51.91327500075375 ],
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
    endereco: "Av. Mandacaru, 730 - Zona 06, 87080-000",
    horario: "Aberto 24 horas",
    tipo: "DESCARTE DE LIXO ELETRONICO",
    coordenadas: [ -23.407933078526256, -51.95586724045021],
    cor: "red"
  },

  //PONTO DE ÔNIBUS ELÉTRICO
  {
    nome: "Linha 169 JD. Alvorada (Terminal ↔ Bairro)",
    endereco: `
    <strong>🟠 Sentido: Para o Terminal</strong><br>
    Início no JD. Alvorada, fim no Terminal Intermodal<br>
    Paradas: Rua Malvino Gardin, R. Guarino A. Basseto, Estrada Acopiara, Av. Pedro Taques (vários trechos), Av. Roosevelt, Av. Mauá<br>
    Duração média: 24 minutos<br><br>

    <strong>🟠 Sentido: Para o Bairro</strong><br>
    Início no Terminal Intermodal, fim no JD. Alvorada<br>
    Paradas: Terminal (Plataforma 2), Av. Mauá (Shopping), Av. Pedro Taques, Praça Ary de Lima, Av. Roosevelt, R. Nilo Cairo, R. Malvino Gardin<br>
    Duração média: 21 minutos
      `,
    horario: `
    <strong>🕒 Horários:</strong><br>

    <strong>➡️ Sentido Terminal:</strong><br>
    Seg a Sex: 06:15 - 22:50<br>
    Sábado: 06:00 - 23:00<br>
    Domingo: 06:45 - 23:00<br><br>

    <strong>⬅️ Sentido Bairro:</strong><br>
    Seg a Sex: 06:50 - 23:30<br>
    Sábado: 06:30 - 23:30<br>
    Domingo: 07:30 - 23:30
      `,
    tipo: "PARADA DE ÔNIBUS ELÉTRICO (LINHA 169)",
    coordenadas: [-23.418218597108552, -51.93814551963553],
    cor: "orange"
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
    nome: "Albergue Santa Luiza de Marillac",
    endereco: "R. Fernão Dias, 840 - Zona 09 - 87014-000 ",
    horario: "Aberto 24 horas / 7 dias por semana ",
    tipo: "DOAÇÃO DE ROUPAS",
    coordenadas: [ -23.418764099517908, -51.951443865242545],
    cor: "blue"
  },
  {
    nome: "Lar Preservação da Vida",
    endereco: "Endereço: R. Pioneiro Alberto Biazón, 637 - Vila Marumby - 87005-310 ",
    horario: "Segunda a sexta: 08:00 - 17:00 (Sábado e Domingo fechado)",
    tipo: "DOAÇÃO DE ROUPAS",
    coordenadas: [ -23.448443379268465, -51.926147471164455 ],
    cor: "blue"
  },
  
  {
    nome: "Loja da Solidariedade",
    endereco: " Av. Brasil, 5620 - Zona 05 - 87015-280",
    horario: "Segunda a sexta: 11:00 - 18:00 / Sábado: 09:00 - 13:00 (Domingo fechado)",
    tipo: "DOAÇÃO DE ROUPAS ",
    coordenadas: [ -23.423259731873994, -51.95642641379679 ],
    cor: "blue"
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
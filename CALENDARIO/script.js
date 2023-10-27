var dt = new Date();

function RenderDate() {

    dt.setDate(1);
    var day = dt.getDay();
    
    console.log(dt.getDay())
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    console.log(endDate);
    
    var prevDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    var today = new Date();
    console.log(today);
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //console.log(months[dt.getMonth()]);
    document.getElementById('month').innerHTML = months[dt.getMonth()]
    
    var cells = '';
    
    for ( x = day; x > 0; x--) {
        cells += "<div class='prev_date' >" + (prevDate - x) + "</div>";   
    }
    
    for (let i = 1; i <= endDate; i++) {
        if ( i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    
    
    document.getElementsByClassName('days-year')[0].innerHTML = cells;
    
}

RenderDate();

function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);

    } else if (para == 'next'){
        dt.setMonth(dt.getMonth() + 1);

    }
    RenderDate();
}

function date() {

    var now = new Date();
    var hoje = 'hoje';
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    dates = [' ', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st', '32nd'];
    

    month = now.getMonth();
    day = now.getDate();
    year = now.getFullYear();
 
    document.getElementById('date_str').innerHTML =  'Day: ' + months[month] + ' ' + dates[day] + ''+ ', ' + year;
 
 };
 
 date();


 function mostrarHora() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const horaFormatada = `${hora}:${minutos}:${segundos}`;
    document.getElementById('horaAtual').textContent = `Hora Atual: ${horaFormatada}`;
  }

  // Associar a função ao evento de clique do botão
  document.getElementById('mostrarHora').addEventListener('click', mostrarHora);





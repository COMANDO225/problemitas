
const timeConversion = (s) => {
    let hora = s.slice(0,2);
    let minutos = s.slice(3,5);
    let segundos = s.slice(6,8);
    let horario = s.slice(8,10);

    horario === "AM" && hora === "12" 
    ? hora = "00" 
    : hora
    horario === "PM" && hora < 12 
    ? hora = parseInt(hora) + 12 
    : hora;

    return `${hora}:${minutos}:${segundos}`;
}

console.log(timeConversion("09:45:00PM"));
console.log(timeConversion("01:05:45PM"));
console.log(timeConversion("10:05:54PM"));
console.log(timeConversion("00:05:45PM"));

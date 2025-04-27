const matrixRows = 5;
const matrixCols = 3;
const blockedSeatCount = 3;

const seatContainer = document.getElementById('seatContainer');
const matrixDisplay = document.getElementById('matrixDisplay');
const blockedSeatsDisplay = document.getElementById('blockedSeatsDisplay');
const bookedCountDisplay = document.getElementById('bookedCount');

matrixDisplay.textContent = `${matrixRows} x ${matrixCols}`;
blockedSeatsDisplay.textContent = blockedSeatCount;

let bookedCount = 0;
const totalSeats = matrixRows * matrixCols;

let blockedSeats = [];

while (blockedSeats.length < blockedSeatCount) {
  const randomSeat = Math.floor(Math.random() * totalSeats);
  if (!blockedSeats.includes(randomSeat)) {
    blockedSeats.push(randomSeat);
  }
}

for (let i = 0; i < totalSeats; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');

  if (blockedSeats.includes(i)) {
    seat.classList.add('blocked');
  } else {
    seat.addEventListener('click', function() {
      seat.classList.toggle('booked');
      if (seat.classList.contains('booked')) {
        bookedCount++;
      } else {
        bookedCount--;
      }
      bookedCountDisplay.textContent = bookedCount;
    });
  }

  seatContainer.appendChild(seat);
}
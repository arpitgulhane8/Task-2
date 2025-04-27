const seatContainer = document.getElementById('seatContainer');
const matrixDisplay = document.getElementById('matrixDisplay');
const blockedSeatsDisplay = document.getElementById('blockedSeatsDisplay');
const bookedCountDisplay = document.getElementById('bookedCount');
const footer = document.getElementById('footer');
const matrixInfo = document.getElementById('matrixInfo');

const generateBtn = document.getElementById('generateBtn');
const rowsInput = document.getElementById('rowsInput');
const colsInput = document.getElementById('colsInput');
const blockedInput = document.getElementById('blockedInput');

let bookedCount = 0;

generateBtn.addEventListener('click', () => {
  seatContainer.innerHTML = "";
  bookedCount = 0;
  bookedCountDisplay.textContent = bookedCount;

  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);
  const blockedSeatsCount = parseInt(blockedInput.value);

  if (isNaN(rows) || isNaN(cols) || isNaN(blockedSeatsCount) || rows <= 0 || cols <= 0 || blockedSeatsCount < 0) {
    alert('Please enter valid numbers!');
    return;
  }

  const totalSeats = rows * cols;

  if (blockedSeatsCount > totalSeats) {
    alert('Blocked seats cannot be more than total seats!');
    return;
  }

  matrixDisplay.textContent = `${rows} x ${cols}`;
  blockedSeatsDisplay.textContent = blockedSeatsCount;

  matrixInfo.style.display = 'block';
  footer.style.display = 'flex';

  seatContainer.style.gridTemplateColumns = `repeat(${cols}, 40px)`;

  let blockedSeats = [];

  while (blockedSeats.length < blockedSeatsCount) {
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
});
let bookedCount = 0;
let totalSeats = 0;
let blockedSeats = [];

function generateSeats() {
  const matrixInput = document.getElementById('matrixInput').value.trim();
  const blockedInput = parseInt(document.getElementById('blockedInput').value.trim());
  const seatContainer = document.getElementById('seatContainer');
  const bookedCountSpan = document.getElementById('bookedCount');

  seatContainer.innerHTML = '';
  bookedCount = 0;
  bookedCountSpan.textContent = bookedCount;

  // Validate Matrix Input
  const matrixMatch = matrixInput.match(/^(\d+)\s*[xX]\s*(\d+)$/);
  if (!matrixMatch) {
    alert('Matrix input must be in NxM format, e.g., 5x3');
    return;
  }

  const rows = parseInt(matrixMatch[1]);
  const cols = parseInt(matrixMatch[2]);
  totalSeats = rows * cols;

  if (blockedInput > totalSeats) {
    alert('Blocked seats cannot exceed total seats.');
    return;
  }

  // Set Grid Template
  seatContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;

  // Generate random blocked seats
  blockedSeats = [];
  while (blockedSeats.length < blockedInput) {
    const randomSeat = Math.floor(Math.random() * totalSeats);
    if (!blockedSeats.includes(randomSeat)) {
      blockedSeats.push(randomSeat);
    }
  }

  // Create seats
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
        bookedCountSpan.textContent = bookedCount;
      });
    }

    seatContainer.appendChild(seat);
  }
}

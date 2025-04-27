let bookedCount = 0;
const bookedCountSpan = document.getElementById('bookedCount');
const seatContainer = document.getElementById('seatContainer');

const rows = 5;
const cols = 5;
const totalSeats = rows * cols;
const numberOfBlockedSeats = 5; // You can change this number if you want more/less blocked

let blockedSeats = [];

// Randomly generate blocked seats
while (blockedSeats.length < numberOfBlockedSeats) {
  const randomSeat = Math.floor(Math.random() * totalSeats);
  if (!blockedSeats.includes(randomSeat)) {
    blockedSeats.push(randomSeat);
  }
}

// Create seat grid
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
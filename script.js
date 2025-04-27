const matrixInput = document.getElementById('matrixInput');

const blockedInput = document.getElementById('blockedInput');

const generateBtn = document.getElementById('generateBtn');

const seatContainer = document.getElementById('seatContainer');

const bookedCount = document.getElementById('bookedCount');

let totalSeats = 0;

let blockedSeatsSet = new Set();

let bookedSeats = 0;

generateBtn.addEventListener('click', () => {

    const matrixValue = matrixInput.value.trim();

    const blockedValue = parseInt(blockedInput.value);

    if (!/^\d+x\d+$/i.test(matrixValue)) {

        alert("Matrix format should be like '5x3'");

        return;

    }

    const [rows, cols] = matrixValue.toLowerCase().split('x').map(Number);

    totalSeats = rows * cols;

    if (isNaN(blockedValue) || blockedValue < 0 || blockedValue > totalSeats) {

        alert("Blocked seats must be a number between 0 and total seats.");

        return;

    }

    seatContainer.innerHTML = '';

    seatContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;

    blockedSeatsSet.clear();

    bookedSeats = 0;

    bookedCount.value = bookedSeats;

    // Randomly select blocked seats

    while (blockedSeatsSet.size < blockedValue) {

        const randomSeat = Math.floor(Math.random() * totalSeats);

        blockedSeatsSet.add(randomSeat);

    }

    for (let i = 0; i < totalSeats; i++) {

        const seat = document.createElement('div');

        seat.classList.add('seat');

        if (blockedSeatsSet.has(i)) {

            seat.classList.add('blocked');

        } else {

            seat.addEventListener('click', () => {

                if (seat.classList.contains('booked')) {

                    seat.classList.remove('booked');

                    bookedSeats--;

                } else {

                    seat.classList.add('booked');

                    bookedSeats++;

                }

                bookedCount.value = bookedSeats;

            });

        }

        seatContainer.appendChild(seat);

    }

});

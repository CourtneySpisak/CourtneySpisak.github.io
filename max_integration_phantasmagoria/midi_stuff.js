
// Handle incoming MIDI CC messages
function onControlChange(e) {
  console.log("this be work")
  vals = e.value
  if (e.controller.number === 1) { // CC 1 for controlling X-axis rotation
    angleX = map(e.value, 0, 127, 0, TWO_PI);
  } else if (e.controller.number === 2) { // CC 2 for controlling Y-axis rotation
    angleY = map(e.value, 0, 127, 0, TWO_PI);
  }
}

// Handle incoming MIDI note messages (40-47)
function onNoteOn(e) {
if (e.note.number === 40) {
// Print both velocity and rawVelocity for debugging
console.log(`Velocity: ${e.velocity}, Raw Velocity: ${e.rawVelocity}`);

// Check if rawVelocity is available, otherwise multiply normalized velocity
let velocity = e.rawVelocity || e.velocity * 127;
velocities(velocity)
// Map the velocity to control box size
boxSize = map(velocity, 0, 127, 0, 500); // Adjust the range as needed

console.log(`Note On: ${e.note.name}${e.note.octave}, Velocity: ${velocity}, Box Size: ${boxSize}`);

}
}
  
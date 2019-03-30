
function addRoof() {
    let roof = document.getElementById('roof-id')
    roof.classList.contains('hidden') ? roof.classList.remove('hidden') : roof.classList.add('hidden')
}
function addWalls() {
    let walls = document.getElementById('walls-id')
    walls.classList.contains('hidden') ? walls.classList.remove('hidden') : walls.classList.add('hidden')
}
function addDoors() {
    let doors = document.getElementById('doors-id')
    doors.classList.contains('hidden') ? doors.classList.remove('hidden') : doors.classList.add('hidden')
}
function addWindows() {
    let windowLeft = document.getElementById('window-left')
    windowLeft.classList.contains('hidden') ? windowLeft.classList.remove('hidden') : windowLeft.classList.add('hidden')
    let windowRight = document.getElementById('window-right')
    windowRight.classList.contains('hidden') ? windowRight.classList.remove('hidden') : windowRight.classList.add('hidden')
}
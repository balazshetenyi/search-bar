document.getElementById('searchInput').addEventListener('keyup', function () {
    const filter = document.getElementById('searchInput').value.toUpperCase()

    const li = document.querySelectorAll('.name')

    for (let i = 0; i < li.length; i++) {
        const names = li[i].textContent || li[i].innerText

        if (names.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }
})
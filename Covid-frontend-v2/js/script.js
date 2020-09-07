let url = 'http://localhost:5000/'
let cases = []
let totalCases = 0
let totalRecovered = 0
let totalActive = 0
let totalDeaths = 0


window.onload = async() => {
    await allCases()
    await getTotalCases()
    await getTotalRecovered()
    await getTotalActive()
    await getTotalDeaths()
    document.querySelector('#total-cases').innerHTML = totalCases
    document.querySelector('#total-recovered').innerHTML = totalRecovered
    document.querySelector('#total-active').innerHTML = totalActive
    document.querySelector('#total-deaths').innerHTML = totalDeaths
    document.querySelector('#loading-bar').style.display = 'none'

    showData()
}

let showData = (currPage = 1, startIndex = 1) => {
    let tbody = document.querySelector('#tbd');

    for (let i = 0; i < cases.length; ++i) {
            let tr = tbody.appendChild(document.createElement('tr'));
            tr.setAttribute('class', 'ntr');
            tr.appendChild(document.createElement('td')).innerHTML = cases[i].Country_Region;
            tr.appendChild(document.createElement('td')).innerHTML = cases[i].Confirmed;
            tr.appendChild(document.createElement('td')).innerHTML = cases[i].Deaths;
            tr.appendChild(document.createElement('td')).innerHTML = cases[i].Recovered;
            tr.appendChild(document.createElement('td')).innerHTML = cases[i].Active;
    }
}


let allCases = () => {
    return fetch(url + 'cases')

        .then((response) => {
            return response.json()
        }).then((res) => {

            cases = res
        }).catch((err) => {
            console.log(err)
        })
}

let getTotalCases = () => {
    return fetch(url + 'total-cases')

        .then((response) => {
            return response.json();
        }).then((res) => {
            totalCases = res
        }).catch((err) => {
            console.log(err)
        })
}

let getTotalRecovered = () => {
    return fetch(url + 'total-recovered')

        .then((response) => {
            return response.json();
        }).then((res) => {
            totalRecovered = res
        }).catch((err) => {
            console.log(err)
        })
}
let getTotalActive = () => {
    return fetch(url + 'total-active')

        .then((response) => {
            return response.json();
        }).then((res) => {
            totalActive = res
        }).catch((err) => {
            console.log(err)
        })
}
let getTotalDeaths = () => {
    return fetch(url + 'total-deaths')
        .then((response) => {
            return response.json();
        }).then((res) => {
            totalDeaths = res
        }).catch((err) => {
            console.log(err)
        })
}
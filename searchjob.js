function searchJobs() {
    let input = document.getElementById('jobInput').value.toLowerCase();
    let jobs = document.getElementsByClassName('job');

    for (let i = 0; i < jobs.length; i++) {
        let title = jobs[i].getAttribute('data-title').toLowerCase();
        let location = jobs[i].getAttribute('data-location').toLowerCase();
        let company = jobs[i].getAttribute('data-company').toLowerCase();

        if (title.includes(input) || location.includes(input) || company.includes(input)) {
            jobs[i].style.display = 'block';
        } else {
            jobs[i].style.display = 'none';
        }
    }
}

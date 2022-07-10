/*
Hope Neels
CS 601 Term Project
video card component for Projects page
*/


// Demonstrating Vue components: Reusable video component
Vue.component('video-card', {
    // the individual properties passed in
    // props: ['title', 'url', 'git', 'description'],
    props: ['project'],
    // the script element with id video-template, which is stored in projects.html
    template: '#video-template'
})


// create the Vue instance in div id "app"
var app = new Vue({
    el: '#app',
    data: {
        projectArray: [],
    },
    // get projects data from JSON when the app is created
    created() {

        // getProjects() returns a promise so must wait for it to resolve
        getProjects()
            .then(data => {
                // set data property projectArray to the JSON array
                this.projectArray = data;
            });
    }
})

// makes API request for projects and converts the response to a JSON object
async function getProjects() {

    // the whole promise chain is wrapped in a try in case any other errors are thrown
    try {

        // get project data from local file and check for response status
        const projectData = await fetch("./projects.json")
            .then(response => {

                // throw a new error if the response code is not 200
                if (response.status != 200) {
                    throw new Error(`invalid response code ${response.status}`);
                }
                // parse the response to JSON
                return response.json();
            })

        return projectData;
    }

    // catch the error thrown above for invalid response code (or any other error)
    catch (error) {

        // if some error retrieving from Projects API, write friendly error message to DOM
        let alert = document.createElement("div");
        alert.className = "warning";
        alert.innerHTML = `Sorry, there was a problem retrieving the data: ${error.message}.`;
        document.querySelector("#app").appendChild(alert);
    }
}

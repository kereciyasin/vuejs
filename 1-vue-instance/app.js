const app = Vue.createApp({ 
    data() {
        return {
            title: 'The Final Empire', 
            content: 'The Final Empire is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy. The book is set in a dark fantasy world on a planet called Scadrial, where the sun is red, plants are brown, and the ground is constantly being covered under black volcanic ashfalls. The story follows Vin, a street urchin who discovers her magical abilities and joins a group of',
            youtube :{
                url : "https://www.youtube.com/?hl=TR",
                target: "_blank",
                context: "Please, for Youtube",
                alt: "bootcmap youtube",
            },
            owner: "Brandon Sanderson", 
        };
    },
    methods: {
        changeTitle(){
            alert();
        }
    }
 }).mount('#app');  // mount the app to the div with id app   
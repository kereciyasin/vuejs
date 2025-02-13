const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      content:
        "The Final Empire is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy. The story follows Vin, a street urchin who discovers her magical abilities and joins a group of",
      youtube: {
        url: "https://www.youtube.com/?hl=TR",
        target: "_blank",
        context: "Please, for Youtube",
      },
      owner: "Brandon Sanderson",
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(event) {  
      console.log(event.x, event.y);   
    },
  },
}).mount("#app");

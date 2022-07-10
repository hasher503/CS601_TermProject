/*
Hope Neels
CS 601 Term Project
image gallery for Gallery page
all Vue
*/

var app = new Vue({
    el: '#app',
    data: {
        // array of image objects and their alt tags
        images: [
            {
                url: "images/gallery/img1.jpeg",
                alt: "sunset with snowy branches"
            },
            {
                url: "images/gallery/img2.jpeg",
                alt: "dandelions growing out of the sidewalk"
            },
            {
                url: "images/gallery/img3.jpeg",
                alt: "twin suspension bridges under blue sky"
            },
            {
                url: "images/gallery/img4.jpeg",
                alt: "view of the calm ocean over the side of a boat"
            },
            {
                url: "images/gallery/img5.jpeg",
                alt: "dusk over a lake from a porch"
            },
            {
                url: "images/gallery/img6.jpeg",
                alt: "man sitting on bench overlooking Hurricane Ridge"
            },
            {
                url: "images/gallery/img7.jpeg",
                alt: "a rocky beach on a cloudy day"
            },
            {
                url: "images/gallery/img8.jpeg",
                alt: "man standing on the end of a dock over a choppy lake"
            },
            {
                url: "images/gallery/img9.jpeg",
                alt: "a dark street at night with red TV tower in the distance"
            },
            {
                url: "images/gallery/img10.jpeg",
                alt: "clouds reflected in a wide glassy river with branches in foreground"
            },
            {
                url: "images/gallery/img11.jpeg",
                alt: "sunrise with pink clouds on a tree-lined street"
            },
            {
                url: "images/gallery/img12.jpeg",
                alt: "a stopsign and a tree with red leaves"
            },
            {
                url: "images/gallery/img13.jpeg",
                alt: "airplane sitting on the tarmac in front of an orange sunrise"
            },
            {
                url: "images/gallery/img14.jpeg",
                alt: "train and cars speeding under a freeway overpass"
            },
            {
                url: "images/gallery/img15.jpeg",
                alt: "pink sunset at the end of a dark street lined with cars"
            },
        ],
        // current place in image array, incrememented and decremented with methods
        current: 0,
        // whether large image slideshow is visible and thumbnail gallery is hidden
        showSlideshow: false,
        // whether mouse has been moving in past 5 seconds
        mouseMoving: true,

        // whether mouse is currently hovered over any of the three buttons
        mouseOnButton: false
    },

    methods: {
        // increase the current image index
        increment: function () {
            if (this.current < this.images.length - 1) {
                return this.current++;
            }
            // if end of the array: set current back to 0 to restart slideshow
            return this.current = 0;
        },

        // decrease the current image index
        decrement: function () {
            if (this.current > 0) {
                return this.current--;
            }
            // if beginning of the array: set current to index of last image to restart slideshow
            return this.current = this.images.length - 1;

        },
        // large image slideshow, starting with index of image that was clicked
        startSlideshow: function (index) {
            this.current = index;

            // setting this to true hides the thumbnail gallery and shows the large image slideshow
            this.showSlideshow = true;
        },

        // stop the slideshow
        stopSlideshow: function () {
            this.showSlideshow = false;
        },

        // set mouseMoving boolean to true or false
        mouseMove: function () {

            // if the mouse has started moving, set mouseMoving to true
            if (!this.mouseMoving) {
                this.mouseMoving = true;

                // else if mouse is not moving AND mouse is not on one of the buttons
            } else {
                setTimeout(() => {
                    this.mouseMoving = false;
                }, 3000);
            }

        },
        // set mouseOnButton property to true when mouse is on a button
        mouseEnterButton: function () {
            this.mouseOnButton = true;
        },
        // set mouseOnButton property to false when mouse leaves a button
        mouseLeaveButton: function () {
            this.mouseOnButton = false;
        }

    },

    computed: {
        // reactive property to update the image
        currentImage: function () {
            return this.images[this.current];
        },
        // reactive property to show or hide the image navigation buttons
        showButtons: function () {
            return (this.mouseMoving || this.mouseOnButton);
        }
    }
})

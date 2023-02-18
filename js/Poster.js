AFRAME.registerComponent("comic-posters", {
    init: function(){
        this.comicsContainer = this.el
        this.createPosters()
    },

    createPosters: function(){
        const thumbnailsRef = [
            {
                id: "avengers",
                title: "Avengers",
                url: "./assets/thumbnails/avengers.jpg"
            },
            {
                id: "ironman",
                title: "Ironman",
                url: "./assets/thumbnails/ironman.jpg"
            },
            {
                id: "spiderman",
                title: "Spiderman",
                url: "./assets/thumbnails/spiderman.jpg"
            },
            {
                id: "superman",
                title: "Superman",
                url: "./assets/thumbnails/superman.jpg"
            }
        ]

        let previousXPosition = -50

        for(var item of thumbnailsRef){
            const posX = previousXPosition + 20
            const posY = 10
            const posZ = -20
            const position = {x: posX, y: posY, z: posZ}

            previousXPosition = posX

            const borderEl = this.createBorder(position, item.id)

            const thumbnailsEl = this.createThumbnail(item)
            borderEl.appendChild(thumbnailsEl)

            //const titleEl = this.createTitle(position, item)
            //borderEl.appendChild(titleEl)

            this.comicsContainer.appendChild(borderEl)
        }
    },

    createBorder:  function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "box", 
            width: 16, 
            height: 19
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color: "white", opacity: 0.3})

        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "plane", 
            width: 15, 
            height: 18
        })
        entityEl.setAttribute("material", {src: item.url})

        return entityEl
    },

   /* createTitle: function(position, item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text", {
            font: "exo2bold", 
            align: "center", 
            width: 70, 
            value: item.title, 
            color: "#65827b"
        })
        const elPosition = position
        elPosition.y = 18
        elPosition.x = position.x - 10
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)

        return entityEl
    }*/
})
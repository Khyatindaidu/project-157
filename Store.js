AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "super-man",
          title: "Superman",
          url: "./assets/spm.png",
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/sm.png",
        },
  
        {
          id: "cap-aero",
          title: "Captain Aero",
          url: "./assets/aero.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./assets/os.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
     const thumbnail = this.createThumbnail(item)
     borderEl.appendChild(thumbnail)
      // Title Text Element
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
  
      }
  
    },
  
    createBorder:function(position, id){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('id',id)
        entityEl.setAttribute('visible', true)
        entityEl.setAttribute('geometry',{
          primitive:'plane',
          width: 22, 
          height: 44, 
        })
        entityEl.setAttribute('position', position)
        entityEl.setAttribute('material', {
          color: '#00bcd4',
          opacity: 0.4
        })
        return entityEl 
      },
    
    createThumbnail:function(item){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('visible', true)
      entityEl.setAttribute('geometry',{
        primitive: 'plane', 
        width: 20, 
        height: 18
      })
      entityEl.setAttribute('position', { x:0, y:5, z:0.1})
      entityEl.setAttribute('material', { src:item.url })
      return entityEl
    },
    createTitleEl: function (position, item){
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('text',{
        font:'exo2bold',
        align:'center',
        width:60, 
        color:'#e65100',
        value: item.title
  
      })
      const elposition = position
      elposition.y = -20
      entityEl.setAttribute('position', elposition)
      entityEl.setAttribute('visible', true)
      return entityEl
      
    }
  });
  
let bodyElement = document.querySelector('body')
let imageElement = document.createElement('div')

let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
       this.state = Math.round(Math.random())

    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           
        if (this.state === 0) {
          return "Heads"
        } else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.width = 100
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = './image/coinhead.jpg'
        } else {
            image.src = './image/coinback.jpg'
        }
        return image;
    }
};

function display20Flips() {
    for (value = 0; value < 20; value += 1) {
        let string = coin.toString()
        coin.flip();
        bodyElement.append(string);
        
    }
}
 display20Flips()

function display20Images() {
    for (index = 0; index< 20; index +=1) {
        let pic = coin.toHTML()
        coin.flip();
        bodyElement.append(imageElement)
        imageElement.append(pic)
        
    }
}
 display20Images()
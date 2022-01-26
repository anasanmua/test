class Live {
    constructor(ctx, gameSize, liveSize, imgArr) {
        this.ctx = ctx;
        this.gameSize = gameSize;
        this.liveSize = {
            h: liveSize,
            w: liveSize / 1.2,
        };
        this.imgArr = imgArr;
        this.livePos = {
            x: this.gameSize.w - this.liveSize.w,
            y: this.randomLocation(),
        };

        this.liveSpeed = 4;

        this.init();
    }

    init() {
        this.imageInstance = new Image();
        const imgName = this.randomImages();
        this.imageInstance.src = `../images/${imgName}`;
    }

    randomLocation() {
        //  return Math.floor(Math.random() * (max - min + 1) + min)
        return Math.floor(Math.random() * ((this.gameSize.h - this.liveSize.h) - 151) + 150)

    }

    randomImages() {
        let i = Math.floor(Math.random() * this.imgArr.length);
        return this.imgArr[i];
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.livePos.x,
            this.livePos.y,
            80,
            80
        );
        this.move();
    }

    move() {
        this.livePos.x -= this.liveSpeed;
    }
}
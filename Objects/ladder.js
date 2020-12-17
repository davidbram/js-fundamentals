// run on chrome


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() { //run
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
    }
};

ladder.up().up().down().showStep();
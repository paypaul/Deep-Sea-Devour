class gfx {
    /**
     * Creates a 2d canvas graphics wrapper to simplify draw calls and add chainability
     * @constructor
     * @param {HTMLCanvasElement} canvas 
     * @param {Object} options 
     * @param {Number} options.width
     * @param {Number} options.height
     */
    constructor( canvas, options ) {
        // Store properties
        /*
            Note: options object width and height properties should be optional,
            but no method for getting width and height is created yet
        */
        this.canvas = canvas;
        this.width = options.width;
        this.height = options.height;

        // Create a drawing context with an opaque background
        this.ctx = canvas.getContext("2d",{
            alpha:false
        });
    }

    /**
     * Saves the state of the canvas
     * @returns {gfx}
     */
    save() {
        this.ctx.save();
        return this;
    }

    /**
     * Restores the state of the canvas
     * @returns {gfx}
     */
    restore() {
        this.ctx.restore();
        return this;
    }
}
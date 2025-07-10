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

    /**
     * Pass thru function to CanvasRenderingContext2d.arc
     * @param  {...any} args 
     * @returns {gfx}
     */
    arc( ...args ) {
        this.ctx.arc.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.arcTo
     * @param  {...any} args 
     * @returns {gfx}
     */
    arcTo( ...args ) {
        this.ctx.arcTo.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.beginPath
     * @returns {gfx}
     */
    beginPath() {
        this.ctx.beginPath();
        return this;
    }
    
    /**
     * Pass thru function to CanvasRenderingContext2d.bezierCurveTo
     * @param  {...any} args 
     * @returns {gfx}
     */
    bezierCurveTo( ...args ) {
        this.ctx.bezierCurveTo.apply( this.ctx, args );
        return this;
    }

    /**
     * Clears a portion of the canvas or the entire canvas if no arguments are passed.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @returns {gfx}
     */
    clearRect( x, y, width, height ) {
        // Clear the entire canvas if no arguments are passed
        if( x === undefined) {
            x = 0;
            y = 0;
            width = this.width;
            height = this.height;
        }

        this.ctx.clearRect( x, y, width, height );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.clip
     * @param  {...any} args 
     * @returns {gfx}
     */
    clip( ...args ) {
        this.ctx.clip.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.closePath
     * @returns {gfx}
     */
    closePath() {
        this.ctx.closePath();
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.createConicGradient
     * @param  {...any} args 
     * @returns {CanvasGradient}
     */
    createConicGradient( ...args ) {
        return this.ctx.createConicGradient.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.createImageData
     * @param  {...any} args 
     * @returns {ImageData}
     */
    createImageData( ...args) {
        return this.ctx.createImageData.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.createLinearGradient
     * @param  {...any} args 
     * @returns {CanvasGradient}
     */
    createLinearGradient( ...args ) {
        return this.ctx.createLinearGradient.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.createPattern
     * @param  {...any} args 
     * @returns {CanvasPattern}
     */
    createPattern( ...args ) {
        return this.ctx.createPattern.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.createRadialGradient
     * @param  {...any} args 
     * @returns {CanvasGradient}
     */
    createRadialGradient( ...args ) {
        return this.ctx.createRadialGradient.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.drawFocusIfNeeded
     * @param  {...any} args 
     * @returns {gfx}
     */
    drawFocusIfNeeded( ...args ) {
        this.ctx.drawFocusIfNeeded.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.drawImage
     * @param  {...any} args 
     * @returns {gfx}
     */
    drawImage( ...args ) {
        this.ctx.drawImage.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.ellipse
     * @param  {...any} args 
     * @returns {gfx}
     */
    ellipse( ...args ) {
        this.ctx.ellipse.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.fill
     * @param  {...any} args 
     * @returns {gfx}
     */
    fill( ...args ) {
        this.ctx.fills.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.fillRect
     * @param  {...any} args 
     * @returns {gfx}
     */
    fillRect( ...args ) {
        this.ctx.fillRect.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.fillText
     * @param  {...any} args 
     * @returns {gfx}
     */
    fillText( ...args ) {
        this.ctx.fillText.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.getContextAttributes
     * @returns {CanvasRenderingContext2DSettings}
     */
    getContextAttributes() {
        return this.ctx.getContextAttributes();
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.getImageData
     * @param  {...any} args 
     * @returns {ImageData}
     */
    getImageData( ...args ) {
        return this.ctx.getImageData.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.getLineDash
     * @returns {Array}
     */
    getLineDash() {
        return this.ctx.getLineDash();
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.getTransform
     * @returns {DOMMatrix}
     */
    getTransform() {
        return this.ctx.getTransform();
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.isContextLost
     * @returns {Boolean}
     */
    isContextLost() {
        return this.ctx.isContextLost();
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.isPointInPath
     * @param  {...any} args 
     * @returns {Boolean}
     */
    isPointInPath( ...args ) {
        return this.ctx.isPointInPath.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.isPointInStroke
     * @param  {...any} args 
     * @returns {Boolean}
     */
    isPointInStroke( ...args ) {
        return this.ctx.isPointInStroke.apply( this.ctx, args );
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.lineTo
     * @param {Number} x 
     * @param {Number} y 
     * @returns {gfx}
     */
    lineTo( x, y ) {
        this.ctx.lineTo( x, y );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.measureText
     * @param {String} text 
     * @returns {TextMetrics}
     */
    measureText( text ) {
        return this.ctx.measureText(text);
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.moveTo
     * @param {Number} x 
     * @param {Number} y 
     * @returns {gfx}
     */
    moveTo( x, y ) {
        this.ctx.moveTo( x, y );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.putImageData
     * @param  {...any} args 
     * @returns {gfx}
     */
    putImageData( ...args ) {
        this.ctx.putImageData.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.quadraticCurveTo
     * @param  {...any} args 
     * @returns {gfx}
     */
    quadraticCurveTo( ...args ) {
        this.ctx.quadraticCurveTo.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.rect
     * @param  {...any} args 
     * @returns {gfx}
     */
    rect( ...args ) {
        this.ctx.rect.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.reset
     * @returns {gfx}
     */
    reset() {
        this.ctx.reset();
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.resetTransform
     * @returns {gfx}
     */
    resetTransform() {
        this.ctx.resetTransform();
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.restore
     * @returns {gfx}
     */
    restore() {
        this.ctx.restore();
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.rotate
     * @param {Number} angle 
     * @returns {gfx} 
     */
    rotate(angle) {
        this.ctx.rotate(angle);
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.roundRect
     * @param  {...any} args 
     * @returns {gfx}
     */
    roundRect( ...args ) {
        this.ctx.roundRect.apply( this, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.scale
     * @param {Number} x 
     * @param {Number} y 
     * @returns {gfx}
     */
    scale( x, y ) {
        this.ctx.scale( x, y );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.setLineDash
     * @param {Array} segments 
     * @returns {gfx}
     */
    setLineDash( segments ) {
        this.ctx.setLineDash( segments );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.setTransform
     * @param  {...any} args 
     * @returns {gfx}
     */
    setTransform( ...args ) {
        this.ctx.setTransform.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.stroke
     * @param  {...any} args 
     * @returns {gfx}
     */
    stroke( ...args ) {
        this.ctx.stroke.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.strokeRect
     * @param  {...any} args 
     * @returns {gfx}
     */
    strokeRect( ...args ) {
        this.ctx.strokeRect.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.strokeText
     * @param  {...any} args 
     * @returns {gfx}
     */
    strokeText( ...args ) {
        this.ctx.strokeText.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.transform
     * @param  {...any} args 
     * @returns {gfx}
     */
    transform( ...args ) {
        this.ctx.transform.apply( this.ctx, args );
        return this;
    }

    /**
     * Pass thru function to CanvasRenderingContext2d.translate
     * @param {Number} x 
     * @param {Number} y 
     * @returns {gfx}
     */
    translate( x, y ) {
        this.ctx.translate( x, y );
        return this;
    }
}
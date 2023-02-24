/**
 * Default configuration for the Darken library.
 *
 * @type {Object}
 */

export default {
    /**
     * Enable or disable the library.
     *
     * @type {Boolean}
     * @default true
     */
    enabled: true,

    /**
     * Target elements to darken.
     *
     * @type {String}
     * @default 'body'
     */
    target: 'body',


    /**
     * The amount of darkness to apply.
     *
     * @type {Number}
     * @default 0.5
     */
    darkness: 0.5,


    /**
     * Classes to apply to the elements.
     *
     * @type {String}
     * @default { target: 'darken', active: 'darken-active', include: 'darken-include', exclude: 'darken-exclude' }
     */
    classes: {
        target: 'darken',
        active: 'darken-active',
        include: 'darken-include',
        exclude: 'darken-exclude'
    }


    /**
     * I
     */

}
/**
 * @class draw2d.shape.icon.Skype

 * See the example:
 *
 *     @example preview small frame
 *
 *     let icon =  new draw2d.shape.icon.Skype();
 *
 *     canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
import draw2d from '../../packages'

draw2d.shape.icon.Skype = draw2d.shape.icon.Icon.extend({
  NAME: "draw2d.shape.icon.Skype",

  /**
   *
   * @constructs
   * Creates a new icon element which are not assigned to any canvas.
   *
   * @param {Object} attr the configuration of the shape
   */
  init: function (attr, setter, getter) {
    this._super(extend({width: 50, height: 50}, attr), setter, getter)
  },

  /**
   * @private
   * @returns
   */
  createSet: function () {
    return this.canvas.paper.path("M28.777,18.438c0.209-0.948,0.318-1.934,0.318-2.944c0-7.578-6.144-13.722-13.724-13.722c-0.799,0-1.584,0.069-2.346,0.2C11.801,1.199,10.35,0.75,8.793,0.75c-4.395,0-7.958,3.562-7.958,7.958c0,1.47,0.399,2.845,1.094,4.024c-0.183,0.893-0.277,1.814-0.277,2.76c0,7.58,6.144,13.723,13.722,13.723c0.859,0,1.699-0.078,2.515-0.23c1.119,0.604,2.399,0.945,3.762,0.945c4.395,0,7.957-3.562,7.957-7.959C29.605,20.701,29.309,19.502,28.777,18.438zM22.412,22.051c-0.635,0.898-1.573,1.609-2.789,2.115c-1.203,0.5-2.646,0.754-4.287,0.754c-1.971,0-3.624-0.346-4.914-1.031C9.5,23.391,8.74,22.717,8.163,21.885c-0.583-0.842-0.879-1.676-0.879-2.479c0-0.503,0.192-0.939,0.573-1.296c0.375-0.354,0.857-0.532,1.432-0.532c0.471,0,0.878,0.141,1.209,0.422c0.315,0.269,0.586,0.662,0.805,1.174c0.242,0.558,0.508,1.027,0.788,1.397c0.269,0.355,0.656,0.656,1.151,0.89c0.497,0.235,1.168,0.354,1.992,0.354c1.135,0,2.064-0.241,2.764-0.721c0.684-0.465,1.016-1.025,1.016-1.711c0-0.543-0.173-0.969-0.529-1.303c-0.373-0.348-0.865-0.621-1.465-0.807c-0.623-0.195-1.47-0.404-2.518-0.623c-1.424-0.306-2.634-0.668-3.596-1.076c-0.984-0.419-1.777-1-2.357-1.727c-0.59-0.736-0.889-1.662-0.889-2.75c0-1.036,0.314-1.971,0.933-2.776c0.613-0.8,1.51-1.423,2.663-1.849c1.139-0.422,2.494-0.635,4.027-0.635c1.225,0,2.303,0.141,3.201,0.421c0.904,0.282,1.668,0.662,2.267,1.13c0.604,0.472,1.054,0.977,1.335,1.5c0.284,0.529,0.43,1.057,0.43,1.565c0,0.49-0.189,0.937-0.563,1.324c-0.375,0.391-0.851,0.589-1.408,0.589c-0.509,0-0.905-0.124-1.183-0.369c-0.258-0.227-0.523-0.58-0.819-1.09c-0.342-0.65-0.756-1.162-1.229-1.523c-0.463-0.351-1.232-0.529-2.292-0.529c-0.984,0-1.784,0.197-2.379,0.588c-0.572,0.375-0.85,0.805-0.85,1.314c0,0.312,0.09,0.574,0.273,0.799c0.195,0.238,0.471,0.447,0.818,0.621c0.36,0.182,0.732,0.326,1.104,0.429c0.382,0.106,1.021,0.263,1.899,0.466c1.11,0.238,2.131,0.506,3.034,0.793c0.913,0.293,1.703,0.654,2.348,1.072c0.656,0.429,1.178,0.979,1.547,1.635c0.369,0.658,0.558,1.471,0.558,2.416C23.371,20.119,23.049,21.148,22.412,22.051z")
  }
})


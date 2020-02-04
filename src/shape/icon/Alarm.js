/**
 * @class draw2d.shape.icon.Alarm

 * See the example:
 *
 *     @example preview small frame
 *
 *     let icon =  new draw2d.shape.icon.Alarm();
 *
 *     canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
import draw2d from '../../packages'

draw2d.shape.icon.Alarm = draw2d.shape.icon.Icon.extend({
  NAME: "draw2d.shape.icon.Alarm",

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
    return this.canvas.paper.path("M8.179,20.115c-0.478,0.277-0.642,0.889-0.365,1.366c0.275,0.479,0.889,0.642,1.365,0.366c0.479-0.275,0.643-0.888,0.367-1.367C9.27,20.004,8.658,19.84,8.179,20.115zM9.18,12.239c-0.479-0.276-1.09-0.112-1.366,0.366s-0.111,1.09,0.365,1.366c0.479,0.276,1.09,0.113,1.367-0.366C9.821,13.126,9.657,12.516,9.18,12.239zM8.625,17.043c-0.001-0.552-0.448-0.999-1.001-1c-0.553,0-1,0.448-1,1c0,0.553,0.449,1,1,1C8.176,18.043,8.624,17.596,8.625,17.043zM16.312,3.957V3.031h1c0.275,0,0.5-0.225,0.5-0.5v-0.5c0-0.275-0.225-0.5-0.5-0.5h-3.625c-0.275,0-0.5,0.225-0.5,0.5v0.5c0,0.275,0.225,0.5,0.5,0.5h1v0.926C7.819,4.381,2.376,10.068,2.374,17.042C2.376,24.291,8.251,30.166,15.5,30.169c7.249-0.003,13.124-5.878,13.125-13.127C28.624,10.067,23.181,4.38,16.312,3.957zM15.5,27.166C9.909,27.157,5.385,22.633,5.375,17.042C5.385,11.451,9.909,6.927,15.5,6.917c5.59,0.01,10.115,4.535,10.124,10.125C25.615,22.633,21.091,27.157,15.5,27.166zM12.062,22.998c-0.478-0.275-1.089-0.111-1.366,0.367c-0.275,0.479-0.111,1.09,0.366,1.365c0.478,0.277,1.091,0.111,1.365-0.365C12.704,23.887,12.54,23.275,12.062,22.998zM12.062,11.088c0.479-0.276,0.642-0.888,0.366-1.366c-0.276-0.478-0.888-0.642-1.366-0.366s-0.642,0.888-0.366,1.366C10.973,11.2,11.584,11.364,12.062,11.088zM22.822,13.971c0.478-0.275,0.643-0.888,0.366-1.366c-0.275-0.478-0.89-0.642-1.366-0.366c-0.479,0.278-0.642,0.89-0.366,1.367C21.732,14.083,22.344,14.247,22.822,13.971zM15.501,23.92c-0.552,0-1,0.447-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C16.501,24.367,16.053,23.92,15.501,23.92zM19.938,9.355c-0.477-0.276-1.091-0.111-1.365,0.366c-0.275,0.48-0.111,1.091,0.366,1.367s1.089,0.112,1.366-0.366C20.581,10.245,20.418,9.632,19.938,9.355zM23.378,16.042c-0.554,0.002-1.001,0.45-1.001,1c0.001,0.552,0.448,1,1.001,1c0.551,0,1-0.447,1-1C24.378,16.492,23.929,16.042,23.378,16.042zM22.823,20.115c-0.48-0.275-1.092-0.111-1.367,0.365c-0.275,0.479-0.112,1.091,0.367,1.367c0.477,0.275,1.089,0.112,1.365-0.366C23.464,21.004,23.3,20.391,22.823,20.115zM15.501,8.167c-0.552,0-1,0.448-1,1l-0.466,7.343l-3.004,1.96c-0.478,0.277-0.642,0.889-0.365,1.366c0.275,0.479,0.889,0.642,1.365,0.366l3.305-1.676c0.055,0.006,0.109,0.017,0.166,0.017c0.828,0,1.5-0.672,1.5-1.5l-0.5-7.876C16.501,8.614,16.053,8.167,15.501,8.167zM18.939,22.998c-0.479,0.276-0.643,0.888-0.366,1.367c0.275,0.477,0.888,0.642,1.366,0.365c0.478-0.276,0.642-0.889,0.366-1.365C20.028,22.886,19.417,22.723,18.939,22.998zM11.197,3.593c-0.836-1.04-2.103-1.718-3.541-1.718c-2.52,0-4.562,2.042-4.562,4.562c0,0.957,0.297,1.843,0.8,2.576C5.649,6.484,8.206,4.553,11.197,3.593zM27.106,9.014c0.503-0.733,0.8-1.619,0.8-2.576c0-2.52-2.043-4.562-4.562-4.562c-1.438,0-2.704,0.678-3.541,1.717C22.794,4.553,25.351,6.484,27.106,9.014z")
  }
})


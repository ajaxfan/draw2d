/**
 * @class draw2d.policy.figure.SlimSelectionFeedbackPolicy
 * Add only very small resize handles to the figure.
 *
 *
 * See the example:
 *
 *     @example preview small frame
 *       circle =new draw2d.shape.basic.Circle();
 *       circle.installEditPolicy(new draw2d.policy.SlimSelectionFeedbackPolicy());
 *       canvas.add(circle,90,50);
 *
 *       canvas.add(new draw2d.shape.basic.Label({text:"Click on the circle to see the selection feedback"}),20,10);
 *
 * @author Andreas Herz
 * @extends draw2d.policy.figure.RectangleSelectionFeedbackPolicy
 */
import draw2d from '../../packages'

draw2d.policy.figure.SlimSelectionFeedbackPolicy = draw2d.policy.figure.RectangleSelectionFeedbackPolicy.extend({

  NAME: "draw2d.policy.figure.SlimSelectionFeedbackPolicy",

  /**
   * @constructs
   * Creates a new Router object
   */
  init: function (attr, setter, getter) {
    this._super(attr, setter, getter)
  },


  createResizeHandle: function (owner, type) {
    return new draw2d.ResizeHandle({owner: owner, type: type, width: 6, height: 6, radius: 0})
  }
})



/**
 *
 * @private
 */
/**
 * Primary package containing general interfaces and implementation classes.
 * @namespace draw2d */
export default {
  /**
   * Types representing or manipulating geometric values, such as Points, Rectangles, etc.
   * @namespace draw2d.geo
   * */
  geo: {},

  /** @namespace draw2d.io */
  io: {
    /** @namespace draw2d.io.json
     * */
    json: {},
    /** @namespace draw2d.io.png */
    png: {},
    /** @namespace draw2d.io.svg */
    svg: {}
  },

  /** @namespace draw2d.util */
  util: {
    /** @namespace draw2d.util.spline */
    spline: {}
  },

  /**
   * This package contains EditPolicy implementations for all used elements. A *EditPolicy*
   * is a pluggable contribution implementing a portion of an element behavior. Editpolicies contribute to the
   * overall editing behavior of an EditPart.
   *
   * Editing behavior is defined as one or more of the following:
   *  - Selection handling
   *  - Routing
   *  - Feedback management
   *  - Delegation and Forwarding of commands
   *  - Drag&Drop behaviour
   *
   * @namespace draw2d.policy
   * */
  policy: {
    /**
     * Editpolicies for selection handling, highlighting, background rendering, snapTo behaviour.
     *
     * @namespace draw2d.policy.canvas
     * */
    canvas: {},
    /** @namespace draw2d.policy.connection */
    connection: {},
    /** @namespace draw2d.policy.line */
    line: {},
    /** @namespace draw2d.policy.port */
    port: {},
    /** @namespace draw2d.policy.figure */
    figure: {}
  },

  /** @namespace draw2d.shape */
  shape: {
    /** @namespace draw2d.shape.basic */
    basic: {},
    /** @namespace draw2d.shape.dimetric */
    dimetric: {},
    /** @namespace draw2d.shape.composite */
    composite: {},
    /** @namespace draw2d.shape.arrow */
    arrow: {},
    /** @namespace draw2d.shape.node */
    node: {},
    /** @namespace draw2d.shape.note */
    note: {},
    /** @namespace draw2d.shape.diagram */
    diagram: {},
    /** @namespace draw2d.shape.flowchart */
    flowchart: {},
    /** @namespace draw2d.shape.analog */
    analog: {},
    /** @namespace draw2d.shape.icon */
    icon: {},
    /** @namespace draw2d.shape.layout */
    layout: {},
    /** @namespace draw2d.shape.pert */
    pert: {},
    /** @namespace draw2d.shape.state */
    state: {},
    /** @namespace draw2d.shape.widget */
    widget: {}
  },

  /** @namespace draw2d.command */
  command: {},

  /** @namespace draw2d.decoration */
  decoration: {
    /** @namespace draw2d.decoration.connection */
    connection: {}
  },

  /** @namespace draw2d.layout */
  layout: {
    /** @namespace draw2d.layout.connection
     *  @memberof draw2d.layout
     * */
    connection: {},
    /** @namespace draw2d.layout.anchor */
    anchor: {},
    /** @namespace draw2d.layout.mesh */
    mesh: {},
    /** @namespace draw2d.layout.locator */
    locator: {}
  },

  /** @namespace draw2d.ui */
  ui: {},

  isTouchDevice: (
    //Detect iPhone
    (navigator.platform.indexOf("iPhone") != -1) ||
    //Detect iPod
    (navigator.platform.indexOf("iPod") != -1) ||
    //Detect iPad
    (navigator.platform.indexOf("iPad") != -1)
  )

}




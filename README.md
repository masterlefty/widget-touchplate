# com-chilipeppr-widget-touchplate
This widget helps you use a touch plate to create your Z zero offset.

![alt text](screenshot.png "Screenshot")

## ChiliPeppr Widget / touchplate

All ChiliPeppr widgets/elements are defined using cpdefine() which is a method
that mimics require.js. Each defined object must have a unique ID so it does
not conflict with other ChiliPeppr widgets.

| Item                  | Value           |
| -------------         | ------------- | 
| ID                    | com-chilipeppr-widget-touchplate |
| Name                  | Widget / touchplate |
| Description           | This widget helps you use a touch plate to create your Z zero offset. |
| chilipeppr.load() URL | http://raw.githubusercontent.com/masterlefty/widget-touchplate/master/auto-generated-widget.html |
| Edit URL              | http://ide.c9.io/masterlefty/widget-touchplate |
| Github URL            | http://github.com/masterlefty/widget-touchplate |
| Test URL              | https://preview.c9users.io/masterlefty/widget-touchplate/widget.html |

## Example Code for chilipeppr.load() Statement

You can use the code below as a starting point for instantiating this widget 
inside a workspace or from another widget. The key is that you need to load 
your widget inlined into a div so the DOM can parse your HTML, CSS, and 
Javascript. Then you use cprequire() to find your widget's Javascript and get 
back the instance of it.

```javascript
// Inject new div to contain widget or use an existing div with an ID
$("body").append('<' + 'div id="myDivWidgetTouchplate"><' + '/div>');

chilipeppr.load(
  "#myDivWidgetTouchplate",
  "http://raw.githubusercontent.com/masterlefty/widget-touchplate/master/auto-generated-widget.html",
  function() {
    // Callback after widget loaded into #myDivWidgetTouchplate
    // Now use require.js to get reference to instantiated widget
    cprequire(
      ["inline:com-chilipeppr-widget-touchplate"], // the id you gave your widget
      function(myObjWidgetTouchplate) {
        // Callback that is passed reference to the newly loaded widget
        console.log("Widget / touchplate just got loaded.", myObjWidgetTouchplate);
        myObjWidgetTouchplate.init();
      }
    );
  }
);

```

## Publish

This widget/element publishes the following signals. These signals are owned by this widget/element and are published to all objects inside the ChiliPeppr environment that listen to them via the 
chilipeppr.subscribe(signal, callback) method. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-pub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>/com-chilipeppr-widget-touchplate/onExampleGenerate</td><td>Example: Publish this signal when we go to generate gcode.</td></tr>    
      </tbody>
  </table>

## Subscribe

This widget/element subscribes to the following signals. These signals are owned by this widget/element. Other objects inside the ChiliPeppr environment can publish to these signals via the chilipeppr.publish(signal, data) method. 
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-sub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Publish

This widget/element publishes to the following signals that are owned by other objects. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignpub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Subscribe

This widget/element publishes to the following signals that are owned by other objects.
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignsub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Methods / Properties

The table below shows, in order, the methods and properties inside the widget/element.

  <table id="com-chilipeppr-elem-methodsprops" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Method / Property</th>
              <th>Type</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>id</td><td>string</td><td>"com-chilipeppr-widget-touchplate"<br><br>The ID of the widget. You must define this and make it unique.</td></tr><tr valign="top"><td>name</td><td>string</td><td>"Widget / touchplate"</td></tr><tr valign="top"><td>desc</td><td>string</td><td>"This widget helps you use a touch plate to create your Z zero offset."</td></tr><tr valign="top"><td>url</td><td>string</td><td>"http://raw.githubusercontent.com/masterlefty/widget-touchplate/master/auto-generated-widget.html"</td></tr><tr valign="top"><td>fiddleurl</td><td>string</td><td>"http://ide.c9.io/masterlefty/widget-touchplate"</td></tr><tr valign="top"><td>githuburl</td><td>string</td><td>"http://github.com/masterlefty/widget-touchplate"</td></tr><tr valign="top"><td>testurl</td><td>string</td><td>"http://widget-touchplate-masterlefty.c9users.io/widget.html"</td></tr><tr valign="top"><td>publish</td><td>object</td><td>Please see docs above.<br><br>Define the publish signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>subscribe</td><td>object</td><td>Please see docs above.<br><br>Define the subscribe signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>foreignPublish</td><td>object</td><td>Please see docs above.<br><br>Document the foreign publish signals, i.e. signals owned by other widgets
or elements, that this widget/element publishes to.</td></tr><tr valign="top"><td>foreignSubscribe</td><td>object</td><td>Please see docs above.<br><br>Document the foreign subscribe signals, i.e. signals owned by other widgets
or elements, that this widget/element subscribes to.</td></tr><tr valign="top"><td>isInitted</td><td>boolean</td><td>All widgets should have an init method. It should be run by the
instantiating code like a workspace or a different widget.</td></tr><tr valign="top"><td>init</td><td>function</td><td>function () </td></tr><tr valign="top"><td>audio</td><td>object</td><td></td></tr><tr valign="top"><td>camera</td><td>object</td><td></td></tr><tr valign="top"><td>scene</td><td>object</td><td></td></tr><tr valign="top"><td>renderer</td><td>object</td><td></td></tr><tr valign="top"><td>scripts</td><td>object</td><td></td></tr><tr valign="top"><td>dom</td><td>undefined</td><td></td></tr><tr valign="top"><td>width</td><td>number</td><td></td></tr><tr valign="top"><td>height</td><td>number</td><td></td></tr><tr valign="top"><td>touchplate</td><td>object</td><td></td></tr><tr valign="top"><td>spindle</td><td>object</td><td></td></tr><tr valign="top"><td>light</td><td>object</td><td></td></tr><tr valign="top"><td>init3d</td><td>function</td><td>function () </td></tr><tr valign="top"><td>setSize</td><td>function</td><td>function ( width, height ) </td></tr><tr valign="top"><td>introAnim</td><td>function</td><td>function () </td></tr><tr valign="top"><td>deltax</td><td>object</td><td></td></tr><tr valign="top"><td>deltay</td><td>object</td><td></td></tr><tr valign="top"><td>deltafov</td><td>object</td><td></td></tr><tr valign="top"><td>curV</td><td>object</td><td></td></tr><tr valign="top"><td>curFov</td><td>object</td><td></td></tr><tr valign="top"><td>curStep</td><td>object</td><td></td></tr><tr valign="top"><td>steps</td><td>object</td><td></td></tr><tr valign="top"><td>introAnimStep</td><td>function</td><td>function () </td></tr><tr valign="top"><td>request</td><td>object</td><td></td></tr><tr valign="top"><td>animate</td><td>function</td><td>function ( time ) </td></tr><tr valign="top"><td>setCamera</td><td>function</td><td>function ( value ) </td></tr><tr valign="top"><td>gcodeCtr</td><td>number</td><td>animInfinite call</td></tr><tr valign="top"><td>isRunning</td><td>boolean</td><td></td></tr><tr valign="top"><td>onRun</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>isAnimInfiniteRunning</td><td>boolean</td><td></td></tr><tr valign="top"><td>animInfiniteCallback</td><td>object</td><td></td></tr><tr valign="top"><td>animInfiniteStart</td><td>function</td><td>function () </td></tr><tr valign="top"><td>animInfiniteEnd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>animInfinite</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onAfterProbeDone</td><td>function</td><td>function (probeData) </td></tr><tr valign="top"><td>watchForProbeStart</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onRecvLineForProbe</td><td>function</td><td>function (data) </td></tr><tr valign="top"><td>watchForProbeEnd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>dispatch</td><td>function</td><td>function ( array, event ) </td></tr><tr valign="top"><td>btnSetup</td><td>function</td><td>function () <br><br>Call this method from init to setup all the buttons when this widget
is first loaded. This basically attaches click events to your 
buttons. It also turns on all the bootstrap popovers by scanning
the entire DOM of the widget.</td></tr><tr valign="top"><td>options</td><td>object</td><td>User options are available in this property for reference by your
methods. If any change is made on these options, please call
saveOptionsLocalStorage()</td></tr><tr valign="top"><td>setupUiFromLocalStorage</td><td>function</td><td>function () <br><br>Call this method on init to setup the UI by reading the user's
stored settings from localStorage and then adjust the UI to reflect
what the user wants.</td></tr><tr valign="top"><td>saveOptionsLocalStorage</td><td>function</td><td>function () <br><br>When a user changes a value that is stored as an option setting, you
should call this method immediately so that on next load the value
is correctly set.</td></tr><tr valign="top"><td>onresize</td><td>function</td><td>function () </td></tr><tr valign="top"><td>showBody</td><td>function</td><td>function (evt) <br><br>Show the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>hideBody</td><td>function</td><td>function (evt) <br><br>Hide the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>isHidden</td><td>boolean</td><td></td></tr><tr valign="top"><td>unactivateWidget</td><td>function</td><td>function () </td></tr><tr valign="top"><td>activateWidget</td><td>function</td><td>function () </td></tr><tr valign="top"><td>statusEl</td><td>object</td><td></td></tr><tr valign="top"><td>status</td><td>function</td><td>function (txt) </td></tr><tr valign="top"><td>forkSetup</td><td>function</td><td>function () <br><br>This method loads the pubsubviewer widget which attaches to our 
upper right corner triangle menu and generates 3 menu items like
Pubsub Viewer, View Standalone, and Fork Widget. It also enables
the modal dialog that shows the documentation for this widget.<br><br>By using chilipeppr.load() we can ensure that the pubsubviewer widget
is only loaded and inlined once into the final ChiliPeppr workspace.
We are given back a reference to the instantiated singleton so its
not instantiated more than once. Then we call it's attachTo method
which creates the full pulldown menu for us and attaches the click
events.</td></tr><tr valign="top"><td>threeObj</td><td>object</td><td></td></tr>
      </tbody>
  </table>


## About ChiliPeppr

[ChiliPeppr](http://chilipeppr.com) is a hardware fiddle, meaning it is a 
website that lets you easily
create a workspace to fiddle with your hardware from software. ChiliPeppr provides
a [Serial Port JSON Server](https://github.com/johnlauer/serial-port-json-server) 
that you run locally on your computer, or remotely on another computer, to connect to 
the serial port of your hardware like an Arduino or other microcontroller.

You then create a workspace at ChiliPeppr.com that connects to your hardware 
by starting from scratch or forking somebody else's
workspace that is close to what you are after. Then you write widgets in
Javascript that interact with your hardware by forking the base template 
widget or forking another widget that
is similar to what you are trying to build.

ChiliPeppr is massively capable such that the workspaces for 
[TinyG](http://chilipeppr.com/tinyg) and [Grbl](http://chilipeppr.com/grbl) CNC 
controllers have become full-fledged CNC machine management software used by
tens of thousands.

ChiliPeppr has inspired many people in the hardware/software world to use the
browser and Javascript as the foundation for interacting with hardware. The
Arduino team in Italy caught wind of ChiliPeppr and now
ChiliPeppr's Serial Port JSON Server is the basis for the 
[Arduino's new web IDE](https://create.arduino.cc/). If the Arduino team is excited about building on top
of ChiliPeppr, what
will you build on top of it?


/* global requirejs cprequire cpdefine chilipeppr THREE scene camera */
// Defining the globals above helps Cloud9 not show warnings for those variables

// ChiliPeppr Widget/Element Javascript

requirejs.config({
    /*
    Dependencies can be defined here. ChiliPeppr uses require.js so
    please refer to http://requirejs.org/docs/api.html for info.
    
    Most widgets will not need to define Javascript dependencies.
    
    Make sure all URLs are https and http accessible. Try to use URLs
    that start with // rather than http:// or https:// so they simply
    use whatever method the main page uses.
    
    Also, please make sure you are not loading dependencies from different
    URLs that other widgets may already load like jquery, bootstrap,
    three.js, etc.
    
    You may slingshot content through ChiliPeppr's proxy URL if you desire
    to enable SSL for non-SSL URL's. ChiliPeppr's SSL URL is
    https://i2dcui.appspot.com which is the SSL equivalent for
    http://chilipeppr.com
    */
    paths: {
        // Example of how to define the key (you make up the key) and the URL
        // Make sure you DO NOT put the .js at the end of the URL
        // SmoothieCharts: '//smoothiecharts.org/smoothie',
        // Three: 'http://thireejs.org/build/three.min',
        Three: '//i2dcui.appspot.com/geturl?url=http://threejs.org/build/three.min',
        ThreeTextGeometry: '//i2dcui.appspot.com/js/three/TextGeometry',
        ThreeFontUtils: '//i2dcui.appspot.com/js/three/FontUtils',
        ThreeDetector: '//i2dcui.appspot.com/geturl?url=http://threejs.org/examples/js/Detector',
        ThreeTrackballControls: '//i2dcui.appspot.com/geturl?url=http://threejs.org/examples/js/controls/TrackballControls',
        ThreeOrbitControls: '//threejs.org/examples/js/controls/OrbitControls',
        ThreeHelvetiker: '//i2dcui.appspot.com/js/three/threehelvetiker',
        ThreeTypeface: 'https://superi.googlecode.com/svn-history/r1953/trunk/MBrand/MBrand/Scripts/typeface-0.15',
        ThreeTween: '//i2dcui.appspot.com/js/three/tween.min',
        ThreeBufferGeometryUtils: '//i2dcui.appspot.com/js/three/BufferGeometryUtils'

    },
    shim: {
        // See require.js docs for how to define dependencies that
        // should be loaded before your script/widget.
        ThreeTextGeometry: ['Three'],
        ThreeFontUtils: ['Three', 'ThreeTextGeometry'],
        ThreeHelvetiker: ['Three', 'ThreeTextGeometry', 'ThreeFontUtils'],
        ThreeTrackballControls: ['Three'],
        ThreeTween: ['Three'],
        ThreeSparks: ['Three'],
        ThreeParticle: ['Three'],
        ThreeBufferGeometryUtils: ['Three']
    }
});

cprequire_test(["inline:com-chilipeppr-widget-touchplate"], function(myWidget) {

    // Test this element. This code is auto-removed by the chilipeppr.load()
    // when using this widget in production. So use the cpquire_test to do things
    // you only want to have happen during testing, like loading other widgets or
    // doing unit tests. Don't remove end_test at the end or auto-remove will fail.

    // Please note that if you are working on multiple widgets at the same time
    // you may need to use the ?forcerefresh=true technique in the URL of
    // your test widget to force the underlying chilipeppr.load() statements
    // to referesh the cache. For example, if you are working on an Add-On
    // widget to the Eagle BRD widget, but also working on the Eagle BRD widget
    // at the same time you will have to make ample use of this technique to
    // get changes to load correctly. If you keep wondering why you're not seeing
    // your changes, try ?forcerefresh=true as a get parameter in your URL.

    console.log("test running of " + myWidget.id);

    $('body').prepend('<div id="testDivForFlashMessageWidget"></div>');

    chilipeppr.load(
        "#testDivForFlashMessageWidget",
        "http://fiddle.jshell.net/chilipeppr/90698kax/show/light/",
        function() {
            console.log("mycallback got called after loading flash msg module");
            cprequire(["inline:com-chilipeppr-elem-flashmsg"], function(fm) {
                //console.log("inside require of " + fm.id);
                fm.init();
            });
    });
    
    
    chilipeppr.load("#test-serial-port", "http://fiddle.jshell.net/chilipeppr/vetj5fvx/show/light/",

    function () {
        cprequire(
        ["inline:com-chilipeppr-widget-serialport"],

        function (sp) {
            sp.setSingleSelectMode();
            sp.init(null, "tinyg");
            //sp.consoleToggle();
        });
    });
    
    // tinyg widget test load
    chilipeppr.load("#test-tinyg", "http://fiddle.jshell.net/chilipeppr/XxEBZ/show/light/",

    function () {
        cprequire(
        ["inline:com-chilipeppr-widget-tinyg"],

        function (tinyg) {
            tinyg.init();
        });
    });
    
    // axes widget test load
    chilipeppr.load(
        "#test-axes",
        "http://fiddle.jshell.net/chilipeppr/gh45j/show/light/",

    function () {
        cprequire(
        ["inline:com-chilipeppr-widget-xyz"],

        function (xyz) {
            xyz.init();
        });
    });
    
    // Serial Port Console Log Window
    // http://jsfiddle.net/chilipeppr/JB2X7/
    // NEW VERSION http://jsfiddle.net/chilipeppr/rczajbx0/
    // The new version supports onQueue, onWrite, onComplete

    chilipeppr.load("#test-console",
        "http://fiddle.jshell.net/chilipeppr/rczajbx0/show/light/",

    function () {
        cprequire(
        ["inline:com-chilipeppr-widget-spconsole"],

        function (spc) {
            // pass in regular expression filter as 2nd parameter
            // to enable filter button and clean up how much
            // data is shown
            spc.init(true, /^{/);
            
        });
    });
    

    // init my widget
    myWidget.init();
    $('#' + myWidget.id).css('margin', '10px');
    $('title').html(myWidget.name);

} /*end_test*/ );

// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:com-chilipeppr-widget-touchplate", ["chilipeppr_ready", 'Three',/* other dependencies here */ ], function() {
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "com-chilipeppr-widget-touchplate", // Make the id the same as the cpdefine id
        name: "Widget / touchplate", // The descriptive name of your widget.
        desc: "This widget helps you use a touch plate to create your Z zero offset.", // A description of what your widget does
        url: "(auto fill by runme.js)",       // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
        fiddleurl: "(auto fill by runme.js)", // The edit URL. This can be auto-filled by runme.js in Cloud9 if you'd like, or just define it on your own to help people know where they can edit/fork your widget
        githuburl: "(auto fill by runme.js)", // The backing github repo
        // githuburl: "https://github.com/masterlefty/widget-touchplate", // The backing github repo
        testurl: "(auto fill by runme.js)",   // The standalone working widget so can view it working by itself
        /**
         * Define pubsub signals below. These are basically ChiliPeppr's event system.
         * ChiliPeppr uses amplify.js's pubsub system so please refer to docs at
         * http://amplifyjs.com/api/pubsub/
         */
        /**
         * Define the publish signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        publish: {
            // Define a key:value pair here as strings to document what signals you publish.
            '/onExampleGenerate': 'Example: Publish this signal when we go to generate gcode.'
        },
        /**
         * Define the subscribe signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        subscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // so other widgets can publish to this widget to have it do something.
            // '/onExampleConsume': 'Example: This widget subscribe to this signal so other widgets can send to us and we'll do something with it.'
        },
        /**
         * Document the foreign publish signals, i.e. signals owned by other widgets
         * or elements, that this widget/element publishes to.
         */
        foreignPublish: {
            // Define a key:value pair here as strings to document what signals you publish to
            // that are owned by foreign/other widgets.
            // '/jsonSend': 'Example: We send Gcode to the serial port widget to do stuff with the CNC controller.'
        },
        /**
         * Document the foreign subscribe signals, i.e. signals owned by other widgets
         * or elements, that this widget/element subscribes to.
         */
        foreignSubscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // that are owned by foreign/other widgets.
            // '/com-chilipeppr-elem-dragdrop/ondropped': 'Example: We subscribe to this signal at a higher priority to intercept the signal. We do not let it propagate by returning false.'
        },
        /**
         * All widgets should have an init method. It should be run by the
         * instantiating code like a workspace or a different widget.
         */

        isInitted: false, // keep track of our one-time init
        
        init: function() {
            console.log("I am being initted. Thanks.");

            this.setupUiFromLocalStorage();
            this.btnSetup();
            this.forkSetup();
            
        // scripting from current touchplate widget
            this.init3d();

            // load audio
            this.audio = new Audio('http://chilipeppr.com/audio/beep.wav');
            this.inInitted = true;

            // issue a resize later
            // issue resize event so other widgets can reflow
            $(window).trigger('resize');
        // end scripting from current touchplate widget

            console.log("I am done being initted.");
        },
        
    // scripting from current touchplate widget
        audio: null,
        // loader: new THREE.ObjectLoader(),
        camera: null, 
        scene: null, 
        renderer: null,
        scripts: {},
        dom: undefined,
        width: 500,
        height: 500,
        touchplate: null, // threejs group
        spindle: null, // threejs group
        light: null, // threejs light
        
        init3d: function() {
            
            // init the threejs stuff
            this.width = $('#' + this.id + ' .panel-body').width();
            this.height = 210;
            
            this.load(this.threeObj);
            console.log("scene width:", this.width, "height:", this.height);
            this.setSize(this.width, this.height);
            $('#' + this.id + ' .panel-body').prepend( this.dom );
            $(window).resize(this.onresize.bind(this));
            
            // setup run button
            $('#' + this.id + ' .btn-touchplaterun').click(this.onRun.bind(this));
            // run intro anim
            this.introAnim();
        },
        
        introAnim: function() {
            
            var v = this.spindle.position.clone();
            
            // start
            var startx = v.x - 5;
            var starty = v.y + 12;
            var startfov = 45;
            
            // end
            var endx = v.x - 5;
            var endy = v.y + 10;
            var endfov = this.camera.fov;
            
            this.steps = 50;
            this.deltax = (endx - startx) / this.steps;
            this.deltay = (endy - starty) / this.steps;
            this.deltafov = (endfov - startfov) / this.steps;
            
            this.camera.fov = startfov;
            this.camera.updateProjectionMatrix();
            
            v.x = startx;
            v.y = starty;
            
            this.curV = v;
            this.curFov = startfov;
            this.curStep = 0;
            
            this.camera.lookAt(this.curV);
            this.animate();
            
            setTimeout(this.introAnimStep.bind(this), 5);
        },
        
        deltax: null,
        deltay: null,
        deltafov: null,
        curV: null,
        curFov: null,
        curStep: null,
        steps: null,
        
        introAnimStep: function() {
            
            this.curStep++;
            
            this.curV.x += this.deltax;
            this.curV.y += this.deltay;
            this.curFov += this.deltafov;
            
            console.log("introAnimStep. this.curV:", this.curV, "curFov:", this.curFov);
            
            this.camera.lookAt(this.curV);
            this.camera.fov = this.curFov;
            this.camera.updateProjectionMatrix();
            this.animate();
            
            if (this.curStep < this.steps)
                setTimeout(this.introAnimStep.bind(this), 5);
        },
        
        /**
         * animInfinite call
         */
        
        
        gcodeCtr: 0,
        isRunning: false,
        
        onRun: function(evt) {
            // when user clicks the run button
            console.log("user clicked run button. evt:", evt);
            
            if (this.isRunning) {
                // we need to stop
                
                // fire off cancel to cnc
                var id = "tp" + this.gcodeCtr++;
                var gcode = "!\n";
                chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {Id: id, D: gcode});
                
                // swap button to stop
                $('#' + this.id + ' .btn-touchplaterun').removeClass("btn-danger").text("Run");
                
                // start animation showing spindle descending
                this.animInfiniteEnd();
                
                this.isRunning = false;
                
            } else {
                
                // we need to run the whole darn process
                this.isRunning = true;
                //this.audio.play();
                
                // swap button to stop
                $('#' + this.id + ' .btn-touchplaterun').addClass("btn-danger").text("Stop");
                
                // get user feedrate
                var fr = $('#' + this.id + ' .frprobe').val();
                
                // now start watching z
                this.watchForProbeStart();
                
                // send the probe command to start the movement
                var id = "tp" + this.gcodeCtr++;
                var gcode = "G21 G91 (Use mm and rel coords)\n";
                chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {Id: id, D: gcode});
                id = "tp" + this.gcodeCtr++;
                gcode = "G38.2 Z-20 F" + fr + "\n";
                chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {Id: id, D: gcode});
                
                
                // start animation showing spindle descending
                this.animInfiniteStart();
            }
        },
        
         isAnimInfiniteRunning: false,
        animInfiniteCallback: null,
        
        animInfiniteStart: function() {
            this.isAnimInfiniteRunning = true;
            this.animInfiniteCallback = setTimeout(this.animInfinite.bind(this), 10);
        },
        
        animInfiniteEnd: function() {
            this.isAnimInfiniteRunning = false;
        },
        
        animInfinite: function() {
            // move down the spindle
            console.log("about to move the spindle down. this.spindle.position:", this.spindle.position);
            this.spindle.position.setY(this.spindle.position.y - 0.3);
            if (this.spindle.position.y < -1) {
                this.spindle.position.setY(5);
            }
            // re-render
            this.animate();

            if (this.isAnimInfiniteRunning) {
                this.animInfiniteCallback = setTimeout(this.animInfinite.bind(this), 200);
            }

        },
        
        watchForProbeEnd: function() {
            chilipeppr.unsubscribe("/com-chilipeppr-widget-serialport/recvline", this, this.onRecvLineForProbe);
        },
        
        
        
        /**
         * Call this method from init to setup all the buttons when this widget
         * is first loaded. This basically attaches click events to your 
         * buttons. It also turns on all the bootstrap popovers by scanning
         * the entire DOM of the widget.
         */
        btnSetup: function() {

            // Chevron hide/show body
            var that = this;
            $('#' + this.id + ' .hidebody').click(function(evt) {
                console.log("hide/unhide body");
                if ($('#' + that.id + ' .panel-body').hasClass('hidden')) {
                    // it's hidden, unhide
                    that.showBody(evt);
                }
                else {
                    // hide
                    that.hideBody(evt);
                }
            });

            // Ask bootstrap to scan all the buttons in the widget to turn
            // on popover menus
            $('#' + this.id + ' .btn').popover({
                delay: 1000,
                animation: true,
                placement: "auto",
                trigger: "hover",
                container: 'body'
            });

        },

        /**
         * User options are available in this property for reference by your
         * methods. If any change is made on these options, please call
         * saveOptionsLocalStorage()
         */
        options: null,
        /**
         * Call this method on init to setup the UI by reading the user's
         * stored settings from localStorage and then adjust the UI to reflect
         * what the user wants.
         */
        setupUiFromLocalStorage: function() {

            // Read vals from localStorage. Make sure to use a unique
            // key specific to this widget so as not to overwrite other
            // widgets' options. By using this.id as the prefix of the
            // key we're safe that this will be unique.

            // Feel free to add your own keys inside the options 
            // object for your own items

            var options = localStorage.getItem(this.id + '-options');

            if (options) {
                options = $.parseJSON(options);
                console.log("just evaled options: ", options);
            }
            else {
                options = {
                    showBody: true,
                    tabShowing: 1,
                    frprobe: 25,
                    heightplate: 1.75
                };
            }

            this.options = options;
            console.log("options:", options);

            // show/hide body
            if (options.showBody) {
                this.showBody();
            }
            else {
                this.hideBody();
            }
            
            // setup textboxes
            $('#' + this.id + ' .frprobe').val(this.options.frprobe);
            $('#' + this.id + ' .heightplate').val(this.options.heightplate);
            
            // attach onchange
            $('#' + this.id + ' input').change(this.saveOptionsLocalStorage.bind(this));
        },
        /**
         * When a user changes a value that is stored as an option setting, you
         * should call this method immediately so that on next load the value
         * is correctly set.
         */
        
        saveOptionsLocalStorage: function() {
            // You can add your own values to this.options to store them
            // along with some of the normal stuff like showBody
            
            // grab text values
            this.options.frprobe = $('#' + this.id + '.frprobe').val();
            this.options.heightplate = $('#' + this.id + '.heightplate').val();
            
            var options = this.options;

            var optionsStr = JSON.stringify(options);
            console.log("saving options:", options, "json.stringify:", optionsStr);
            // store settings to localStorage
            localStorage.setItem(this.id + '-options', optionsStr);
        },
        /**
         * Show the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        showBody: function(evt) {
            $('#' + this.id + ' .panel-body').removeClass('hidden');
            $('#' + this.id + ' .panel-footer').removeClass('hidden');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = true;
                this.saveOptionsLocalStorage();
            }
        },
        /**
         * Hide the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        hideBody: function(evt) {
            $('#' + this.id + ' .panel-body').addClass('hidden');
            $('#' + this.id + ' .panel-footer').addClass('hidden');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = false;
                this.saveOptionsLocalStorage();
            }
        },
        
        // scripting from current touchplate widget
        statusEl: null, // cache the status element in DOM
        
        status: function(txt) {
            
            console.log("status. txt:", txt);
            
            if (this.statusEl == null) this.statusEl = $('#' + this.id + '-status');
            var len = this.statusEl.val().length;
            if (len > 30000) {
                console.log("truncating status area text");
                this.statusEl.val(this.statusEl.val().substring(len-5000));
            }
            this.statusEl.val(this.statusEl.val() + txt + "\n");
            this.statusEl.scrollTop(this.statusEl[0].scrollHeight - this.statusEl.height()
            );
        },
        
        /**
         * This method loads the pubsubviewer widget which attaches to our 
         * upper right corner triangle menu and generates 3 menu items like
         * Pubsub Viewer, View Standalone, and Fork Widget. It also enables
         * the modal dialog that shows the documentation for this widget.
         * 
         * By using chilipeppr.load() we can ensure that the pubsubviewer widget
         * is only loaded and inlined once into the final ChiliPeppr workspace.
         * We are given back a reference to the instantiated singleton so its
         * not instantiated more than once. Then we call it's attachTo method
         * which creates the full pulldown menu for us and attaches the click
         * events.
         */
        forkSetup: function() {
            var topCssSelector = '#' + this.id;

            $(topCssSelector + ' .panel-title').popover({
                title: this.name,
                content: this.desc,
                html: true,
                delay: 200,
                animation: true,
                trigger: 'hover',
                placement: 'auto'
            });

            var that = this;
            chilipeppr.load("http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", function() {
                require(['inline:com-chilipeppr-elem-pubsubviewer'], function(pubsubviewer) {
                    pubsubviewer.attachTo($(topCssSelector + ' .panel-heading .dropdown-menu'), that);
                });
            });

        },
        
        //Three webGL object definitions
        threeObj: {
            "camera": {
                "metadata": {
                    "version": 4.3,
                    "type": "Object",
                    "generator": "ObjectExporter"
                }, // end metadata
                "object": {
                    "uuid": "89F03B7D-AC02-43DF-848A-5771EB767F8C",
                    "type": "PerspectiveCamera",
                    "name": "Camera",
                    "fov": 25,
                    "aspect": 2.3550724637681157,
                    "near": 0.1,
                    "far": 100000,
                    "matrix": [1,0,0,0,0,1,-0.371,0,0,0.371,1,0,-3.414,37,61,1]
                } //end object line12
            }, //end camera
            "scene": {
                "metadata": {
                    "version": 4.3,
					"type": "Object",
					"generator": "ObjectExporter"
                }, //end metadata line 24
                "geometries": [
                    {
                        "uuid": "4601A1C8-537C-4551-BD1D-4C5AF434C3CB",
						"type": "PlaneGeometry",
						"width": 5000,
						"height": 5000,
						"widthSegments": 1,
						"heightSegments": 1
                    },
                    {
                        "uuid": "50DB6DF6-4923-441C-AE63-92D3A94EAEEC",
					    "type": "CylinderGeometry",
    					"radiusTop": 2,
	    				"radiusBottom": 2,
		    			"height": 10,
			    		"radialSegments": 32,
				    	"heightSegments": 1,
					    "openEnded": false
                    },
                    {
                        "uuid": "E52C9CE5-1054-4953-87BD-2CD5640D756E",
						"type": "CylinderGeometry",
						"radiusTop": 6,
						"radiusBottom": 4,
						"height": 2,
						"radialSegments": 32,
						"heightSegments": 1,
						"openEnded": false
                    },
                    {
                        "uuid": "5DA49C1D-243E-44BC-B9ED-3D451DC46576",
						"type": "CylinderGeometry",
						"radiusTop": 6,
						"radiusBottom": 6,
						"height": 5,
						"radialSegments": 32,
						"heightSegments": 1,
						"openEnded": false
                    },
                    {
                        "uuid": "7FC7C6E9-AB7B-4B04-8BE1-13C810B7A639",
						"type": "CylinderGeometry",
						"radiusTop": 10,
						"radiusBottom": 9.08,
						"height": 1,
						"radialSegments": 64,
						"heightSegments": 1,
						"openEnded": false
                    },
                    {
                        "uuid": "93672A9F-6465-4F99-91AF-3CE40984F939",
						"type": "CylinderGeometry",
						"radiusTop": 10,
						"radiusBottom": 10,
						"height": 100,
						"radialSegments": 64,
						"heightSegments": 1,
						"openEnded": false
                    },
                    {
                        "uuid": "AC65F2CF-EBFF-4EC9-A4EF-F9FCB356E78F",
						"type": "CylinderGeometry",
						"radiusTop": 18,
						"radiusBottom": 18,
						"height": 20,
						"radialSegments": 64,
						"heightSegments": 1,
						"openEnded": false
                    },
                    {
                        "uuid": "8EB2C68D-5127-417B-94B1-E5B428D39B58",
						"type": "CylinderGeometry",
						"radiusTop": 15,
						"radiusBottom": 15,
						"height": 10,
						"radialSegments": 64,
						"heightSegments": 1,
						"openEnded": false
                }], // end geometries line 29
                "materials": [
                    {
                        "uuid": "D963E6DA-A503-450E-B082-F17EE56A0E75",
						"type": "MeshPhongMaterial",
						"color": 16777215,
						"ambient": 16777215,
						"emissive": 6184542,
						"specular": 1118481,
						"shininess": 30,
						"opacity": 0.5
                    },
                    {
                        "uuid": "BE00593A-F38B-48E1-9219-66CC5B0C81DF",
						"type": "MeshPhongMaterial",
						"color": 16777215,
						"ambient": 16777215,
						"emissive": 0,
						"specular": 1118481,
						"shininess": 30
                    },
                    {
                        "uuid": "DE09C011-C3E2-4D2D-986C-D7EA95C3F99F",
						"type": "MeshPhongMaterial",
						"color": 16777215,
						"ambient": 16777215,
						"emissive": 0,
						"specular": 1118481,
						"shininess": 30
                    },
                    {
                        "uuid": "0193A44A-30D0-4B28-BB6A-75652B7716E5",
						"type": "MeshPhongMaterial",
						"color": 16777215,
						"ambient": 16777215,
						"emissive": 0,
						"specular": 1118481,
						"shininess": 30
                    },
                    {
                        "uuid": "D20E89D8-E7FF-4152-B666-46CBDB913FAC",
						"type": "MeshPhongMaterial",
						"color": 8292740,
						"ambient": 16777215,
						"emissive": 131340,
						"specular": 1118481,
						"shininess": 30,
						"opacity": 0.8
                    },
                    {
                        "uuid": "3E27D340-2002-48B3-A3CB-62DB72D1E1A6",
						"type": "MeshPhongMaterial",
						"color": 11974326,
						"ambient": 16777215,
						"emissive": 5395026,
						"specular": 1118481,
						"shininess": 30
                }], // end materials line 108
                "object": {
                    "uuid": "31517222-A9A7-4EAF-B5F6-60751C0BABA3",
					"type": "Scene",
					"name": "Scene",
					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
					"children": [
					    {
					        "uuid": "CB134A1B-D27A-4509-A4C7-971458B9D412",
							"type": "SpotLight",
							"name": "SpotLight 1",
							"color": 16777215,
							"intensity": 1,
							"distance": 0,
							"angle": 0.874,
							"exponent": 10,
							"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,100,200,150,1]
					    },
					    {
					        "uuid": "65E528E3-190E-4679-A254-1692F2237593",
							"type": "Mesh",
							"name": "Plane 3",
							"geometry": "4601A1C8-537C-4551-BD1D-4C5AF434C3CB",
							"material": "D963E6DA-A503-450E-B082-F17EE56A0E75",
							"matrix": 
							[1,0,0,0,0,0.0003,-1,0,0,1,0.0003,0,0,0,0,1]
					    },
					    {
					        "uuid": "0D3032BA-5923-4B8F-BA26-4E45525DB3D1",
							"type": "Group",
							"name": "GroupSpindle",
							"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
							"children": [
							    {
							        "uuid": 
							        "768EAB11-0588-4690-A053-E6F9C5BB87E0",
									"type": "Mesh",
									"name": "Endmill",
									"geometry": 
									"50DB6DF6-4923-441C-AE63-92D3A94EAEEC",
									"material": 
									"BE00593A-F38B-48E1-9219-66CC5B0C81DF",
									"matrix": 
									[1,0,0,0,0,1,0,0,0,0,1,0,0,18.51,0,1]
							    },
							    {
							        "uuid": 
							        "6CD932C4-5C71-404B-B0FB-5B7879388F2E",
									"type": "Mesh",
									"name": "ColletTaper",
									"geometry": 
									"E52C9CE5-1054-4953-87BD-2CD5640D756E",
									"material": 
									"DE09C011-C3E2-4D2D-986C-D7EA95C3F99F",
									"matrix": 
									[1,0,0,0,0,1,0,0,0,0,1,0,0,22.63,0,1]
							    },
							    {
							        "uuid": 
							        "C4D75B11-5EC3-4267-AAA5-B62DC2DD6507",
									"type": "Mesh",
									"name": "Collet",
									"geometry": 
									"5DA49C1D-243E-44BC-B9ED-3D451DC46576",
									"material": 
									"0193A44A-30D0-4B28-BB6A-75652B7716E5",
									"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,26,0,1]
							    },
							    {
							        "uuid": 
							        "84DECC53-67F7-4707-B9EC-F26F5FBDBC28",
									"type": "Mesh",
									"name": "SpindleBaseTaper",
									"geometry": 
									"7FC7C6E9-AB7B-4B04-8BE1-13C810B7A639",
									"material": 
									"D20E89D8-E7FF-4152-B666-46CBDB913FAC",
									"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,29,0,1]
							    },
							    {
							        "uuid": 
							        "329C2A35-C121-489E-86D8-86B8426A4726",
									"type": "Mesh",
									"name": "SpindleBase",
									"geometry": 
									"93672A9F-6465-4F99-91AF-3CE40984F939",
									"material": 
									"D20E89D8-E7FF-4152-B666-46CBDB913FAC",
									"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,79.5,0,1]
							}], //end children line 195
					    },
					    {
					        "uuid": "B0F9BB34-C502-46B6-A34E-BB374743DFCB",
							"type": "Group",
							"name": "GroupTouchPlate",
							"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
							"children": [
							    {
							        "uuid": 
							        "F489E92A-EE90-48AC-88AF-4867D7049272",
									"type": "Mesh",
									"name": "TouchPlateOuter",
									"geometry": 
									"AC65F2CF-EBFF-4EC9-A4EF-F9FCB356E78F",
									"material": 
									"D20E89D8-E7FF-4152-B666-46CBDB913FAC",
									"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
							    },
							    {
							        "uuid": 
							        "B38B19B8-5E6A-4EAB-89B5-998A8B10BD7A",
									"type": "Mesh",
									"name": "TouchPlateMetal",
									"geometry": 
									"8EB2C68D-5127-417B-94B1-E5B428D39B58",
									"material": 
									"3E27D340-2002-48B3-A3CB-62DB72D1E1A6",
									"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,6.12,0,1]
							}] //end children line 242
					}] // end children line 170
                } //end object line 165
            }, // end scene line 23
            "scripts": {}
        } //end threeObj

    }; //end of return, line 78
}); //end of cpdefine, line 77
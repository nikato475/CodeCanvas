(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RESET = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("RESET", "bold 24px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(2,11.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGDkdIAbgBIAAI9Is7AAIAAhJAmdkdQFVAAFUAAQALAAALAAQADAAADAAIAEAAQAhAAAhAAQAIAAAIAAQABAAACAA");
	this.shape.setTransform(41.675,28.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmcD6IAAnzIKpAAIAWAAIAFAAIAFAAIBBAAIAQAAIADAAIADAAIAGAAIAFAAIAOAAIAAHzg");
	this.shape_1.setTransform(41.625,25.0489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1,84.8,59.4);


(lib.PAUSE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("PAUSE", "bold 24px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(2,11.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmdkdQFVAAFUAAQALAAALAAIAGAAQACAAACAAQAhAAAhgBIAwAAIAAI9Is7AAIAAhJ");
	this.shape.setTransform(41.675,28.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmcD6IAAnzIKpAAIAWAAIAFAAIAFAAIBBAAIAWAAIAGAAIAFAAIAOAAIAAHzg");
	this.shape_1.setTransform(41.625,25.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1,84.8,59.4);


(lib.BEGIN_Btn_Component = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("BEGIN", "bold 24px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 29;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(2,11.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AmTD6IAAnzIMnAAIAAHzg");
	this.shape.setTransform(41.4,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.7,50);


(lib.Animation_Stage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");
	this.shape.setTransform(500,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Animation_Stage, new cjs.Rectangle(0,0,1000,400), null);


// stage content:
(lib.CodeCanvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		var root = this;
		
		if (!window.io) {
		    var script = document.createElement('script');
		    script.src = "https://cdn.socket.io/4.7.2/socket.io.min.js";
		    document.head.appendChild(script);
		}
		
		// --- 1. Global State ---
		window.v8Cat = "sorting";
		window.v8Algo = "bubble";
		window.v8SortData = [];
		window.v8ListData = [10, 20, 30, 40, 50];
		window.v8TreeData = null; 
		window.v8GraphData = { nodes: [], adj: {} };
		
		window.v8History = [];   // NEW: Store trace frames
		window.v8FrameIdx = -1;  // NEW: Current frame pointer
		
		window.v8IsPaused = true;
		window.v8IsPaused = true;
		window.v8IsComplete = false; 
		window.v8FoundIdx = -1;
		window.v8Speed = 500;
		window.v8Generator = null; // FIX: Initialize generator state
		
		window.v8Interval = null;
		window.v8ArraySize = 15;
		window.v8SessionId = Math.random().toString(36).substr(2, 9);
		
		
		var compareCount = 0;
		var swapCount = 0;
		var stageW = 1000, stageH = 400;
		
		var pCodes = {
		    bubble: { code: ["for(i=0; i<n-1; i++)", "  for(j=0; j<n-i-1; j++)", "    if(data[j]>data[j+1])", "      swap(j, j+1)"], t: "O(n²)" },
		    selection: { code: ["for(i=0; i<n-1; i++)", "  min_idx = i", "  for(j=i+1; j<n; j++)", "  swap(min_idx, i)"], t: "O(n²)" },
		    insertion: { code: ["for(i=1; i<n; i++)", "  key = data[i]", "  while(j>=0 && data[j]>key)", "  data[j+1] = key"], t: "O(n²)" },
		    quick: { code: ["pivot = data[high]", "partition around pivot", "quickSort(left)", "quickSort(right)"], t: "O(n log n)" },
		    merge: { code: ["divide into two halves", "recursively sort", "merge back together"], t: "O(n log n)" },
		    binarysearch: { code: ["mid = (low+high)/2", "if (target == mid) FOUND", "else if (target < mid) high=mid-1", "else low=mid+1"], t: "O(log n)" },
		    linearsearch: { code: ["for (item in list)", "  if (item == target) FOUND", "return NOT FOUND"], t: "O(n)" },
		    linkedlist: { code: ["temp = head;", "while(temp != NULL) {", "  if(temp->data == target) FOUND", "  temp = temp->next;", "}"], t: "O(n)" },
		    binarytree: { code: ["if (target < node->val) delete left", "else if (target > node->val) delete right", "else handle case 1/2/3"], t: "O(log n)" },
		    bfs: { code: ["queue.push(start)", "while(!queue.empty)", "  v = queue.pop()", "  for neighbor in v.adj: push(neighbor)"], t: "O(V + E)" },
		    dfs: { code: ["visit(u): marked[u] = true", "  for neighbor in u.adj:", "    if !marked[neighbor]: visit(neighbor)"], t: "O(V + E)" }
		};
		
		// --- 2. WebSocket & Sync ---
		var socket = null;
		
		function highlightCode(line) {
		    document.querySelectorAll('[id^="v8_l_"]').forEach(el => {
		        el.style.backgroundColor = "transparent";
		        el.style.color = "#ccc";
		        el.style.borderLeft = "none";
		    });
		    var el = document.getElementById("v8_l_" + line);
		    if(el) {
		        el.style.backgroundColor = "rgba(14, 126, 255, 0.3)";
		        el.style.color = "#fff";
		        el.style.borderLeft = "3px solid #0e7eff";
		        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		    }
		}

		function renderFrame(idx) {
		    if (!window.v8History || idx < 0 || idx >= window.v8History.length) return;
		    var frame = window.v8History[idx];
		    window.v8FrameIdx = idx;
		    
		    if (frame.data) window.v8SortData = frame.data.slice();
		    if (frame.treeData !== undefined) window.v8TreeData = frame.treeData ? JSON.parse(JSON.stringify(frame.treeData)) : null;
		    if (frame.listData) window.v8ListData = frame.listData.slice();
		    if (frame.graphData) window.v8GraphData = JSON.parse(JSON.stringify(frame.graphData));
		    if (frame.foundIdx !== undefined) window.v8FoundIdx = frame.foundIdx;

		    compareCount = frame.cmp !== undefined ? frame.cmp : compareCount;
		    swapCount = frame.swp !== undefined ? frame.swp : swapCount;
		    
		    updateCounters();
		    highlightCode(frame.line !== undefined ? frame.line : -1);
		    refreshStage(frame.highlights, frame.hColor, frame.hTreeVal);
		    
		    updateStatus("Step " + (idx + 1) + " / " + window.v8History.length + ": " + (frame.msg || ""));
		}

		function generateTraceFromGen(genFunc, ...args) {
		    window.v8History = [];
		    var realRefresh = refreshStage;
		    var realUpdateStatus = updateStatus;
		    var realUpdateCounters = updateCounters;
		    var currentMsg = "";
		    
		    refreshStage = function(hArray, hColor, hTreeVal) {
		        window.v8History.push({
		            data: window.v8SortData.slice(),
		            treeData: window.v8TreeData !== undefined ? JSON.parse(JSON.stringify(window.v8TreeData)) : null,
		            listData: window.v8ListData.slice(),
		            graphData: JSON.parse(JSON.stringify(window.v8GraphData)),
		            foundIdx: window.v8FoundIdx,
		            cmp: compareCount,
		            swp: swapCount,
		            highlights: hArray,
		            hColor: hColor,
		            hTreeVal: hTreeVal,
		            msg: currentMsg,
		            line: 0
		        });
		    };
		    updateStatus = function(msg) { currentMsg = msg; };
		    updateCounters = function() {}; // Prevent UI reflows during trace capture

		    refreshStage(null, null, null); // Initial state

		    var gen = genFunc(...args);
		    if (gen && gen.next) {
		        var res = gen.next();
		        while(!res.done) res = gen.next();
		    }
		    
		    refreshStage(null, null, null); // Final state
		    
		    refreshStage = realRefresh;
		    updateStatus = realUpdateStatus;
		    updateCounters = realUpdateCounters;
		    window.v8FrameIdx = 0;
		    renderFrame(0);
		}

		function initSocket() {
		    var check = setInterval(function() {
		        if (window.io) {
		            clearInterval(check);
		            socket = io("https://云端后台地址.com", {
                    reconnection: false 
                    });
		            socket.on("connect", function() { updateStatus("Sync Active (v8.2-Trace)"); socket.emit("join-room", "sorting-room-1"); });
		            socket.on("sync-step", function(inc) {
		                if (inc.origin === window.v8SessionId) return; 
		                
		                if (inc.action === "RESET" || inc.action === "UI_CHANGE") {
		                    window.v8Cat = inc.cat || window.v8Cat;
		                    window.v8Algo = inc.algo || window.v8Algo;
		                    updateUIMode(true);
		                    resetProject();
		                    return;
		                }

		                // Multi-player index sync
		                if (inc.frameIdx !== undefined) {
		                    renderFrame(inc.frameIdx);
		                    return;
		                }

		                if (!window.v8IsPaused) return;
		            });
		        }
		    }, 200);
		}
		
		function broadcast(msg, action, frameIdx) {
		    if (socket && socket.connected) {
		        socket.emit("algo-step", {
		            roomId: "sorting-room-1", origin: window.v8SessionId,
		            cat: window.v8Cat, algo: window.v8Algo,
		            frameIdx: frameIdx !== undefined ? frameIdx : window.v8FrameIdx,
		            action: action || "AUTO", msg: msg
		        });
		    }
		}
		
		// --- 3. UI Framework ---
		function setupUI() {
		    if (document.getElementById("v8_panel")) return;
		    var panel = document.createElement("div"); panel.id = "v8_panel";
		    panel.style.cssText = "position:absolute; left:10px; top:10px; padding:15px; background:rgba(0,0,0,0.9); color:white; border-radius:12px; width:250px; z-index:10000; font-family:Arial; box-shadow:0 10px 30px rgba(0,0,0,0.5); border:1px solid #444;";
		
		    var html = '<div style="font-weight:bold; color:#0e7eff; border-bottom:1px solid #333; margin-bottom:10px; padding-bottom:5px;">CodeCanvas</div>';
		    html += '<div style="font-size:11px; margin-bottom:10px;">CATEGORY: <select id="v8_catSelect" style="width:145px; float:right;"><option value="sorting">SORTING</option><option value="searching">SEARCHING</option><option value="linear">LINEAR STRUC</option><option value="hierarchy">HIERARCHY</option></select></div>';
		    html += '<div style="font-size:11px; margin-bottom:10px;">ALGORITHM: <select id="v8_algoSelect" style="width:145px; float:right;"></select></div>';
		    html += '<div style="font-size:11px; margin-bottom:10px; color:#aaa;"></div>';
		
		    
		    html += '<div id="v8_barArea" style="display:block; margin-top:10px;">Size: <input type="range" id="v8_sizeSlider" min="5" max="40" value="15" style="width:70%;"></div>';
		
		    html += '<div id="v8_actionArea" style="display:none; margin-top:10px; border-top:1px solid #333; padding-top:10px;">';
		    html += '<input type="number" id="v8_val_input" placeholder="Value" style="width:96%; padding:6px; margin-bottom:10px; border-radius:4px; border:none;">';
		    html += '<div style="display:flex; flex-wrap:wrap; gap:5px;">';
		    html += '<button onclick="window.v8_handleInsert()" style="flex:1; background:#28a745; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">INSERT</button>';
		    html += '<button id="v8_searchBtn" onclick="window.v8_handleSearch()" style="flex:1; background:#007bff; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">SEARCH</button>';
		    html += '<button id="v8_delBtn" onclick="window.v8_handleDelete()" style="width:100%; margin-top:5px; background:#dc3545; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px; display:none;">DELETE</button>';
		    html += '</div></div>';
		
		    html += '<button id="v8_stepBtn" style="width:100%; margin-top:15px; padding:12px; background:#444; color:white; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">STEP FORWARD &gt;&gt;</button>';
		
		    html += '<div style="margin-top:15px; padding:10px; background:#111; border-radius:6px; font-size:11px;">';
		    html += 'Delay: <input type="range" id="v8_speedSlider" min="10" max="1000" style="width:70%;" value="500"><br>';
		    html += '<div style="display:flex; justify-content:space-between; margin-top:8px;">Cmp: <b id="v8_cC" style="color:#00e5ff;">0</b> Swp: <b id="v8_sC" style="color:#ff3d00;">0</b></div>';
		    html += '</div>';
		
		    html += '<div id="v8_status" style="margin-top:10px; font-size:11px; color:#0e7eff; font-weight:bold;">Ready</div>';
		    html += '<div id="v8_code" style="margin-top:8px; padding:10px; background:#000; border:1px solid #222; font-family:monospace; font-size:10px; height:80px; overflow:auto; border-radius:6px;"></div>';
		
		    panel.innerHTML = html;
		    document.body.appendChild(panel);
		
		    document.getElementById("v8_catSelect").onchange = function() { window.v8Cat = this.value; updateUIMode(); resetProject(); broadcast("Cat Switch",null,null,null,"UI_CHANGE"); };
		    document.getElementById("v8_algoSelect").onchange = function() { window.v8Algo = this.value; resetProject(); broadcast("Algo Switch",null,null,null,"UI_CHANGE"); };
		    document.getElementById("v8_speedSlider").oninput = function() { window.v8Speed = parseInt(this.value); if(window.v8Interval) startEngine(); };
		    document.getElementById("v8_sizeSlider").oninput = function() { window.v8ArraySize = parseInt(this.value); initData(); };
		    document.getElementById("v8_stepBtn").onclick = function() { window.v8IsPaused = true; doStep(true); };
		
		    updateUIMode();
		}
		
		function updateUIMode(skipInit) {
		    var aSel = document.getElementById("v8_algoSelect"), barArea = document.getElementById("v8_barArea"), actArea = document.getElementById("v8_actionArea"), delBtn = document.getElementById("v8_delBtn");
		    aSel.innerHTML = "";
		    if(window.v8Cat === "sorting") {
		        barArea.style.display="block"; actArea.style.display="none";
		        ["bubble", "selection", "insertion", "quick", "merge"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "searching") {
		        barArea.style.display="block"; actArea.style.display="block"; delBtn.style.display="none";
		        ["linearsearch", "binarysearch"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "linear") {
		        barArea.style.display="none"; actArea.style.display="block"; delBtn.style.display="none";
		        ["linkedlist"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text="LINKED LIST"; aSel.add(o); });
		    } else if(window.v8Cat === "hierarchy") {
		        barArea.style.display="none"; actArea.style.display="block"; delBtn.style.display="block";
		        ["binarytree"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text="BST"; aSel.add(o); });
		    } else if(window.v8Cat === "networks") {
		        barArea.style.display="none"; actArea.style.display="block"; delBtn.style.display="block";
		        ["bfs", "dfs"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    }
		    aSel.value = window.v8Algo;
		    if(!aSel.value && aSel.options.length > 0) {
		        aSel.selectedIndex = 0;
		        window.v8Algo = aSel.value;
		    }
		
		    if(!skipInit) initData(); 
		    renderCode(); refreshStage();
		}
		
		// --- 4. Logic Functions (Trace-Based) ---
		function generateTrace() {
		    window.v8History = [];
		    var data = window.v8SortData.slice();
		    
		    if (window.v8Algo === "bubble") {
		        var arr = data.slice(), n = arr.length, cmp = 0, swp = 0;
		        window.v8History.push({ line: 0, data: arr.slice(), cmp: cmp, swp: swp, msg: "开始冒泡排序" });
		        for (var i = 0; i < n - 1; i++) {
		            for (var j = 0; j < n - i - 1; j++) {
		                window.v8History.push({ line: 1, data: arr.slice(), cmp: cmp, swp: swp, msg: "内层循环 j=" + j, highlights: [j, j+1], hColor: "yellow" });
		                cmp++;
		                if (arr[j] > arr[j + 1]) {
		                    window.v8History.push({ line: 2, data: arr.slice(), cmp: cmp, swp: swp, msg: "比较发现 " + arr[j] + " > " + arr[j+1] + "，准备交换", highlights: [j, j+1], hColor: "yellow" });
		                    swp++;
		                    var t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t;
		                    window.v8History.push({ line: 3, data: arr.slice(), cmp: cmp, swp: swp, msg: "交换完成", highlights: [j, j+1], hColor: "red" });
		                }
		            }
		        }
		    } else if (window.v8Algo === "selection") {
		        var arr = data.slice(), n = arr.length, cmp = 0, swp = 0;
		        for (var i = 0; i < n - 1; i++) {
		            var min_idx = i;
		            window.v8History.push({ line: 0, data: arr.slice(), cmp: cmp, swp: swp, msg: "设当前最小索引为 " + i, highlights: [i], hColor: "orange" });
		            for (var j = i + 1; j < n; j++) {
		                cmp++;
		                window.v8History.push({ line: 2, data: arr.slice(), cmp: cmp, swp: swp, msg: "比较元素", highlights: [min_idx, j], hColor: "yellow" });
		                if (arr[j] < arr[min_idx]) {
		                    min_idx = j;
		                    window.v8History.push({ line: 1, data: arr.slice(), cmp: cmp, swp: swp, msg: "更新最小索引为 " + j, highlights: [min_idx], hColor: "orange" });
		                }
		            }
		            swp++;
		            var t = arr[min_idx]; arr[min_idx] = arr[i]; arr[i] = t;
		            window.v8History.push({ line: 3, data: arr.slice(), cmp: cmp, swp: swp, msg: "交换最小元素到位置 " + i, highlights: [i, min_idx], hColor: "red" });
		        }
		    } else if (window.v8Algo === "insertion") {
		        var arr = data.slice(), n = arr.length, cmp = 0, swp = 0;
		        for (var i = 1; i < n; i++) {
		            var key = arr[i], j = i - 1;
		            window.v8History.push({ line: 1, data: arr.slice(), cmp: cmp, swp: swp, msg: "取出元素 " + key, highlights: [i], hColor: "orange" });
		            while (j >= 0 && arr[j] > key) {
		                cmp++;
		                arr[j + 1] = arr[j];
		                window.v8History.push({ line: 2, data: arr.slice(), cmp: cmp, swp: swp, msg: "元素后移", highlights: [j, j+1], hColor: "red" });
		                j--;
		            }
		            arr[j + 1] = key;
		            window.v8History.push({ line: 3, data: arr.slice(), cmp: cmp, swp: swp, msg: "插入位置 " + (j+1), highlights: [j+1], hColor: "#28a745" });
		        }
		    } else if (window.v8Algo === "binarysearch") {
		        var arr = data.slice(), n = arr.length, cmp = 0, target = data[Math.floor(Math.random()*n)];
		        var low = 0, high = n - 1;
		        updateStatus("正在搜索目标值: " + target);
		        while (low <= high) {
		            var mid = Math.floor((low + high) / 2);
		            cmp++;
		            window.v8History.push({ line: 0, data: arr.slice(), cmp: cmp, swp: 0, msg: "检查中间值 index=" + mid, highlights: [mid], hColor: "yellow" });
		            if (arr[mid] === target) {
		                window.v8History.push({ line: 1, data: arr.slice(), cmp: cmp, swp: 0, msg: "找到目标！", highlights: [mid], hColor: "#28a745" });
		                break;
		            }
		            if (arr[mid] < target) {
		                low = mid + 1;
		                window.v8History.push({ line: 3, data: arr.slice(), cmp: cmp, swp: 0, msg: "目标在右侧，更新 low=" + low, highlights: [low, high], hColor: "rgba(255,255,255,0.2)" });
		            } else {
		                high = mid - 1;
		                window.v8History.push({ line: 2, data: arr.slice(), cmp: cmp, swp: 0, msg: "目标在左侧，更新 high=" + high, highlights: [low, high], hColor: "rgba(255,255,255,0.2)" });
		            }
		        }
		    } else if (window.v8Algo === "quick") {
		        compareCount = 0; swapCount = 0;
		        generateTraceFromGen(quickSortGen, 0, n - 1);
		        return;
		    } else if (window.v8Algo === "merge") {
		        compareCount = 0; swapCount = 0;
		        generateTraceFromGen(mergeSortGen, 0, n - 1);
		        return;
		    } else {
		        return;
		    }
		    
		    window.v8History.push({ line: 0, data: data.slice(), cmp: 0, swp: 0, msg: "算法演示结束" });
		    window.v8FrameIdx = 0;
		    renderFrame(0);
		}

		function doStep(isLocal) {
		    if (window.v8History.length === 0) generateTrace();
		    if (window.v8FrameIdx < window.v8History.length - 1) {
		        window.v8FrameIdx++;
		        renderFrame(window.v8FrameIdx);
		        if (isLocal) broadcast("Step", "MANUAL", window.v8FrameIdx);
		    } else {
		        window.v8IsComplete = true;
		        stopAnimation();
		        updateStatus("Algorithm Complete!");
		    }
		}
		
		
		function* quickSortGen(l, h) {
		    if (l < h) {
		        var p = yield* partition(l, h);
		        yield* quickSortGen(l, p - 1);
		        yield* quickSortGen(p + 1, h);
		    }
		}
		function* partition(l, h) {
		    var pvt = window.v8SortData[h], i = l - 1; refreshStage([h], "purple"); yield;
		    for (var j=l; j<h; j++) {
		        compareCount++; updateCounters(); refreshStage([h, j], "yellow"); yield;
		        if (window.v8SortData[j] < pvt) {
		            i++; swapCount++; var t=window.v8SortData[i]; window.v8SortData[i]=window.v8SortData[j]; window.v8SortData[j]=t;
		            refreshStage([i, j], "red"); yield;
		        }
		    }
		    swapCount++; var t=window.v8SortData[i+1]; window.v8SortData[i+1]=window.v8SortData[h]; window.v8SortData[h]=t;
		    refreshStage([i+1, h], "#28a745"); yield; return i + 1;
		}
		
		function* mergeSortGen(l, r) {
		    if (l < r) {
		        var m = Math.floor((l + r) / 2);
		        yield* mergeSortGen(l, m);
		        yield* mergeSortGen(m + 1, r);
		        yield* merge(l, m, r);
		    }
		}
		function* merge(l, m, r) {
		    var leftArr = window.v8SortData.slice(l, m + 1);
		    var rightArr = window.v8SortData.slice(m + 1, r + 1);
		    var i = 0, j = 0, k = l;
		    while (i < leftArr.length && j < rightArr.length) {
		        compareCount++; updateCounters(); refreshStage([l+i, m+1+j], "yellow"); yield;
		        if (leftArr[i] <= rightArr[j]) { window.v8SortData[k] = leftArr[i]; i++; }
		        else { window.v8SortData[k] = rightArr[j]; j++; swapCount++; }
		        refreshStage([k], "red"); yield; k++;
		    }
		    while (i < leftArr.length) { window.v8SortData[k] = leftArr[i]; i++; k++; refreshStage([k-1], "#28a745"); yield; }
		    while (j < rightArr.length) { window.v8SortData[k] = rightArr[j]; j++; k++; refreshStage([k-1], "#28a745"); yield; }
		}
		
		// --- Searching Generators ---
		function* binarySearchGen(target) {
		    var low = 0, high = window.v8SortData.length - 1;
		    while (low <= high) {
		        var mid = Math.floor((low + high) / 2);
		        compareCount++; updateCounters(); refreshStage([low, high], "rgba(255,255,255,0.2)");
		        refreshStage([mid], "yellow"); yield;
		        if (window.v8SortData[mid] === target) { 
		            window.v8FoundIdx = mid; // Store result
		            refreshStage([mid], "#28a745"); 
		            updateStatus("Found target at index " + mid);
		            return; 
		        }
		        if (window.v8SortData[mid] < target) { low = mid + 1; } else { high = mid - 1; }
		        yield;
		    }
		    updateStatus("Target not found");
		}
		function* linearSearchArrayGen(target) {
		    for(var i=0; i<window.v8SortData.length; i++) {
		        compareCount++; updateCounters(); refreshStage([i], "yellow"); yield;
		        if(window.v8SortData[i] === target) { 
		            window.v8FoundIdx = i; // Store result
		            refreshStage([i], "#28a745"); 
		            updateStatus("Found target at index " + i);
		            return; 
		        }
		    }
		    updateStatus("Target not found");
		}
		
		// --- BST Generators (Restored) ---
		function* bstInsertGen(val) {
		    if(!window.v8TreeData) { 
		        window.v8TreeData = { val: val, left: null, right: null }; 
		        refreshStage(); return; 
		    }
		    var curr = window.v8TreeData;
		    while (curr) {
		        refreshStage(null, null, curr.val); yield;
		        if (val < curr.val) {
		            if (!curr.left) { curr.left = { val: val, left: null, right: null }; break; }
		            curr = curr.left;
		        } else if (val > curr.val) {
		            if (!curr.right) { curr.right = { val: val, left: null, right: null }; break; }
		            curr = curr.right;
		        } else return;
		    }
		    refreshStage(); 
		}
		function* bstSearchGen(val) {
		    var curr = window.v8TreeData;
		    while (curr) {
		        refreshStage(null, "yellow", curr.val); yield;
		        if (curr.val === val) { refreshStage(null, "#28a745", curr.val); return; }
		        curr = (val < curr.val) ? curr.left : curr.right;
		    }
		}
		function* bstDeleteGen(val) {
		    function* deleteNodeGen(node) {
		        if (!node) return null;
		        refreshStage(null, "yellow", node.val); yield;
		        if (val < node.val) { node.left = yield* deleteNodeGen(node.left); return node; }
		        else if (val > node.val) { node.right = yield* deleteNodeGen(node.right); return node; }
		        else {
		            refreshStage(null, "red", node.val); yield;
		            if (!node.left) return node.right; if (!node.right) return node.left;
		            var successor = node.right; while (successor.left) successor = successor.left;
		            node.val = successor.val; val = successor.val;
		            node.right = yield* deleteNodeGen(node.right); return node;
		        }
		    }
		    window.v8TreeData = yield* deleteNodeGen(window.v8TreeData);
		    refreshStage();
		}
		
		// --- 5. Common Framework ---
		function stopAnimation() {
		    clearInterval(window.v8Interval); 
		    window.v8Generator = null; 
		    window.v8IsPaused = true;
		}
		
		window.v8_handleInsert = function() {
		    var raw = document.getElementById("v8_val_input").value.trim().toUpperCase(); if(!raw) return;
		    stopAnimation(); window.v8IsPaused = false; 
		    window.v8IsComplete = false; window.v8FoundIdx = -1;
		    if(window.v8Cat === "networks") {
		        if(raw.includes("-")) {
		            var pts = raw.split("-"); 
		            if(!window.v8GraphData.adj[pts[0]]) window.v8GraphData.adj[pts[0]]=[];
		            if(!window.v8GraphData.adj[pts[1]]) window.v8GraphData.adj[pts[1]]=[];
		            if(window.v8GraphData.adj[pts[0]].indexOf(pts[1])===-1) window.v8GraphData.adj[pts[0]].push(pts[1]);
		            if(window.v8GraphData.adj[pts[1]].indexOf(pts[0])===-1) window.v8GraphData.adj[pts[1]].push(pts[0]);
		        } else {
		            if(window.v8GraphData.nodes.indexOf(raw)===-1) window.v8GraphData.nodes.push(raw);
		        }
		        window.v8History = [{
		            data: window.v8SortData.slice(), treeData: window.v8TreeData ? JSON.parse(JSON.stringify(window.v8TreeData)) : null,
		            listData: window.v8ListData.slice(), graphData: JSON.parse(JSON.stringify(window.v8GraphData)),
		            cmp: compareCount, swp: swapCount, msg: "Added " + raw
		        }];
                window.v8FrameIdx = 0; renderFrame(0); return;
		    }
		    var val = parseInt(raw);
		    if(window.v8Algo === "binarytree") {
		        generateTraceFromGen(bstInsertGen, val);
		    } else if(window.v8Algo === "linkedlist") {
		        window.v8ListData.push(val); 
		        window.v8History = [{
		            data: window.v8SortData.slice(), treeData: window.v8TreeData ? JSON.parse(JSON.stringify(window.v8TreeData)) : null,
		            listData: window.v8ListData.slice(), graphData: JSON.parse(JSON.stringify(window.v8GraphData)),
		            cmp: compareCount, swp: swapCount, msg: "Inserted " + val
		        }];
                window.v8FrameIdx = 0; renderFrame(0);
		        return; 
		    }
		    doStep(true); startEngine();
		};
		window.v8_handleSearch = function() {
		    var raw = document.getElementById("v8_val_input").value.trim().toUpperCase(); if(!raw) return;
		    stopAnimation(); window.v8IsPaused = false;
		    window.v8IsComplete = false; window.v8FoundIdx = -1;
		    if(window.v8Cat === "networks") {
		        if(window.v8Algo === "bfs") generateTraceFromGen(bfsGen, raw);
		        else if(window.v8Algo === "dfs") generateTraceFromGen(dfsGen, raw);
		        doStep(true); startEngine(); return;
		    }
		    var val = parseInt(raw);
		    if(window.v8Algo === "linearsearch") generateTraceFromGen(linearSearchArrayGen, val);
		    else if(window.v8Algo === "binarysearch") generateTraceFromGen(binarySearchGen, val);
		    else if(window.v8Algo === "binarytree") generateTraceFromGen(bstSearchGen, val);
		    else if(window.v8Algo === "linkedlist") generateTraceFromGen(linkedListSearchGen, val);
		    doStep(true); startEngine();
		};
		
		window.v8_handleDelete = function() {
		    var val = parseInt(document.getElementById("v8_val_input").value); if(isNaN(val)) return;
		    stopAnimation(); window.v8IsPaused = false;
		    window.v8IsComplete = false; window.v8FoundIdx = -1; // RESET STATE FOR NEW OP
		    if(window.v8Algo === "binarytree") generateTraceFromGen(bstDeleteGen, val);
		    doStep(true); startEngine();
		};
		
		function* linkedListSearchGen(target) {
		    for (var i=0; i<window.v8ListData.length; i++) {
		        refreshStage([i], "yellow"); yield;
		        if (window.v8ListData[i] === target) { 
		            window.v8FoundIdx = i;
		            refreshStage([i], "#28a745"); 
		            updateStatus("Found target at index " + i);
		            return; 
		        }
		    }
		    updateStatus("Target not found");
		}
		
		function initData() {
		    window.v8SortData = [];
		    for(var i=0; i<window.v8ArraySize; i++) window.v8SortData.push(Math.floor(Math.random()*80)+20);
		    if(window.v8Algo === "binarysearch") window.v8SortData.sort(function(a,b){return a-b;});
		    compareCount=0; swapCount=0; updateCounters();
		    generateTrace();
		    refreshStage();
		}
		
		function refreshStage(hArray, hColor, hTreeVal) {
		    if(!root.stageArea) { root.stageArea = new createjs.Container(); root.addChild(root.stageArea); }
		    root.stageArea.removeAllChildren();
		    
		    var offset = 50; // CONSTANT SAFETY MARGIN
		    var drawW = stageW - offset; 
		
		    if (window.v8Cat === "sorting" || window.v8Cat === "searching") {
		        var n = window.v8SortData.length, bw = (drawW/n)*0.8, sp = (drawW/n)*0.2;
		        for (var i=0; i<n; i++) {
		            var bh=(window.v8SortData[i]/100)*stageH, b=new createjs.Shape();
		            var isH = hArray && hArray.indexOf(i) !== -1;
		            
		            // Draw Bar
		            var isFound = (window.v8FoundIdx === i);
		            var barColor = (window.v8IsComplete && window.v8Cat === "sorting") ? "#28a745" : (isFound ? "#28a745" : (isH ? hColor : "hsl(200,70%,50%)"));
		            b.graphics.beginFill(barColor).drawRect(0,0,bw,-bh);
		            b.x = offset + i*(bw+sp)+(sp/2); b.y=stageH; root.stageArea.addChild(b);
		            
		            // HIGH-CONTRAST PLACARDS (v8.4)
		            var labelColor = (isFound || isH) ? "#ff0" : "#fff";
		
		            var fontSize = Math.min(13, bw * 0.9);
		            if (fontSize > 8) {
		                // 1. Background Rect
		                var labelBg = new createjs.Shape();
		                var labelH = fontSize + 4;
		                labelBg.graphics.beginFill("rgba(0,0,0,0.6)").drawRoundRect(-bw/2, -labelH, bw, labelH, 3);
		                labelBg.x = b.x + bw/2;
		                labelBg.y = stageH - 2;
		                root.stageArea.addChild(labelBg);
		                
		                // 2. Solid White Text
		                var t = new createjs.Text(window.v8SortData[i], "bold " + fontSize + "px Arial", labelColor);
		
		                t.x = b.x + bw/2;
		                t.y = stageH - 4;
		                t.textAlign = "center";
		                t.textBaseline = "bottom";
		                root.stageArea.addChild(t);
		            }
		        }
		    } else if (window.v8Cat === "linear") {
		        var sX=offset + 60, cY=200, gap=110, rad=25;
		        for (var i=0; i<window.v8ListData.length; i++) {
		            var x=sX+i*gap;
		            var isFound = (window.v8FoundIdx === i);
		            var nodeColor = isFound ? "#28a745" : (hArray && hArray.indexOf(i)!==-1 ? (hColor||"yellow") : null);
		            root.stageArea.addChild(drawNode(x, cY, window.v8ListData[i], !!nodeColor, nodeColor));
		            if(i<window.v8ListData.length-1) drawLine(x+rad, cY, x+gap-rad, cY);
		        }
		    } else if (window.v8Cat === "hierarchy") {
		        renderBSTRecursive(window.v8TreeData, offset + (drawW/2), 60, drawW/4, hTreeVal, hColor);
		    } else if (window.v8Cat === "networks") {
		        var nodes = window.v8GraphData.nodes;
		        var adj = window.v8GraphData.adj;
		        var nodeCoords = {};
		        // Layout: Circular
		        nodes.forEach(function(n, idx) {
		            var ang = (idx / nodes.length) * Math.PI * 2;
		            var nx = offset + drawW/2 + Math.cos(ang) * 120;
		            var ny = stageH/2 + Math.sin(ang) * 100;
		            nodeCoords[n] = {x: nx, y: ny};
		        });
		        // Draw Edges
		        nodes.forEach(function(u) {
		            (adj[u]||[]).forEach(function(v) {
		                if(u < v) drawLine(nodeCoords[u].x, nodeCoords[u].y, nodeCoords[v].x, nodeCoords[v].y);
		            });
		        });
		        // Draw Nodes
		        nodes.forEach(function(n) {
		            var isH = (hArray && hArray.indexOf(n) !== -1);
		            root.stageArea.addChild(drawNode(nodeCoords[n].x, nodeCoords[n].y, n, isH, hColor));
		        });
		    }
		}
		function* bfsGen(startNode) {
		    if(!window.v8GraphData.nodes.includes(startNode)) return;
		    var queue = [startNode], visited = [startNode];
		    while(queue.length > 0) {
		        var curr = queue.shift();
		        refreshStage([curr], "yellow"); yield;
		        var neighbors = window.v8GraphData.adj[curr] || [];
		        for(var n of neighbors) {
		            if(!visited.includes(n)) {
		                visited.push(n); queue.push(n);
		                refreshStage([n], "rgba(255,255,0,0.3)"); yield;
		            }
		        }
		        refreshStage([curr], "#28a745");
		    }
		    window.v8IsComplete = true; refreshStage();
		}
		function* dfsGen(startNode) {
		    if(!window.v8GraphData.nodes.includes(startNode)) return;
		    var stack = [startNode], visited = [];
		    while(stack.length > 0) {
		        var curr = stack.pop();
		        if(!visited.includes(curr)) {
		            visited.push(curr);
		            refreshStage([curr], "yellow"); yield;
		            var neighbors = window.v8GraphData.adj[curr] || [];
		            for(var n of neighbors) {
		                if(!visited.includes(n)) stack.push(n);
		            }
		        }
		    }
		    window.v8IsComplete = true; refreshStage();
		}
		
		
		function renderBSTRecursive(node, x, y, xOffset, hVal, hColor) {
		    if (!node) return;
		    var isH = (node.val === hVal);
		    if (node.left) { drawLine(x, y, x - xOffset, y + 80); renderBSTRecursive(node.left, x - xOffset, y + 80, xOffset/2, hVal, hColor); }
		    if (node.right) { drawLine(x, y, x + xOffset, y + 80); renderBSTRecursive(node.right, x + xOffset, y + 80, xOffset/2, hVal, hColor); }
		    root.stageArea.addChild(drawNode(x, y, node.val, isH, (isH?hColor:"yellow")));
		}
		
		function startEngine() { clearInterval(window.v8Interval); window.v8Interval = setInterval(function() {if(!window.v8IsPaused) doStep(false);}, window.v8Speed); }
		function resetCounters() { compareCount = 0; swapCount = 0; updateCounters(); }
		function resetProject() { 
		    clearInterval(window.v8Interval); 
		    window.v8IsPaused=true; 
		    window.v8IsComplete=false;
		    window.v8FoundIdx = -1;
		    window.v8Generator = null; // FIX: Ensure old generators don't bleed into new algorithms
		    if(window.v8Cat === "sorting" || window.v8Cat === "searching") initData();
		    if(window.v8Cat === "hierarchy") window.v8TreeData = null; 
		    if(window.v8Cat === "linear") window.v8ListData = []; 
		    if(window.v8Cat === "networks") window.v8GraphData = { nodes: [], adj: {} };
		    resetCounters();
		    generateTrace(); // NEW: Pre-calculate history on reset
		    refreshStage(); 
		}
		function updateStatus(t) { var el=document.getElementById("v8_status"); if(el) el.innerText=t; }
		function updateCounters() { var c=document.getElementById("v8_cC"), s=document.getElementById("v8_sC"); if(c) c.innerText=compareCount; if(s) s.innerText=swapCount; }
		function drawNode(x, y, val, isH, color) {
		    var c = new createjs.Container(); c.x=x; c.y=y; var s = new createjs.Shape();
		    s.graphics.beginStroke(isH?(color||"yellow"):"#007bff").setStrokeStyle(3).beginFill(isH?"rgba(255,255,0,0.2)":"#111").drawCircle(0,0,22);
		    var t = new createjs.Text(val, "bold 13px Arial", isH?"#fff":"#00e5ff"); t.textAlign="center"; t.textBaseline="middle"; c.addChild(s,t); return c;
		}
		function drawLine(x1, y1, x2, y2) { var l = new createjs.Shape(); l.graphics.beginStroke("#555").setStrokeStyle(2).moveTo(x1,y1).lineTo(x2,y2); root.stageArea.addChild(l); }
		function renderCode() { var box = document.getElementById("v8_code"); if(!box) return; box.innerHTML = (pCodes[window.v8Algo].code || []).map(function(l, i) { return "<div id='v8_l_" + i + "'>" + l.replace(/ /g, "&nbsp;") + "</div>"; }).join(""); }
		
		root.beginBtn.addEventListener("click", function() { window.v8IsPaused=false; startEngine(); broadcast("Start", "REMOTE_START"); });
		root.pauseBtn.addEventListener("click", function() { window.v8IsPaused=true; broadcast("Pause", "REMOTE_PAUSE"); });
		root.resetBtn.addEventListener("click", function() { resetProject(); broadcast("Reset", "RESET"); });
		
		setupUI(); initSocket();
		setTimeout(function() { if(!window.v8SortData.length) initData(); refreshStage(); }, 500);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.stageArea = new lib.Animation_Stage();
	this.stageArea.name = "stageArea";
	this.stageArea.setTransform(780,334.1,1,1,0,0,0,500,200);

	this.resetBtn = new lib.RESET();
	this.resetBtn.name = "resetBtn";
	this.resetBtn.setTransform(561.75,600.6,0.8745,0.6441,0,0,0,41.8,28.9);
	new cjs.ButtonHelper(this.resetBtn, 0, 1, 1);

	this.pauseBtn = new lib.PAUSE();
	this.pauseBtn.name = "pauseBtn";
	this.pauseBtn.setTransform(439.3,600.75,0.8745,0.6441,0,0,0,41.8,29.1);
	new cjs.ButtonHelper(this.pauseBtn, 0, 1, 1);

	this.beginBtn = new lib.BEGIN_Btn_Component();
	this.beginBtn.name = "beginBtn";
	this.beginBtn.setTransform(316.3,598.35,0.8745,0.6441,0,0,0,41.5,25.4);
	new cjs.ButtonHelper(this.beginBtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhOHAFpIAArRMCcPAAAIAALR");
	this.shape.setTransform(672.1,98.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.beginBtn},{t:this.pauseBtn},{t:this.resetBtn},{t:this.stageArea}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(811.1,421,468.9,199);
// library properties:
lib.properties = {
	id: '8C89BC464A9A5B4FBB4BC3CC02840941',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8C89BC464A9A5B4FBB4BC3CC02840941'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
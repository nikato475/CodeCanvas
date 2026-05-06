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
		window.v8ListData = [];
		window.v8TreeData = null; 
		window.v8TreeAction = "";
		window.v8TreeVal = null;
		window.v8GraphData = { nodes: [], adj: {} };
		
		window.v8Frames = []; 
		window.v8CurrentFrame = 0;
		window.v8IsPaused = true;
		window.v8IsComplete = false; 
		window.v8FoundIdx = -1;
		window.v8Speed = 500;
		
		window.v8Interval = null;
		window.v8ArraySize = 15;
		window.v8SessionId = Math.random().toString(36).substr(2, 9);
		
		var compareCount = 0;
		var swapCount = 0;
		var stageW = 1000, stageH = 400;
		
		var pCodes = {
		    bubble: { code: [
		        "void bubbleSort(int arr[], int n) {",
		        "  for (int i = 0; i < n - 1; i++) {",
		        "    for (int j = 0; j < n - i - 1; j++) {",
		        "      if (arr[j] > arr[j + 1]) {",
		        "        swap(arr[j], arr[j + 1]);",
		        "      }",
		        "    }",
		        "  }",
		        "}"
		    ], t: "O(n²)" },
		    selection: { code: [
		        "void selectionSort(int arr[], int n) {",
		        "  for (int i = 0; i < n - 1; i++) {",
		        "    int minIdx = i;",
		        "    for (int j = i + 1; j < n; j++) {",
		        "      if (arr[j] < arr[minIdx]) {",
		        "        minIdx = j;",
		        "      }",
		        "    }",
		        "    swap(arr[i], arr[minIdx]);",
		        "  }",
		        "}"
		    ], t: "O(n²)" },
		    insertion: { code: [
		        "void insertionSort(int arr[], int n) {",
		        "  for (int i = 1; i < n; i++) {",
		        "    int key = arr[i];",
		        "    int j = i - 1;",
		        "    while (j >= 0 && arr[j] > key) {",
		        "      arr[j + 1] = arr[j];",
		        "      j--;",
		        "    }",
		        "    arr[j + 1] = key;",
		        "  }",
		        "}"
		    ], t: "O(n²)" },
		    quick: { code: [
		        "void quickSort(int arr[], int low, int high) {",
		        "  if (low < high) {",
		        "    int pivot = arr[high];",
		        "    int idx = low;",
		        "    for (int j = low; j < high; j++) {",
		        "      if (arr[j] < pivot) {",
		        "        swap(arr[idx], arr[j]);",
		        "        idx++;",
		        "      }",
		        "    }",
		        "    swap(arr[idx], arr[high]);",
		        "    quickSort(arr, low, idx - 1);",
		        "    quickSort(arr, idx + 1, high);",
		        "  }",
		        "}"
		    ], t: "O(n log n)" },
		    merge: { code: [
		        "void merge(int arr[], int l, int mid, int r) {",
		        "  int n1 = mid - l + 1, n2 = r - mid;",
		        "  int L[n1], R[n2];",
		        "  for (int i = 0; i < n1; i++) L[i] = arr[l + i];",
		        "  for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];",
		        "  int i = 0, j = 0, k = l;",
		        "  while (i < n1 && j < n2) {",
		        "    if (L[i] <= R[j]) arr[k++] = L[i++];",
		        "    else arr[k++] = R[j++];",
		        "  }",
		        "  while (i < n1) arr[k++] = L[i++];",
		        "  while (j < n2) arr[k++] = R[j++];",
		        "}",
		        "void mergeSort(int arr[], int l, int r) {",
		        "  if (l < r) {",
		        "    int mid = l + (r - l) / 2;",
		        "    mergeSort(arr, l, mid);",
		        "    mergeSort(arr, mid + 1, r);",
		        "    merge(arr, l, mid, r);",
		        "  }",
		        "}"
		    ], t: "O(n log n)" },
		    binarysearch: { code: [
		        "int binarySearch(int arr[], int n, int target) {",
		        "  int low = 0, high = n - 1;",
		        "  while (low <= high) {",
		        "    int mid = low + (high - low) / 2;",
		        "    if (arr[mid] == target) {",
		        "      return mid;",
		        "    } else if (arr[mid] < target) {",
		        "      low = mid + 1;",
		        "    } else {",
		        "      high = mid - 1;",
		        "    }",
		        "  }",
		        "  return -1;",
		        "}"
		    ], t: "O(log n)" },
		    linearsearch: { code: [
		        "int linearSearch(int arr[], int n, int target) {",
		        "  for (int i = 0; i < n; i++) {",
		        "    if (arr[i] == target) {",
		        "      return i;",
		        "    }",
		        "  }",
		        "  return -1;",
		        "}"
		    ], t: "O(n)" },
		    twopointers: { code: [
		        "vector<int> twoPointers(int arr[], int n, int target) {",
		        "  int L = 0, R = n - 1;",
		        "  while (L < R) {",
		        "    int sum = arr[L] + arr[R];",
		        "    if (sum == target) {",
		        "      return {L, R};",
		        "    } else if (sum < target) {",
		        "      L++;",
		        "    } else {",
		        "      R--;",
		        "    }",
		        "  }",
		        "  return {-1, -1};",
		        "}"
		    ], t: "O(n)" },
		    slidingwindow: { code: [
		        "int slidingWindow(int arr[], int n, int k) {",
		        "  int sum = 0, L = 0;",
		        "  for (int R = 0; R < n; R++) {",
		        "    sum += arr[R];",
		        "    if (R - L + 1 > k) {",
		        "      sum -= arr[L];",
		        "      L++;",
		        "    }",
		        "  }",
		        "  return sum;",
		        "}"
		    ], t: "O(n)" },
		    diffarray: { code: [
		        "void diffArray(int arr[], int n, int l, int r, int v) {",
		        "  int diff[n + 1] = {0};",
		        "  diff[l] += v;",
		        "  if (r + 1 < n) {",
		        "    diff[r + 1] -= v;",
		        "  }",
		        "}"
		    ], t: "O(1)" },
		    linkedlist: { code: [
		        "struct Node { int val; Node* next; };",
		        "Node* search(Node* head, int target) {",
		        "  Node* curr = head;",
		        "  while (curr != nullptr) {",
		        "    if (curr->val == target) {",
		        "      return curr;",
		        "    }",
		        "    curr = curr->next;",
		        "  }",
		        "  return nullptr;",
		        "}"
		    ], t: "O(n)" },
		    reverselist: { code: [
		        "Node* reverseList(Node* head) {",
		        "  Node* prev = nullptr;",
		        "  Node* curr = head;",
		        "  while (curr != nullptr) {",
		        "    Node* next = curr->next;",
		        "    curr->next = prev;",
		        "    prev = curr;",
		        "    curr = next;",
		        "  }",
		        "  return prev;",
		        "}"
		    ], t: "O(n)" },
		    mergelist: { code: [
		        "Node* mergeTwoLists(Node* l1, Node* l2) {",
		        "  Node dummy(0);",
		        "  Node* curr = &dummy;",
		        "  while (l1 && l2) {",
		        "    if (l1->val < l2->val) {",
		        "      curr->next = l1; l1 = l1->next;",
		        "    } else {",
		        "      curr->next = l2; l2 = l2->next;",
		        "    }",
		        "    curr = curr->next;",
		        "  }",
		        "  curr->next = l1 ? l1 : l2;",
		        "  return dummy.next;",
		        "}"
		    ], t: "O(n+m)" },
		    deletenode: { code: [
		        "void deleteNode(Node* node) {",
		        "  node->val = node->next->val;",
		        "  node->next = node->next->next;",
		        "}"
		    ], t: "O(1)" },
		    binarytree: { code: [
		        "struct TreeNode { int val; TreeNode *left, *right; };",
		        "TreeNode* bstSearch(TreeNode* root, int target) {",
		        "  if (root == nullptr) return nullptr;",
		        "  if (root->val == target) {",
		        "    return root;",
		        "  }",
		        "  if (target < root->val) {",
		        "    return bstSearch(root->left, target);",
		        "  } else {",
		        "    return bstSearch(root->right, target);",
		        "  }",
		        "}"
		    ], t: "O(log n)" }
		};
		
		function initSocket() {
		    var check = setInterval(function() {
		        if (window.io) {
		            clearInterval(check);
		            socket = io("http://localhost:3000");
		            socket.on("sync-step", (inc) => {
		                if (inc.origin === window.v8SessionId) return; 
		                if (inc.action === "RESET") { resetProject(false); return; }
		                if (inc.action === "REMOTE_START") { window.v8IsPaused=false; startEngine(); return; }
		                if (inc.action === "REMOTE_PAUSE") { window.v8IsPaused=true; return; }
		                if (inc.action === "MANUAL_STEP" || inc.action === "AUTO") {
		                    window.v8Frames = [inc.data]; window.v8CurrentFrame = 0; renderFrame(0);
		                }
		            });
		        }
		    }, 500);
		}
		
		function broadcast(data, action) {
		    if (window.socket && window.socket.connected) {
		        window.socket.emit("algo-step", { roomId: "algo-room", origin: window.v8SessionId, action: action, data: data });
		    }
		}
		
		function setupUI() {
		    if (document.getElementById("v8_panel")) return;
		    var panel = document.createElement("div"); panel.id = "v8_panel";
		    panel.style.cssText = "position:absolute; left:10px; top:10px; padding:15px; background:rgba(0,0,0,0.9); color:white; border-radius:12px; min-width:250px; width:max-content; z-index:10000; font-family:Arial; box-shadow:0 10px 30px rgba(0,0,0,0.5); border:1px solid #444;";
		
		    var html = '<div style="font-weight:bold; color:#0e7eff; border-bottom:1px solid #333; margin-bottom:10px; padding-bottom:5px;">CodeCanvas</div>';
		    html += '<div style="font-size:11px; margin-bottom:10px;">CATEGORY: <select id="v8_catSelect" style="width:145px; float:right;"><option value="sorting">SORTING</option><option value="searching">SEARCHING</option><option value="array_algo">ARRAY ALGOS</option><option value="linear">LINEAR STRUC</option><option value="hierarchy">HIERARCHY</option></select></div>';
		    html += '<div style="font-size:11px; margin-bottom:10px;">ALGORITHM: <select id="v8_algoSelect" style="width:145px; float:right;"></select></div>';
		    html += '<div id="v8_barArea" style="display:block; margin-top:10px;">Size: <input type="range" id="v8_sizeSlider" min="5" max="40" value="15" style="width:70%;"></div>';
		    html += '<div id="v8_actionArea" style="display:none; margin-top:10px; border-top:1px solid #333; padding-top:10px;">';
		    html += '<input type="number" id="v8_val_input" placeholder="Value" style="width:96%; padding:6px; margin-bottom:10px; border-radius:4px; border:none;">';
		    html += '<div style="display:flex; flex-wrap:wrap; gap:5px;">';
		    html += '<button id="v8_insBtn" onclick="window.v8_handleInsert()" style="flex:1; background:#28a745; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">INSERT</button>';
		    html += '<button id="v8_searchBtn" onclick="window.v8_handleSearch()" style="flex:1; background:#007bff; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">SEARCH</button>';
		    html += '<button id="v8_delBtn" onclick="window.v8_handleDelete()" style="width:100%; margin-top:5px; background:#dc3545; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px; display:none;">DELETE</button>';
		    html += '</div></div>';
		    html += '<div style="display:flex; gap:5px; margin-top:15px;">';
		    html += '<button id="v8_prevBtn" style="flex:1; padding:10px; background:#444; color:white; border:none; border-radius:4px; cursor:pointer;">&lt;&lt; BACK</button>';
		    html += '<button id="v8_stepBtn" style="flex:2; padding:10px; background:#0e7eff; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">NEXT &gt;&gt;</button>';
		    html += '</div>';
		    html += '<div style="margin-top:15px; padding:10px; background:#111; border-radius:6px; font-size:11px;">';
		    html += '<div id="v8_timelineWrapper">Timeline: <input type="range" id="v8_timeline" min="0" max="0" value="0" style="width:100%;"><br></div>';
		    html += 'Delay: <input type="range" id="v8_speedSlider" min="10" max="1000" style="width:70%;" value="500"><br>';
		    html += '<div style="display:flex; justify-content:space-between; margin-top:8px;">Cmp: <b id="v8_cC" style="color:#00e5ff;">0</b> Swp: <b id="v8_sC" style="color:#ff3d00;">0</b></div>';
		    html += '</div>';
		    html += '<div id="v8_status" style="margin-top:10px; font-size:11px; color:#0e7eff; font-weight:bold;">Ready</div>';
		    html += '<div id="v8_code" style="margin-top:8px; padding:10px; background:#1e1e1e; border:1px solid #333; font-family:\'Consolas\', \'Courier New\', monospace; font-size:12px; height:180px; overflow:auto; border-radius:6px; scroll-behavior:smooth; white-space:pre; box-shadow:inset 0 0 10px rgba(0,0,0,0.5);"></div>';
		    panel.innerHTML = html;
		    document.body.appendChild(panel);
		
		    document.getElementById("v8_catSelect").onchange = function() { window.v8Cat = this.value; updateUIMode(); resetProject(); };
		    document.getElementById("v8_algoSelect").onchange = function() { window.v8Algo = this.value; renderCode(); resetProject(); };
		    document.getElementById("v8_speedSlider").oninput = function() { window.v8Speed = parseInt(this.value); if(!window.v8IsPaused) startEngine(); };
		    document.getElementById("v8_sizeSlider").oninput = function() { window.v8ArraySize = parseInt(this.value); initData(); };
		    document.getElementById("v8_sizeSlider").onchange = function() { window.v8ArraySize = parseInt(this.value); initData(); };
		    document.getElementById("v8_stepBtn").onclick = function() { window.v8IsPaused = true; doStep(true); };
		    document.getElementById("v8_prevBtn").onclick = function() { window.v8IsPaused = true; moveFrame(-1); };
		    document.getElementById("v8_timeline").oninput = function() { window.v8IsPaused = true; seekFrame(parseInt(this.value)); };
		
		    updateUIMode();
		}
		
		function updateUIMode(skipInit) {
		    var aSel = document.getElementById("v8_algoSelect"), barArea = document.getElementById("v8_barArea"), actArea = document.getElementById("v8_actionArea"), delBtn = document.getElementById("v8_delBtn");
		    var insBtn = document.getElementById("v8_insBtn"), searchBtn = document.getElementById("v8_searchBtn");
		    var tlWrap = document.getElementById("v8_timelineWrapper"), prevBtn = document.getElementById("v8_prevBtn");
		    aSel.innerHTML = "";
		    var isGen = false;
		    if(window.v8Cat === "sorting") {
		        barArea.style.display="block"; actArea.style.display="none";
		        ["bubble", "selection", "insertion", "quick", "merge"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "searching") {
		        barArea.style.display="block"; actArea.style.display="block"; 
		        if(delBtn) delBtn.style.display="none"; if(insBtn) insBtn.style.display="none"; if(searchBtn) { searchBtn.style.display="block"; searchBtn.innerText="SEARCH"; }
		        ["linearsearch", "binarysearch"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "array_algo") {
		        barArea.style.display="block"; actArea.style.display="block"; 
		        if(delBtn) delBtn.style.display="none"; if(insBtn) insBtn.style.display="none"; if(searchBtn) { searchBtn.style.display="block"; searchBtn.innerText="RUN ALGO"; }
		        ["twopointers", "slidingwindow", "diffarray"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "linear") {
		        barArea.style.display="none"; actArea.style.display="block"; 
		        if(delBtn) delBtn.style.display="block"; if(insBtn) insBtn.style.display="block"; if(searchBtn) { searchBtn.style.display="block"; searchBtn.innerText="SEARCH"; }
		        isGen = true;
		        ["linkedlist", "reverselist", "mergelist", "deletenode"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text=a.toUpperCase(); aSel.add(o); });
		    } else if(window.v8Cat === "hierarchy") {
		        barArea.style.display="none"; actArea.style.display="block"; 
		        if(delBtn) delBtn.style.display="block"; if(insBtn) insBtn.style.display="block"; if(searchBtn) { searchBtn.style.display="block"; searchBtn.innerText="SEARCH"; }
		        isGen = true;
		        ["binarytree"].forEach(a => { var o=document.createElement("option"); o.value=a; o.text="BST"; aSel.add(o); });
		    }
		    if(tlWrap) tlWrap.style.display = isGen ? "none" : "block";
		    if(prevBtn) prevBtn.style.display = isGen ? "none" : "block";
		    if(aSel.options.length > 0) {
		        var found = false;
		        for(var i=0; i<aSel.options.length; i++) { if(aSel.options[i].value === window.v8Algo) found = true; }
		        if(!found) window.v8Algo = aSel.options[0].value;
		        aSel.value = window.v8Algo;
		    }
		    if(!skipInit) initData(); 
		    renderCode(); refreshStage();
		}
		
		function generateTrace() {
		    var frames = [];
		    var data = JSON.parse(JSON.stringify(window.v8SortData));
		    var cmp = 0, swp = 0;
		
		    function addFrame(f) {
		        frames.push({
		            data: f.data || JSON.parse(JSON.stringify(data)),
		            line: f.line,
		            highlights: f.h || [],
		            hColor: f.c || "yellow",
		            hMap: f.hMap || null,
		            cmp: cmp, swp: swp,
		            tree: f.tree !== undefined ? (f.tree ? JSON.parse(JSON.stringify(f.tree)) : null) : (window.v8TreeData ? JSON.parse(JSON.stringify(window.v8TreeData)) : null),
		            treeVal: f.treeVal,
		            list: f.list || (Array.isArray(window.v8ListData) ? [...window.v8ListData] : []),
		            revIdx: f.revIdx,
		            l1: f.l1, l2: f.l2, merged: f.merged
		        });
		    }
		
		    if (window.v8Algo === "bubble") {
		        for (var i=0; i<data.length-1; i++) {
		            for (var j=0; j<data.length-i-1; j++) {
		                cmp++; addFrame({line:3, h:[j, j+1]});
		                if (data[j] > data[j+1]) { swp++; var t=data[j]; data[j]=data[j+1]; data[j+1]=t; addFrame({line:4, h:[j, j+1], c:"red"}); }
		            }
		        }
		    } else if (window.v8Algo === "selection") {
		        for (var i=0; i<data.length-1; i++) {
		            var m = i; addFrame({line:2, h:[m], c:"orange"});
		            for (var j=i+1; j<data.length; j++) {
		                cmp++; addFrame({line:4, h:[m, j]});
		                if (data[j] < data[m]) { m = j; addFrame({line:5, h:[m], c:"orange"}); }
		            }
		            swp++; var t=data[m]; data[m]=data[i]; data[i]=t; addFrame({line:8, h:[i, m], c:"#28a745"});
		        }
		    } else if (window.v8Algo === "insertion") {
		        for (var i=1; i<data.length; i++) {
		            var k = data[i], j = i - 1; addFrame({line:2, h:[i], c:"orange"});
		            while (j >= 0 && data[j] > k) { cmp++; data[j+1] = data[j]; addFrame({line:5, h:[j, j+1], c:"red"}); j--; }
		            data[j+1] = k; addFrame({line:8, h:[j+1], c:"#28a745"});
		        }
		    } else if (window.v8Algo === "quick") {
		        function qs(l, h) {
		            if (l < h) {
		                var pvt = data[h], idx = l; addFrame({line:2, hMap: {[h]:"purple"}});
		                for (var j=l; j<h; j++) {
		                    cmp++; addFrame({line:5, hMap: {[h]:"purple", [j]:"yellow", [idx]:"orange"}});
		                    if (data[j] < pvt) { swp++; var t=data[idx]; data[idx]=data[j]; data[j]=t; addFrame({line:6, hMap: {[h]:"purple", [j]:"red", [idx]:"red"}}); idx++; }
		                }
		                swp++; var t=data[idx]; data[idx]=data[h]; data[h]=t; addFrame({line:10, hMap: {[idx]:"#28a745"}});
		                var p = idx; addFrame({line:11, h:[p]}); qs(l, p - 1); qs(p + 1, h);
		            }
		        }
		        qs(0, data.length - 1);
		    } else if (window.v8Algo === "merge") {
		        function ms(l, r) {
		            if (l < r) {
		                var m = Math.floor((l+r)/2); ms(l, m); ms(m+1, r);
		                var L = data.slice(l, m+1), R = data.slice(m+1, r+1), i=0, j=0, k=l;
		                while(i<L.length && j<R.length) {
		                    cmp++; addFrame({line:6, h:[l+i, m+1+j]});
		                    if(L[i]<=R[j]) { data[k]=L[i]; i++; addFrame({line:7, h:[k], c:"red"}); } 
		                    else { data[k]=R[j]; j++; swp++; addFrame({line:8, h:[k], c:"red"}); }
		                    k++;
		                }
		                while(i<L.length) { data[k]=L[i]; i++; addFrame({line:10, h:[k-1], c:"#28a745"}); k++; }
		                while(j<R.length) { data[k]=R[j]; j++; addFrame({line:11, h:[k-1], c:"#28a745"}); k++; }
		            }
		        }
		        ms(0, data.length - 1);
		    } else if (window.v8Algo === "linearsearch") {
		        var target = parseInt(document.getElementById("v8_val_input").value);
		        if (isNaN(target)) { target = data[Math.floor(Math.random()*data.length)]; document.getElementById("v8_val_input").value = target; }
		        for(var i=0; i<data.length; i++) {
		            cmp++; addFrame({line:1, h:[i]});
		            cmp++; addFrame({line:2, h:[i]});
		            if(data[i] === target) { addFrame({line:3, h:[i], c:"#28a745"}); break; }
		        }
		    } else if (window.v8Algo === "binarysearch") {
		        var target = parseInt(document.getElementById("v8_val_input").value);
		        if (isNaN(target)) { target = data[Math.floor(Math.random()*data.length)]; document.getElementById("v8_val_input").value = target; }
		        var low = 0, high = data.length-1;
		        while(low <= high) {
		            var mid = Math.floor((low+high)/2); cmp++; addFrame({line:3, h:[mid]});
		            if(data[mid] === target) { addFrame({line:5, h:[mid], c:"#28a745"}); break; }
		            if(data[mid] < target) { low = mid + 1; addFrame({line:7, h:[mid], c:"gray"}); }
		            else { high = mid - 1; addFrame({line:9, h:[mid], c:"gray"}); }
		        }
		    } else if (window.v8Algo === "twopointers") {
		        data.sort((a,b)=>a-b); 
		        var val = parseInt(document.getElementById("v8_val_input").value);
		        var target = isNaN(val) ? (data[Math.floor(data.length/3)] + data[Math.floor(2*data.length/3)]) : val;
		        document.getElementById("v8_val_input").value = target;
		        var L = 0, R = data.length - 1;
		        while (L < R) {
		            cmp++; addFrame({line:3, hMap: {[L]:"red", [R]:"blue"}});
		            if (data[L] + data[R] === target) { addFrame({line:5, hMap: {[L]:"green", [R]:"green"}}); break; }
		            else if (data[L] + data[R] < target) { L++; addFrame({line:7, hMap: {[L]:"red", [R]:"blue"}}); }
		            else { R--; addFrame({line:9, hMap: {[L]:"red", [R]:"blue"}}); }
		        }
		    } else if (window.v8Algo === "slidingwindow") {
		        var k = parseInt(document.getElementById("v8_val_input").value);
		        if (isNaN(k) || k < 1 || k > data.length) k = 3; 
		        var sum = 0;
		        for (var i = 0; i < data.length; i++) {
		            sum += data[i]; 
		            var hMapO = {}; for(var w=Math.max(0, i-k+1); w<=i; w++) hMapO[w] = "orange";
		            addFrame({line:3, hMap: hMapO});
		            if (i >= k - 1) { 
		                var hMapG = {}; for(var w=i-k+1; w<=i; w++) hMapG[w] = "#28a745";
		                addFrame({line:5, hMap: hMapG}); 
		                sum -= data[i - k + 1]; 
		            }
		        }
		    } else if (window.v8Algo === "diffarray") {
		        var val = parseInt(document.getElementById("v8_val_input").value);
		        if (isNaN(val)) { val = 20; document.getElementById("v8_val_input").value = val; }
		        var l = Math.floor(data.length/4), r = Math.floor(data.length*3/4);
		        var initMap = {}; for(var w=l; w<=r; w++) initMap[w] = "yellow";
		        addFrame({line:1, hMap: initMap});
		        data[l] += val;
		        addFrame({line:2, hMap: {[l]: "red"}});
		        var nextR = r + 1;
		        if(nextR < data.length) {
		            addFrame({line:3, hMap: {[l]: "red", [nextR]: "orange"}});
		            data[nextR] -= val;
		            addFrame({line:4, hMap: {[l]: "red", [nextR]: "blue"}});
		        } else {
		             addFrame({line:3, hMap: {[l]: "red"}});
		        }
		    }
		    
		    frames.push({ data: JSON.parse(JSON.stringify(data)), line: -1, highlights: [], cmp: cmp, swp: swp, isComp: true });
		    var slider = document.getElementById("v8_timeline"); if(slider) { slider.max = frames.length - 1; slider.value = 0; }
		    return frames;
		}
		
		function stopAnimation() { clearInterval(window.v8Interval); window.v8IsPaused = true; }
		
		function doStep(isLocal) {
		    if (window.v8IsComplete) return;
		    if (window.v8Cat === "linear" || window.v8Cat === "hierarchy") {
		        if (window.v8Generator) {
		            var res = window.v8Generator.next();
		            if (res.done) { window.v8IsComplete = true; stopAnimation(); }
		        } else { window.v8IsComplete = true; stopAnimation(); }
		    } else {
		        if (window.v8Frames.length === 0) window.v8Frames = generateTrace();
		        if (window.v8CurrentFrame >= window.v8Frames.length) { window.v8IsComplete = true; stopAnimation(); return; }
		        renderFrame(window.v8CurrentFrame);
		        window.v8CurrentFrame++;
		    }
		}
		
		function moveFrame(delta) {
		    window.v8CurrentFrame = Math.max(0, Math.min(window.v8Frames.length - 1, window.v8CurrentFrame + delta));
		    renderFrame(window.v8CurrentFrame);
		}
		
		function seekFrame(idx) {
		    window.v8CurrentFrame = idx;
		    renderFrame(window.v8CurrentFrame);
		}
		
		function renderFrame(idx) {
		    var f = window.v8Frames[idx]; if(!f) return;
		    window.v8SortData = f.data; window.v8ListData = f.list; window.v8TreeData = f.tree;
		    compareCount = f.cmp; swapCount = f.swp; updateCounters();
		    refreshStage(f.highlights, f.hColor, f.treeVal, f.line, f.hMap, { revIdx: f.revIdx, l1: f.l1, l2: f.l2, merged: f.merged });
		    var slider = document.getElementById("v8_timeline"); if(slider) slider.value = idx;
		}
		
		function refreshStage(hArray, hColor, hTreeVal, line, hMap, extra) {
		    if(!root.stageArea) { root.stageArea = new createjs.Container(); root.addChild(root.stageArea); }
		    root.stageArea.removeAllChildren();
		    
		    var canvas = document.getElementById("canvas");
		    var cvsW = canvas ? canvas.getBoundingClientRect().width : 1000;
		    var scale = cvsW / 1000;
		    
		    var panel = document.getElementById("v8_panel");
		    var pWidthPhys = panel ? panel.offsetWidth : 280;
		    var pWidthLog = pWidthPhys / scale;
		    
		    var offset = pWidthLog + 30;
		    var drawW = stageW - offset - 20; 
		    
		    if (window.v8Cat === "sorting" || window.v8Cat === "searching" || window.v8Cat === "array_algo") {
		        var n = window.v8SortData.length, bw = (drawW/n)*0.8, sp = (drawW/n)*0.2;
		        for (var i=0; i<n; i++) {
		            var bh=(window.v8SortData[i]/100)*stageH, b=new createjs.Shape();
		            var iH = hArray && hArray.indexOf(i) !== -1;
		            var bColor = (window.v8IsComplete && window.v8Cat === "sorting") ? "#28a745" : (hMap && hMap[i] ? hMap[i] : (iH ? hColor : "hsl(200,70%,50%)"));
		            b.graphics.beginFill(bColor).drawRect(0,0,bw,-bh);
		            b.x = offset + i*(bw+sp)+(sp/2); b.y=stageH; root.stageArea.addChild(b);
		            var fontSize = Math.min(13, bw * 0.9);
		            if (fontSize > 8) {
		                var labelBg = new createjs.Shape(), lH = fontSize + 4;
		                labelBg.graphics.beginFill("rgba(0,0,0,0.6)").drawRoundRect(-bw/2, -lH, bw, lH, 3);
		                labelBg.x = b.x+bw/2; labelBg.y = stageH-2; root.stageArea.addChild(labelBg);
		                var t = new createjs.Text(window.v8SortData[i], "bold "+fontSize+"px Arial", iH?"#ff0":"#fff");
		                t.x = b.x+bw/2; t.y = stageH-4; t.textAlign = "center"; t.textBaseline = "bottom"; root.stageArea.addChild(t);
		            }
		        }
		    } else if (window.v8Cat === "linear") {
		        var cY=200, gap=110, rad=25;
		        var totalW = (window.v8ListData.length > 0) ? (window.v8ListData.length - 1) * gap : 0;
		        var sX = offset + (drawW - totalW) / 2;
		        for (var i=0; i<window.v8ListData.length; i++) {
		            var x=sX+i*gap; var nColor = hMap && hMap[i] ? hMap[i] : (hArray && hArray.indexOf(i)!==-1 ? (hColor||"yellow") : null);
		            root.stageArea.addChild(drawNode(x, cY, window.v8ListData[i], !!nColor, nColor));
		            if(i<window.v8ListData.length-1) {
		                var revIdx = extra && extra.revIdx !== undefined ? extra.revIdx : -1;
		                if (i < revIdx) drawLine(x+gap-rad, cY+15, x+rad, cY+15); else drawLine(x+rad, cY, x+gap-rad, cY);
		            }
		        }
		    } else if (window.v8Cat === "hierarchy") { renderBSTRecursive(window.v8TreeData, offset+(drawW/2), 60, drawW/4, hTreeVal, hColor); }
		    if(line !== undefined) highlightCode(line);
		}
		
		function renderBSTRecursive(node, x, y, xOffset, hVal, hColor) {
		    if (!node) return;
		    var isH = (node.val === hVal);
		    if (node.left) { drawLine(x, y, x - xOffset, y + 80); renderBSTRecursive(node.left, x - xOffset, y + 80, xOffset/2, hVal, hColor); }
		    if (node.right) { drawLine(x, y, x + xOffset, y + 80); renderBSTRecursive(node.right, x + xOffset, y + 80, xOffset/2, hVal, hColor); }
		    root.stageArea.addChild(drawNode(x, y, node.val, isH, (isH?hColor:"yellow")));
		}
		
		function startEngine() { clearInterval(window.v8Interval); window.v8Interval = setInterval(()=> {if(!window.v8IsPaused) doStep(false);}, window.v8Speed); }
		function resetCounters() { compareCount = 0; swapCount = 0; updateCounters(); }
		function resetProject(keepData) { 
		    stopAnimation(); window.v8Frames=[]; window.v8CurrentFrame=0; window.v8IsComplete=false; window.v8Generator=null;
		    if(!keepData) {
		        if(window.v8Cat === "sorting" || window.v8Cat === "searching" || window.v8Cat === "array_algo") initData();
		        if(window.v8Cat === "hierarchy") window.v8TreeData = null; 
		        if(window.v8Cat === "linear") window.v8ListData = [];
		    }
		    resetCounters(); refreshStage(); highlightCode(-1);
		}
		function updateStatus(t) { var el=document.getElementById("v8_status"); if(el) el.innerText=t; }
		function updateCounters() { var c=document.getElementById("v8_cC"), s=document.getElementById("v8_sC"); if(c) c.innerText=compareCount; if(s) s.innerText=swapCount; }
		function highlightCode(line) {
		    var box = document.getElementById("v8_code"); if(!box) return;
		    var len = (pCodes[window.v8Algo].code || []).length;
		    for(var i=0; i<len; i++) { 
		        var el = document.getElementById("v8_l_"+i); 
		        if(el) { el.style.background="transparent"; el.style.borderLeft="3px solid transparent"; } 
		    }
		    var target = document.getElementById("v8_l_"+line); 
		    if(target) { 
		        target.style.background="#37373d"; 
		        target.style.borderLeft="3px solid #0e7eff"; 
		        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); 
		    }
		}
		function drawNode(x, y, val, isH, color) {
		    var c = new createjs.Container(); c.x=x; c.y=y; var s = new createjs.Shape();
		    s.graphics.beginStroke(isH?(color||"yellow"):"#007bff").setStrokeStyle(3).beginFill(isH?"rgba(255,255,0,0.2)":"#111").drawCircle(0,0,22);
		    var t = new createjs.Text(val, "bold 13px Arial", isH?"#fff":"#00e5ff"); t.textAlign="center"; t.textBaseline="middle"; c.addChild(s,t); return c;
		}
		function drawLine(x1, y1, x2, y2) { var l = new createjs.Shape(); l.graphics.beginStroke("#555").setStrokeStyle(2).moveTo(x1,y1).lineTo(x2,y2); root.stageArea.addChild(l); }
		function renderCode() { 
		    var box = document.getElementById("v8_code"); if(!box) return; 
		    box.innerHTML = (pCodes[window.v8Algo].code || []).map((l, i) => {
		        var s = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		        s = s.replace(/\b(void|int|for|while|if|else|return|struct|Node|TreeNode|vector)\b/g, '<span style="color:#569cd6;">$1</span>');
		        s = s.replace(/\b(nullptr|null|true|false)\b/g, '<span style="color:#569cd6;">$1</span>');
		        s = s.replace(/\b(\d+)\b/g, '<span style="color:#b5cea8;">$1</span>');
		        s = s.replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span style="color:#dcdcaa;">$1</span>');
		        return `<div id="v8_l_${i}" style="padding-left:4px; border-left:3px solid transparent; transition:background 0.2s;">${s.replace(/ /g, "&nbsp;")}</div>`;
		    }).join("");
		}
		
		function initData() {
		    if(window.v8Cat === "sorting" || window.v8Cat === "searching" || window.v8Cat === "array_algo") {
		        window.v8SortData = []; for(var i=0; i<window.v8ArraySize; i++) window.v8SortData.push(Math.floor(Math.random()*80)+20);
		        if(window.v8Algo === "binarysearch") window.v8SortData.sort((a,b)=>a-b);
		        resetCounters(); window.v8Frames=[]; window.v8CurrentFrame=0; refreshStage();
		    }
		}
		
		function* linkedListInsertGen(val) { window.v8ListData.push(val); refreshStage([window.v8ListData.length-1], "#28a745"); yield; refreshStage(); }
		function* linkedListSearchGen(val) { 
		    refreshStage(null, null, null, 2); yield; 
		    for(var i=0; i<window.v8ListData.length; i++) { 
		        refreshStage([i], "yellow", null, 3); yield; 
		        refreshStage([i], "yellow", null, 4); yield; 
		        if(window.v8ListData[i] === val) { refreshStage([i], "#28a745", null, 5); return; } 
		        refreshStage([i], "yellow", null, 7); yield; 
		    } 
		    refreshStage(null, null, null, 9); 
		}
		function* linkedListDeleteGen(val) { for(var i=0; i<window.v8ListData.length; i++) { refreshStage([i], "yellow"); yield; if(window.v8ListData[i] === val) { refreshStage([i], "red"); yield; window.v8ListData.splice(i, 1); refreshStage(); return; } } refreshStage(); }
		
		function* bstInsertGen(val) {
		    if(!window.v8TreeData) { window.v8TreeData = { val: val, left: null, right: null }; refreshStage(null, "#28a745", val); yield; refreshStage(); return; }
		    var curr = window.v8TreeData;
		    while (curr) {
		        refreshStage(null, "yellow", curr.val); yield;
		        if (val < curr.val) { if (!curr.left) { curr.left = { val: val, left: null, right: null }; refreshStage(null, "#28a745", val); yield; break; } curr = curr.left; }
		        else if (val > curr.val) { if (!curr.right) { curr.right = { val: val, left: null, right: null }; refreshStage(null, "#28a745", val); yield; break; } curr = curr.right; }
		        else break;
		    }
		    refreshStage();
		}
		function* bstSearchGen(val) { 
		    var curr = window.v8TreeData; 
		    refreshStage(null, null, null, 2); yield;
		    while (curr) { 
		        refreshStage(null, "yellow", curr.val, 3); yield; 
		        if (curr.val === val) { refreshStage(null, "#28a745", curr.val, 4); return; } 
		        refreshStage(null, "yellow", curr.val, 6); yield;
		        if (val < curr.val) {
		            curr = curr.left;
		            refreshStage(null, "yellow", curr.val, 7); yield;
		        } else {
		            curr = curr.right;
		            refreshStage(null, "yellow", curr.val, 9); yield;
		        }
		    } 
		    refreshStage(null, null, null, 11); 
		}
		function* bstDeleteGen(val) {
		    function* deleteNodeGen(node, valToDel) {
		        if (!node) return null;
		        refreshStage(null, "yellow", node.val); yield;
		        if (valToDel < node.val) { node.left = yield* deleteNodeGen(node.left, valToDel); return node; }
		        else if (valToDel > node.val) { node.right = yield* deleteNodeGen(node.right, valToDel); return node; }
		        else {
		            refreshStage(null, "red", node.val); yield;
		            if (!node.left) return node.right; if (!node.right) return node.left;
		            var successor = node.right; while (successor.left) successor = successor.left;
		            refreshStage(null, "purple", successor.val); yield;
		            node.val = successor.val; refreshStage(null, "orange", node.val); yield;
		            node.right = yield* deleteNodeGen(node.right, successor.val); return node;
		        }
		    }
		    window.v8TreeData = yield* deleteNodeGen(window.v8TreeData, val); refreshStage();
		}
		
		window.v8_handleInsert = function() { var val = parseInt(document.getElementById("v8_val_input").value); if(isNaN(val)) return; stopAnimation(); window.v8IsPaused = false; window.v8IsComplete = false; if(window.v8Cat==="hierarchy") window.v8Generator=bstInsertGen(val); else if(window.v8Cat==="linear") window.v8Generator=linkedListInsertGen(val); doStep(true); startEngine(); };
		window.v8_handleSearch = function() { 
		    try {
		        var valInput = document.getElementById("v8_val_input");
		        var val = valInput ? parseInt(valInput.value) : NaN; 
		        if(isNaN(val) && (window.v8Cat!=="searching" && window.v8Cat!=="array_algo")) return; 
		        
		        stopAnimation(); 
		        window.v8IsPaused = false; 
		        window.v8IsComplete = false; 
		        
		        if(window.v8Cat==="hierarchy") { 
		            window.v8Generator = bstSearchGen(val); 
		        } else if(window.v8Cat==="linear") { 
		            window.v8Generator = linkedListSearchGen(val); 
		        } else if(window.v8Cat==="searching" || window.v8Cat==="array_algo") { 
		            window.v8Frames = []; 
		            window.v8CurrentFrame = 0; 
		            window.v8Generator = null;
		        }
		        
		        doStep(true); 
		        startEngine(); 
		    } catch (e) {
		        var st = document.getElementById("v8_status");
		        if(st) st.innerText = "Error: " + e.message;
		        console.error(e);
		    }
		};
		window.v8_handleDelete = function() { var val = parseInt(document.getElementById("v8_val_input").value); if(isNaN(val)) return; stopAnimation(); window.v8IsPaused = false; window.v8IsComplete = false; if(window.v8Cat==="hierarchy") window.v8Generator=bstDeleteGen(val); else if(window.v8Cat==="linear") window.v8Generator=linkedListDeleteGen(val); doStep(true); startEngine(); };
		
		root.beginBtn.addEventListener("click", () => { window.v8IsPaused=false; startEngine(); });
		root.pauseBtn.addEventListener("click", () => { window.v8IsPaused=true; });
		root.resetBtn.addEventListener("click", () => { resetProject(false); });
		
		setupUI(); initSocket();
		setTimeout(() => { if(!window.v8SortData.length) initData(); refreshStage(); }, 500);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.stageArea = new lib.Animation_Stage();
	this.stageArea.name = "stageArea";
	this.stageArea.setTransform(550,334.1,1,1,0,0,0,500,200);

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
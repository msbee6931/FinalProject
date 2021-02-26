(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classRoomList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_classRoom", this);
            obj._setContents("<ColumnInfo><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"room1\" type=\"STRING\" size=\"256\"/><Column id=\"room2\" type=\"STRING\" size=\"256\"/><Column id=\"room3\" type=\"STRING\" size=\"256\"/><Column id=\"room4\" type=\"STRING\" size=\"256\"/><Column id=\"room5\" type=\"STRING\" size=\"256\"/><Column id=\"room6\" type=\"STRING\" size=\"256\"/><Column id=\"room7\" type=\"STRING\" size=\"256\"/><Column id=\"room8\" type=\"STRING\" size=\"256\"/><Column id=\"room9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"classTime\">1교시</Col></Row><Row><Col id=\"classTime\">2교시</Col></Row><Row><Col id=\"classTime\">3교시</Col></Row><Row><Col id=\"classTime\">4교시</Col></Row><Row><Col id=\"classTime\">5교시</Col></Row><Row><Col id=\"classTime\">6교시</Col></Row><Row><Col id=\"classTime\">7교시</Col></Row><Row><Col id=\"classTime\">8교시</Col></Row><Row><Col id=\"classTime\">9교시</Col></Row><Row><Col id=\"classTime\">10교시</Col></Row><Row><Col id=\"classTime\">11교시</Col></Row><Row><Col id=\"classTime\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gr_classRoom","10","60","780","340",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_classRoom");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"oneFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"101\"/><Cell col=\"2\" text=\"102\"/><Cell col=\"3\" text=\"103\"/><Cell col=\"4\" text=\"104\"/><Cell col=\"5\" text=\"105\"/><Cell col=\"6\" text=\"106\"/><Cell col=\"7\" text=\"107\"/><Cell col=\"8\" text=\"108\"/><Cell col=\"9\" text=\"109\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"twoFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"201\"/><Cell col=\"2\" text=\"202\"/><Cell col=\"3\" text=\"203\"/><Cell col=\"4\" text=\"204\"/><Cell col=\"5\" text=\"205\"/><Cell col=\"6\" text=\"206\"/><Cell col=\"7\" text=\"207\"/><Cell col=\"8\" text=\"208\"/><Cell col=\"9\" text=\"209\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"threeFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"301\"/><Cell col=\"2\" text=\"302\"/><Cell col=\"3\" text=\"303\"/><Cell col=\"4\" text=\"304\"/><Cell col=\"5\" text=\"305\"/><Cell col=\"6\" text=\"306\"/><Cell col=\"7\" text=\"307\"/><Cell col=\"8\" text=\"308\"/><Cell col=\"9\" text=\"309\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"fourFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"401\"/><Cell col=\"2\" text=\"402\"/><Cell col=\"3\" text=\"403\"/><Cell col=\"4\" text=\"404\"/><Cell col=\"5\" text=\"405\"/><Cell col=\"6\" text=\"406\"/><Cell col=\"7\" text=\"407\"/><Cell col=\"8\" text=\"408\"/><Cell col=\"9\" text=\"409\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"fiveFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"501\"/><Cell col=\"2\" text=\"502\"/><Cell col=\"3\" text=\"503\"/><Cell col=\"4\" text=\"504\"/><Cell col=\"5\" text=\"505\"/><Cell col=\"6\" text=\"506\"/><Cell col=\"7\" text=\"507\"/><Cell col=\"8\" text=\"508\"/><Cell col=\"9\" text=\"509\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"sixFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"101\"/><Cell col=\"2\" text=\"102\"/><Cell col=\"3\" text=\"103\"/><Cell col=\"4\" text=\"104\"/><Cell col=\"5\" text=\"105\"/><Cell col=\"6\" text=\"106\"/><Cell col=\"7\" text=\"107\"/><Cell col=\"8\" text=\"108\"/><Cell col=\"9\" text=\"109\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"sevenFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"101\"/><Cell col=\"2\" text=\"102\"/><Cell col=\"3\" text=\"103\"/><Cell col=\"4\" text=\"104\"/><Cell col=\"5\" text=\"105\"/><Cell col=\"6\" text=\"106\"/><Cell col=\"7\" text=\"107\"/><Cell col=\"8\" text=\"108\"/><Cell col=\"9\" text=\"109\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format><Format id=\"eightFloor\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시간표\"/><Cell col=\"1\" text=\"101\"/><Cell col=\"2\" text=\"102\"/><Cell col=\"3\" text=\"103\"/><Cell col=\"4\" text=\"104\"/><Cell col=\"5\" text=\"105\"/><Cell col=\"6\" text=\"106\"/><Cell col=\"7\" text=\"107\"/><Cell col=\"8\" text=\"108\"/><Cell col=\"9\" text=\"109\"/></Band><Band id=\"body\"><Cell text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:room1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:room2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:room3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:room4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:room5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:room6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:room7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:room8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:room9\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","690","410","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("sta_classRoom","10","10","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("강의실 확인");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Combo("co_floor","690","10","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displayrowcount("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_floor_innerdataset = new nexacro.NormalDataset("co_floor_innerdataset", obj);
            co_floor_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1층</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2층</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3층</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4층</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5층</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6층</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7층</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8층</Col></Row></Rows>");
            obj.set_innerdataset(co_floor_innerdataset);
            obj.set_text("1층");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("co_week","580","10","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_week_innerdataset = new nexacro.NormalDataset("co_week_innerdataset", obj);
            co_week_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">mon</Col><Col id=\"datacolumn\">월요일</Col></Row><Row><Col id=\"codecolumn\">tue</Col><Col id=\"datacolumn\">화요일</Col></Row><Row><Col id=\"codecolumn\">wed</Col><Col id=\"datacolumn\">수요일</Col></Row><Row><Col id=\"codecolumn\">thr</Col><Col id=\"datacolumn\">목요일</Col></Row><Row><Col id=\"codecolumn\">fri</Col><Col id=\"datacolumn\">금요일</Col></Row><Row><Col id=\"codecolumn\">sat</Col><Col id=\"datacolumn\">토요일</Col></Row><Row><Col id=\"codecolumn\">sun</Col><Col id=\"datacolumn\">일요일</Col></Row></Rows>");
            obj.set_innerdataset(co_week_innerdataset);
            obj.set_text("월요일");
            obj.set_value("mon");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("classRoomList.xfdl", function() {

        this.classRoomList_onload = function(obj,e)
        {
        	this.transaction(
        		"classList"
        		,"/classList.nex"
        		,""
        		,"ds_class=out_ds"
        		,""
        		,"fn_callback"
        	);
        };
        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId =="classList"){
        		var floor = this.co_floor.value;
        		this.fn_filter_classRoom("월",floor);
        	}
        }
        this.fn_filter_classRoom = function(weekDay,floor){
        	this.ds_class.filter("classTime.indexOf('"+weekDay+"')>=0");
        		for(var i=0; i<this.ds_class.getRowCount(); i++){
        			var classTime = this.ds_class.getColumn(i,"classTime");
        			var classRoom = this.ds_class.getColumn(i,"classRoom");
        			trace("CLASSROOM"+ classRoom.substring(0,1))
        			if(classRoom.substring(0,1) == floor){
        				classRoom = "room"+classRoom.substring(2,3);
        				var time = classTime.split(")"); //요일(교시
        				for(var j=0; j<time.length-1; j++){
        					var weeks = time[j].split("("); //요일
        					if(weeks[0] == weekDay){
        						var week = weeks[1].split(" "); //교시
        						for(var k=0; k<week.length; k++){
        							week[k] = week[k].replace("교시","");
        							this.ds_classRoom.setColumn(week[k]-1,classRoom,"수업 있음")
        						}
        					}
        				}
        			}
        		}
        }
        this.btnClose_onclick = function(obj,e)
        {
        	this.close()
        };

        this.co_floor_onitemchanged = function(obj,e)
        {
        	for(var i=1; i<this.ds_classRoom.getColCount(); i++){
        		for(var j=0; j<this.ds_classRoom.getRowCount(); j++){
        			this.ds_classRoom.setColumn(j,i,"");
        		}
        	}
        	var weekDay = this.co_week.value;
        	if(weekDay == "mon"){
        		weekDay = "월";
        	}else if(weekDay == "tue"){
        		weekDay = "화";
        	}else if(weekDay == "wed"){
        		weekDay == "수";
        	}else if(weekDay == "thr"){
        		weekDay = "목";
        	}else if(weekDay == "fri"){
        		weekDay = "금";
        	}else if(weekDay == "sat"){
        		weekDay = "토";
        	}else if(weekDay == "sun"){
        		weekDay = "일";
        	}
        	if(e.postvalue == 1){
        		this.gr_classRoom.set_formatid("oneFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 2){
        		this.gr_classRoom.set_formatid("twoFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 3){
        		this.gr_classRoom.set_formatid("threeFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 4){
        		this.gr_classRoom.set_formatid("fourFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 5){
        		this.gr_classRoom.set_formatid("fiveFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 6){
        		this.gr_classRoom.set_formatid("sixFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 7){
        		this.gr_classRoom.set_formatid("sevenFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}else if(e.postvalue == 8){
        		this.gr_classRoom.set_formatid("eightFloor");
        		this.fn_filter_classRoom(weekDay,e.postvalue);
        	}

        };

        this.co_week_onitemchanged = function(obj,e)
        {
        	for(var i=1; i<this.ds_classRoom.getColCount(); i++){
        		for(var j=0; j<this.ds_classRoom.getRowCount(); j++){
        			this.ds_classRoom.setColumn(j,i,"");
        		}
        	}
        	var floor = this.co_floor.value;
        	if(e.postvalue == "mon"){
        		this.ds_class.filter("classTime.indexOf('월')>=0");
        		this.fn_filter_classRoom("월",floor);
        	}else if(e.postvalue == "tue"){
        		this.ds_class.filter("classTime.indexOf('화')>=0");
        		this.fn_filter_classRoom("화",floor);
        	}else if(e.postvalue == "wed"){
        		this.ds_class.filter("classTime.indexOf('수')>=0");
        		this.fn_filter_classRoom("수",floor);
        	}else if(e.postvalue == "thr"){
        		this.ds_class.filter("classTime.indexOf('목')>=0");
        		this.fn_filter_classRoom("목",floor);
        	}else if(e.postvalue == "fri"){
        		this.ds_class.filter("classTime.indexOf('금')>=0");
        		this.fn_filter_classRoom("금",floor);
        	}else if(e.postvalue == "sat"){
        		this.ds_class.filter("classTime.indexOf('토')>=0");
        		this.fn_filter_classRoom("토",floor);
        	}else if(e.postvalue == "sun"){
        		this.ds_class.filter("classTime.indexOf('일')>=0");
        		this.fn_filter_classRoom("일",floor);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classRoomList_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.co_floor.addEventHandler("onitemchanged",this.co_floor_onitemchanged,this);
            this.co_week.addEventHandler("onitemchanged",this.co_week_onitemchanged,this);
        };

        this.loadIncludeScript("classRoomList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

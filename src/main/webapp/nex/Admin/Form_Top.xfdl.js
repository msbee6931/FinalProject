(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("admin_alarm", this);
            obj._setContents("<ColumnInfo><Column id=\"confirm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("session", this);
            obj._setContents("<ColumnInfo><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로고위치");
            obj.set_background("#c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","200","0","1080","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#cfe1e0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout","1197","10","69","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","212","13","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("홈");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","244","13","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","314","13","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("님 환영합니다.");
            this.addChild(obj.name, obj);

            obj = new Button("alarm_btn","1128","10","64","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("알람");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","alarm_btn","text","admin_alarm","confirm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","sta_name","text","session","a_seq");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.objApp = nexacro.getApplication();

        //홈 버튼 클릭시 홈 화면 호출
        this.btn_home_onclick = function(obj,e)
        {
        	this.fn_setFrameSize("home");
        };

        this.fn_setFrameSize = function(type)
        {
        	alert("홈 확인");
        	if(type == "home"){
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        	} else {
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	}
        }





        this.btn_logout_onclick = function(obj,e)
        {
        	this.transaction(
        			"logout" //id
        			,"/logOut.log"//url
        			,""// inData
        			,""// outData
        			,""//strArg
        			,"fn_callback_logout"
        		);
        };
        this.fn_callback_logout=function(){
        	location.href="/";
        }
        this.alarm_btn_onclick = function(obj,e)
        {
        	var ObjCF = new ChildFrame();
        	ObjCF.init("pop_CorpDept", 0, 0, 800, 600);
        	ObjCF.set_formurl("admWork::alarm_admin.xfdl");

        	ObjCF.showModal(this.getOwnerFrame(), {}, this, "fn_callback_pop");
        };

        this.fn_callback_pop= function(){
        	this.transaction(
        			"alarm" //id
        			,"/alarm.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        }
        this.Form_Top_onload = function(obj,e)
        {
        			this.transaction(
        			"alarm" //id
        			,"/alarm.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);

        		this.transaction(
        			"sessionA" //id
        			,"/sessionA.nex"//url
        			,""// inData
        			,"session=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.sta_name.addEventHandler("onclick",this.sta_name_onclick,this);
            this.alarm_btn.addEventHandler("onclick",this.alarm_btn_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("noticeModify");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"n_seq\">1</Col><Col id=\"title\">1</Col><Col id=\"writedate\">1</Col><Col id=\"contents\">1</Col></Row><Row><Col id=\"n_seq\">2</Col><Col id=\"title\">2</Col><Col id=\"writedate\">2</Col><Col id=\"contents\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ScolarNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"n_seq\">1</Col><Col id=\"title\">1</Col><Col id=\"writedate\">1</Col><Col id=\"contents\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("공지사항 수정");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","40","1022","452",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("일반공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","140","2","730","421",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성일시\"/><Cell col=\"4\" text=\"내용\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:writedate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendardisplayinvalidtype=\"invalidtext\" calendardisplayinvalidtext=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:contents\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("장학공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","141","1","729","423",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","138","2","731","419",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ScolarNotice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"n_seq\"/><Cell col=\"2\" text=\"title\"/><Cell col=\"3\" text=\"writedate\"/><Cell col=\"4\" text=\"contents\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:writedate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\"/><Cell col=\"4\" text=\"bind:contents\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("noticeModify.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        };


        this.noticeModify_onload = function(obj,e)
        {
        	this.transaction(

        				"selectNotice" //1. strSvcID
        				,"/selectNomalNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        		this.transaction(

        					"selectScolarNotice" //1. strSvcID
        					,"/selectScolarNotice.notice" //2. strURL
        					,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        					,"ds_ScolarNotice=out_ds" //4.strOutDatasets -select Fds=Sds
        					,"" //5.strArgument text값
        					,"fn_callback" //6.strCallbackFunc
        				);
        };

        this.Tab00_Tabpage1_Grid00_oncelldblclick = function(obj,e)
        {
        	var n_seq = this.ds_Notice.getColumn(e.row,"n_seq");

        	var objCF = new ChildFrame();
        	objCF.init("NomalNotice_Info",400,100,900,600);
        	objCF.set_titletext(false);
        	objCF.set_formurl("admWork::nomalNotice_Info.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{n_seq:n_seq},
        		this,
        		"fn_callback"
        	);
        };


        this.Tab00_Tabpage1_Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0; i<this.ds_Notice.rowcount;i++){
        			this.ds_Notice.setColumn(i,"chk",check);
        		}
        	}

        	var objDs = this.objects[obj.binddataset];
        	for(var i = 1; i<obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1,i);
        		var nLen = sHeadText.length - 1;
        		if(i== e.cell)
        		{
        		  var sColId = (obj.getCellProperty("body",e.col,"text")).toString().split(":");
        		  if(sHeadText.substr(nLen) == "▲")
        		  {
        			obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen)+ "▼");
        			objDs.set_keystring("S:-"+sColId[1]);
        		  }
        		  else if (sHeadText.substr(nLen) == "▼")
        		  {
        			obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen)+"▲");
        			objDs.set_keystring("S:+"+sColId[1]);
        		  }
        		  else
        		  {
        		   obj.setCellProperty("head",i,"text", sHeadText+"▲");
        		   objDs.set_keystring("S:+"+sColId[1]);
        		  }
        		}
        		else
        		{
        			if(sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen));
        			}
        		}

        	}

        }

        this.Tab00_Tabpage2_Grid00_oncelldblclick = function(obj,e)
        {
        	var n_seq = this.ds_ScolarNotice.getColumn(e.row,"n_seq");

        	var objCF = new ChildFrame();
        	objCF.init("ScolarNotice_Info",400,100,900,600);
        	objCF.set_titletext(false);
        	objCF.set_formurl("admWork::scolarNotice_Info.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{n_seq:n_seq},
        		this,
        		"fn_callback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.noticeModify_onload,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage1_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage2_Grid00_oncelldblclick,this);
        };

        this.loadIncludeScript("noticeModify.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

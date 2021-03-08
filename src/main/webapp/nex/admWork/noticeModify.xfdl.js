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
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공지사항 수정");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","40","1022","452",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("일반공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","1020","420",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일시\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"학과코드\"/></Band><Band id=\"body\"><Cell text=\"bind:n_seq\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:writedate\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:contents\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:deptcode\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("장학공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","1020","420",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일시\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"학과코드\"/></Band><Band id=\"body\"><Cell text=\"bind:n_seq\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:title\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:writedate\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:contents\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:deptcode\" displaytype=\"text\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("학사공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","1020","420",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일시\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"학과코드\"/></Band><Band id=\"body\"><Cell text=\"bind:n_seq\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:title\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:writedate\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:contents\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:deptcode\" displaytype=\"text\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("취업공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","1020","420",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일시\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"학과코드\"/></Band><Band id=\"body\"><Cell text=\"bind:n_seq\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:title\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:writedate\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:contents\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:deptcode\" displaytype=\"text\"/></Band></Format></Formats>");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

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
        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        this.fileName = "";
        this.fileSize = "";

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

        };

        this.Tab00_Tabpage1_Grid00_oncelldblclick = function(obj,e)
        {
        	var n_seq = this.ds_Notice.getColumn(e.row,"n_seq");
        	trace(n_seq);

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
        	var objDs = this.objects[obj.binddataset];
        	for(var i = 0; i<obj.getCellCount("head"); i++)
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

        this.Tab00_onchanged = function(obj,e)
        {
        	if(e.postindex == 0){
        		this.transaction(

        				"selectNomalNotice" //1. strSvcID
        				,"/selectNomalNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        	}else if(e.postindex == 1){
        		this.transaction(

        				"selectScolarNotice" //1. strSvcID
        				,"/selectScolarNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        	}else if(e.postindex == 2){
        		this.transaction(

        				"selectBachelorNotice" //1. strSvcID
        				,"/selectBachelorNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        	}else if(e.postindex == 3){
        		this.transaction(

        				"selectEmployNotice" //1. strSvcID
        				,"/selectEmployNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        	}
        };

        this.Tab00_Tabpage3_Grid00_oncelldblclick = function(obj,e)
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

        this.Tab00_Tabpage4_Grid00_oncelldblclick = function(obj,e)
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

        this.Tab00_Tabpage2_Grid00_onheadclick = function(obj,e)
        {
        		var objDs = this.objects[obj.binddataset];
        	for(var i = 0; i<obj.getCellCount("head"); i++)
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
        };

        this.Tab00_Tabpage3_Grid00_onheadclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
        	for(var i = 0; i<obj.getCellCount("head"); i++)
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
        };

        this.Tab00_Tabpage4_Grid00_onheadclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
        	for(var i = 0; i<obj.getCellCount("head"); i++)
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
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.noticeModify_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage1_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage2_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage2_Grid00_onheadclick,this);
            this.Tab00.Tabpage3.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage3_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage3.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage3_Grid00_onheadclick,this);
            this.Tab00.Tabpage4.form.Grid00.addEventHandler("oncelldblclick",this.Tab00_Tabpage4_Grid00_oncelldblclick,this);
            this.Tab00.Tabpage4.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage4_Grid00_onheadclick,this);
        };

        this.loadIncludeScript("noticeModify.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

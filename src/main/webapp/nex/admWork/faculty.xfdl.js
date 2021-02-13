(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("faculty");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_faculty", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"f_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","40","1040","425",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_faculty");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"교직원번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"나이\"/><Cell col=\"4\" text=\"email\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:f_seq\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:name\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:age\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:email\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:contact\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:address\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrive","1020","10","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1020","465","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","960","465","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","20","10","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_search","100","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_search_innerdataset = new nexacro.NormalDataset("cb_search_innerdataset", obj);
            cb_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">f_seq</Col><Col id=\"datacolumn\">교직원번호</Col></Row></Rows>");
            obj.set_innerdataset(cb_search_innerdataset);
            obj.set_text("전체");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","220","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","330","10","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("faculty.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.fn_update_faculty = function(id,url){	//업데이트 따로 뺀것
          this.transaction(
                    id
                    ,url
                    ,"in_ds=ds_faculty:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        }


        this.btn_retrive_onclick = function(obj,e)
        {
        	this.transaction(

        				"ds_facultylist" //1. strSvcID
        				,"/facultylist.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_faculty=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        };

        this.btn_del_onclick = function(obj,e)
        {
        	let arr = this.ds_faculty.extractRows("chk==1");

        	if(arr.length == 0 || arr.length == -1){
        		alert("선택된 항목이 없습니다");return;}

        	if(this.confirm("삭제하시겠습니까?")){
        		this.ds_faculty.deleteMultiRows(arr);
        		this.fn_update_faculty("dsdeleteFac","/deleteFaculty.nex");
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        		this.fn_update_faculty("dsUpdateFac","/updateFaculty.nex");
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	let objCF = new ChildFrame();
        	objCF.init("insertpop",0,0,300,310,0,0,"admWork::insertFaculty.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{},this,"fn_callback");
        };


        this.btn_search_onclick = function(obj,e)
        {
        	let cbValue = this.cb_search.value;
        	let edtValue = this.edt_search.value;

        	if(cbValue == "f_seq"){
        		this.ds_faculty.filter(cbValue +"=='"+edtValue+"'");
        	}else{
        		this.ds_faculty.filter("");
        	}
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0; i<this.ds_faculty.rowcount;i++){
        			this.ds_faculty.setColumn(i,"chk",check);
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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_retrive.addEventHandler("onclick",this.btn_retrive_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.cb_search.addEventHandler("onitemchanged",this.cb_search_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("faculty.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

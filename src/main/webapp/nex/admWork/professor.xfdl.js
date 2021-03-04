(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("professor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"name\">남자</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"name\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","30","10",null,null,"26","30",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","35","70",null,null,"35","80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_professor");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"교수번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"email\"/><Cell col=\"6\" text=\"학과분류\"/><Cell col=\"7\" text=\"학과\"/><Cell col=\"8\" text=\"전화번호\" edittype=\"normal\"/><Cell col=\"9\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:p_seq\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:name\" edittype=\"normal\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:gender\" combodataset=\"ds_gender\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"4\" text=\"bind:secNumber\" edittype=\"mask\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"###### - #######\"/><Cell col=\"5\" text=\"bind:email\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:colCode\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"colCode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"7\" text=\"bind:deptCode\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:contact\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:address\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrive",null,"28","100","25","35",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체조회");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"100","25","35","35",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","140","35",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"28","100","25","140",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입력");
            obj.set_cssclass("btn_insert");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_search","35","28","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var cb_search_innerdataset = new nexacro.NormalDataset("cb_search_innerdataset", obj);
            cb_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(cb_search_innerdataset);
            obj.set_text("전체");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","140","28","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","250","28","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
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
        this.registerScript("professor.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }
        this.fn_update_professor = function(id,url){	//업데이트 따로 뺀것
          this.transaction(
                    id
                    ,url
                    ,"in_ds=ds_professor:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        }



        this.btn_retrive_onclick = function(obj,e)
        {
        	this.transaction(

        				"ds_retrivepro" //1. strSvcID
        				,"/professorList.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_professor=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);

        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        		this.fn_update_professor('dsUpdatepro','/updateProfessor.nex');
        	}

        };

        this.btn_del_onclick = function(obj,e)
        {
        	let arr = this.ds_professor.extractRows("chk==1");

        	if(arr.length == 0 || arr.length == -1){
        		alert("선택한 항목이 없습니다");
        		return;
        	}
        	if(this.confirm("삭제하시겠습니까?")){
        		this.ds_professor.deleteMultiRows(arr);
        		this.fn_update_professor('dsDeletePro','/deleteProfessor.nex');
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	let objCF = new ChildFrame();
        	objCF.init("insertpop",0,0,300,350,0,0,"admWork::insertProfessor.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{},this,"fn_callback");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	let cbValue = this.cb_search.value;
        	let edtValue = this.edt_search.text;

        	if(cbValue == "name"){
        		this.ds_professor.filter(cbValue+".indexOf('"+edtValue+"')>=0");
        	}else{
        		this.ds_professor.filter("");
        	}
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0; i<this.ds_professor.rowcount;i++){
        			this.ds_professor.setColumn(i,"chk",check);
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
        this.professor_onload = function(obj,e)
        {
        	this.transaction(

        				"ds_retrivepro" //1. strSvcID
        				,"/professorList.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_professor=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.professor_onload,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_retrive.addEventHandler("onclick",this.btn_retrive_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("professor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

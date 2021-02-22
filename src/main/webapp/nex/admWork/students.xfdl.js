(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("students");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"name\">남자</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"name\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rest", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">휴학</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">재학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_colGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">1학년</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">2학년</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">3학년</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">4학년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","30","70","1020","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_students");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"84\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"학과분류\"/><Cell col=\"5\" text=\"학과\"/><Cell col=\"6\" text=\"이름\"/><Cell col=\"7\" text=\"주민번호\"/><Cell col=\"8\" text=\"email\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"주소\"/><Cell col=\"11\" text=\"장학금\"/><Cell col=\"12\" text=\"휴학여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:s_seq\"/><Cell col=\"2\" text=\"bind:gender\" edittype=\"combo\" combodataset=\"ds_gender\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"3\" text=\"bind:colGrade\" edittype=\"combo\" combodataset=\"ds_colGrade\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"4\" text=\"bind:colCode\" edittype=\"combo\" combodataset=\"colCode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"5\" text=\"bind:deptCode\" edittype=\"combo\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"6\" text=\"bind:name\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:secNumber\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###### - #######\"/><Cell col=\"8\" text=\"bind:email\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:contact\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:address\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:scholarship\" edittype=\"normal\"/><Cell col=\"12\" text=\"bind:rest\" edittype=\"combo\" combodataset=\"ds_rest\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrive","950","25","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","950","460","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","840","460","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","840","25","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입력");
            obj.set_cssclass("btn_insert");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_search","30","28","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var cb_search_innerdataset = new nexacro.NormalDataset("cb_search_innerdataset", obj);
            cb_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">s_seq</Col><Col id=\"datacolumn\">학번</Col></Row></Rows>");
            obj.set_innerdataset(cb_search_innerdataset);
            obj.set_text("전체");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","140","28","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","250","28","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29",null,null,"50",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","50",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","50",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
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
        this.registerScript("students.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }
        this.fn_update_students = function(id,url){	//업데이트 따로 뺀것
          this.transaction(
                    id
                    ,url
                    ,"in_ds=ds_students:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        }


        this.btn_retrive_onclick = function(obj,e)
        {
        	this.transaction(

        				"ds_retrive" //1. strSvcID
        				,"/studentslist.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_students=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        	this.ds_students.filter("");
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?")){
        	this.fn_update_students("dsUpdate","/updateStudent.nex");
        	trace(this.ds_students.getColumnInfo("birth"));
        	}

        };

        this.btn_del_onclick = function(obj,e)
        {
        	let arr = this.ds_students.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	if(this.confirm("삭제하시겠습니까?")){
        	this.ds_students.deleteMultiRows(arr);
        	this.fn_update_students("dsDel","/deleteStudent.nex");
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	let x = this.width/2;
        	let y = this.height/2;
        	let objCF = new ChildFrame();
        	objCF.init("insertpop",0,0,300,550,0,0,"admWork::insertStudent.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{},this,"fn_callback");
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell == 0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0; i<this.ds_students.rowcount; i++){
        		 this.ds_students.setColumn(i,"chk",check);
        		}
        	}

        	var objDs = this.objects[obj.binddataset];
        	for (var i = 1; i < obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1, i);
        		var nLen   = sHeadText.length - 1;
        		if (i == e.cell)
        		{
        			var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":");
        			if (sHeadText.substr(nLen) == "▲")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
        				objDs.set_keystring("S:-" + sColId[1]);
        			}
        			else if (sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        			else
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText+"▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		else
        		{
        			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}
        		}
        	}

        };

        this.btn_search_onclick = function(obj,e)
        {
        	let cbValue = this.cb_search.value;
        	let edtValue = this.edt_search.text;
        	trace(this.cb_search.value);
        	trace(cbValue);
        	trace(this.edt_search.text);
        	trace(edtValue);

        	if(cbValue == "s_seq"){
        		this.ds_students.filter(cbValue +"=='"+edtValue+"'");
        		trace(this.ds_students);
        	}else{
        		this.ds_students.filter("");
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

        this.loadIncludeScript("students.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

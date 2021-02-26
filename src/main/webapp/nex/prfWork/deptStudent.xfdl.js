(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptStudent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_stdList","29","60",null,null,"640","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_students");
            obj.set_autofittype("col");

            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"93\"/><Column size=\"65\"/><Column size=\"68\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"재적상태\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#########\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:colGrade\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"3\" text=\"expr:gender=='M'?'남':'여'\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"4\" text=\"bind:rest\" textAlign=\"center\" expr=\"expr:rest=='N'?'재학':'휴학'\" cursor=\"pointer\"/></Band></Format></Formats>");

            this.addChild(obj.name, obj);

            obj = new Div("div_Info","460","20",null,null,"40","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학생 정보");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","20","70","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("0");
            obj.set_text("＊ 성명");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_enroll","20","110","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("1");
            obj.set_text("＊ 입학일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_colGrade","271","70","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("2");
            obj.set_text("＊ 학년");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_gender","271","110","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("3");
            obj.set_text("＊ 성별");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_contact","20","270","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("4");
            obj.set_text("＊ 연락처");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_address","20","310","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("5");
            obj.set_text("＊ 주소");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_email","271","270","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("6");
            obj.set_text("＊ 이메일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_name","90","78","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_enroll","90","118","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_colGrade","341","78","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_email","341","278","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_contact","90","278","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_address","90","318","450","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Radio("rd_gender","341","105","190","50",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_Info_form_rd_gender_innerdataset = new nexacro.NormalDataset("div_Info_form_rd_gender_innerdataset", obj);
            div_Info_form_rd_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(div_Info_form_rd_gender_innerdataset);
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_dept","271","150","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("14");
            obj.set_text("＊ 학과");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_dept","341","158","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_code","20","30","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("16");
            obj.set_text("＊ 학번");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_code","90","38","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_col","20","150","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("18");
            obj.set_text("＊ 계열");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_col","89","158","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_birth","271","30","70","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("20");
            obj.set_text("＊ 생년월일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_birth","341","38","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Div("div_search","30","20",null,null,"640","461",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grade","5","3","30","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("학년");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("co_grade","34","3","100","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_co_grade_innerdataset = new nexacro.NormalDataset("div_search_form_co_grade_innerdataset", obj);
            div_search_form_co_grade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학년</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3학년</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4학년</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_co_grade_innerdataset);
            obj.set_text("전체");
            obj.set_value("\"\"");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("co_category","144","3","100","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_tooltiptext("학번은 일치할 경우만 검색가능합니다");
            var div_search_form_co_category_innerdataset = new nexacro.NormalDataset("div_search_form_co_category_innerdataset", obj);
            div_search_form_co_category_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">s_seq</Col><Col id=\"datacolumn\">학번</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_co_category_innerdataset);
            obj.set_text("학번");
            obj.set_value("s_seq");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_search","248","3","108","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch","366","3","30","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

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
        this.registerScript("deptStudent.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.deptStudent_onload = function(obj,e)
        {
        	var deptCode= this.objApp.gds_professor.getColumn(0,"deptCode");
        	this.transaction(
        		"deptStudents"
        		,"/deptStudents.pro"
        		,""
        		,"ds_students=out_ds"
        		,"deptCode="+deptCode
        		,"fn_callback"
        	);
        };
        this.fn_callback =function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("Error["+errCd+"]:"+errMsg);
        	}
        }
        this.gr_stdList_onheadclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
        	for (var i = 1; i < obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1, i); //Head영역은 index가 -1
        		var nLen   = sHeadText.length - 1;    //텍스트 길이
        		if (i == e.cell)
        		{
        			var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":"); //Text값이 bind:형태로 나오기 떄문에
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
        				obj.setCellProperty( "head", i, "text", sHeadText+"▲"); //없을 경우 기호 붙힘
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		else //선택된 Head 제외하고 모두 기호 삭제
        		{
        			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}
        		}
        	}
        };
        this.gr_stdList_oncellclick = function(obj,e)
        {
        	var code = this.ds_students.getColumn(e.row,"s_seq").toString();
        	var name = this.ds_students.getColumn(e.row,"name");
        	var enroll = "20"+code.substring(e.row,2)+"년 03월 02일";
        	var colGrade = this.ds_students.getColumn(e.row,"colGrade");
        	var birth = this.ds_students.getColumn(e.row,"secNumber");
        	birth = birth.substring(0,6);
        	var gender = this.ds_students.getColumn(e.row,"gender");
        	var deptCode = this.ds_students.getColumn(e.row,"deptCode");
        	var colCode = this.ds_students.getColumn(e.row,"colCode");
        	var contact = this.ds_students.getColumn(e.row,"contact");
        	var email = this.ds_students.getColumn(e.row,"email");
        	var address = this.ds_students.getColumn(e.row,"address");



        	var deptRow = this.objApp.deptCode.findRow("code",deptCode);
        	var dept = this.objApp.deptCode.getColumn(deptRow,"name");

        	var colRow = this.objApp.colCode.findRow("code",colCode);
        	var col = this.objApp.colCode.getColumn(colRow,"name");

        	this.div_Info.form.edt_code.set_value(code);
        	this.div_Info.form.edt_name.set_value(name);
        	this.div_Info.form.edt_enroll.set_value(enroll);
        	this.div_Info.form.edt_colGrade.set_value(colGrade);
        	this.div_Info.form.rd_gender.set_value(gender);
        	this.div_Info.form.edt_birth.set_value(birth);
        	this.div_Info.form.edt_dept.set_value(dept);
        	this.div_Info.form.edt_col.set_value(col);
        	this.div_Info.form.edt_contact.set_value(contact);
        	this.div_Info.form.edt_email.set_value(email);
        	this.div_Info.form.edt_address.set_value(address);
        };

        this.div_search_co_grade_onitemchanged = function(obj,e)
        {
        	this.ds_students.filter("colGrade.indexOf('"+e.postvalue+"')>=0");
        };


        this.div_search_btnSearch_onclick = function(obj,e)
        {
        	var colGrade = this.div_search.form.co_grade.value;
        	var category = this.div_search.form.co_category.value;
        	var text = this.div_search.form.edt_search.text;
        	if(category =="s_seq"){
        		this.ds_students.filter("s_seq=='"+text+"' && colGrade.indexOf('"+colGrade+"')>=0");
        	}else{
        		this.ds_students.filter("name.indexOf('"+text+"')>=0 && colGrade.indexOf('"+colGrade+"')>=0");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptStudent_onload,this);
            this.gr_stdList.addEventHandler("onheadclick",this.gr_stdList_onheadclick,this);
            this.gr_stdList.addEventHandler("oncellclick",this.gr_stdList_oncellclick,this);
            this.div_Info.form.sta_code.addEventHandler("onclick",this.div_Info_sta_code_onclick,this);
            this.div_search.form.co_grade.addEventHandler("onitemchanged",this.div_search_co_grade_onitemchanged,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.div_search_btnSearch_onclick,this);
        };

        this.loadIncludeScript("deptStudent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

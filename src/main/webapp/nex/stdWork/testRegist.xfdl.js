(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ClassRegist");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_part", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\">전체</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">전공필수</Col></Row><Row><Col id=\"id\">B</Col><Col id=\"name\">전공선택</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">교양필수</Col></Row><Row><Col id=\"id\">D</Col><Col id=\"name\">지정교양</Col></Row><Row><Col id=\"id\">E</Col><Col id=\"name\">지정교양</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">계열기초</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myClass", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTable", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"time\">1교시</Col></Row><Row><Col id=\"time\">2교시</Col></Row><Row><Col id=\"time\">3교시</Col></Row><Row><Col id=\"time\">4교시</Col></Row><Row><Col id=\"time\">5교시</Col></Row><Row><Col id=\"time\">6교시</Col></Row><Row><Col id=\"time\">7교시</Col></Row><Row><Col id=\"time\">8교시</Col></Row><Row><Col id=\"time\">9교시</Col></Row><Row><Col id=\"time\">10교시</Col></Row><Row><Col id=\"time\">11교시</Col></Row><Row><Col id=\"time\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTableCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myBasket", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col><Col id=\"code\"/></Row><Row><Col id=\"code\">1011</Col><Col id=\"name\">국어국문학과</Col></Row><Row><Col id=\"code\">1012</Col><Col id=\"name\">영어영문학과</Col></Row><Row><Col id=\"code\">1013</Col><Col id=\"name\">국사학과</Col></Row><Row><Col id=\"code\">1014</Col><Col id=\"name\">철학과</Col></Row><Row><Col id=\"code\">2021</Col><Col id=\"name\">사회복지학과</Col></Row><Row><Col id=\"code\">2022</Col><Col id=\"name\">경제학부</Col></Row><Row><Col id=\"code\">2023</Col><Col id=\"name\">사회학과</Col></Row><Row><Col id=\"code\">2024</Col><Col id=\"name\">심리학과</Col></Row><Row><Col id=\"code\">3031</Col><Col id=\"name\">통계학과</Col></Row><Row><Col id=\"code\">3032</Col><Col id=\"name\">화학부</Col></Row><Row><Col id=\"code\">3033</Col><Col id=\"name\">생명과학부</Col></Row><Row><Col id=\"code\">4041</Col><Col id=\"name\">간호학부</Col></Row><Row><Col id=\"code\">5051</Col><Col id=\"name\">전기공학부</Col></Row><Row><Col id=\"code\">5052</Col><Col id=\"name\">컴퓨터공학부</Col></Row><Row><Col id=\"code\">5053</Col><Col id=\"name\">화학생물공학부</Col></Row><Row><Col id=\"code\">5054</Col><Col id=\"name\">건축학과</Col></Row><Row><Col id=\"code\">5055</Col><Col id=\"name\">산업공학과</Col></Row><Row><Col id=\"code\">6061</Col><Col id=\"name\">교육학과</Col></Row><Row><Col id=\"code\">6062</Col><Col id=\"name\">국어교육과</Col></Row><Row><Col id=\"code\">6063</Col><Col id=\"name\">영어교육과</Col></Row><Row><Col id=\"code\">6064</Col><Col id=\"name\">수학교육과</Col></Row><Row><Col id=\"code\">6065</Col><Col id=\"name\">체육교육과</Col></Row><Row><Col id=\"code\">7071</Col><Col id=\"name\">교양학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Info","30","10","200",null,null,"30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Info");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","59","80","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("0");
            obj.set_text("학과");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_01","9","83","80","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_02","9","107","80","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_03","9","131","80","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("3");
            obj.set_text("수강학년");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","9","155","80","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("4");
            obj.set_text("신청가능학점");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static01","9","189","120","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("5");
            obj.set_text("● 개설강좌 조회");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_04","9","219","60","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("6");
            obj.set_text("학과");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","9","249","60","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("7");
            obj.set_text("이수구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","9","279","60","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("8");
            obj.set_text("과목명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_name","89","107","100","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_line");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_grade","89","131","100","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_line");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_point","89","155","100","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_line");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_sSeq","89","83","100","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_line");
            this.div_Info.addChild(obj.name, obj);

            obj = new Combo("co_dept","69","219","120","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("13");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_innerdataset("ds_deptCode");
            obj.set_cssclass("gg1123412");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_Info.addChild(obj.name, obj);

            obj = new Combo("co_part","69","249","120","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_part");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("gg1123412");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_className","69","279","120","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("15");
            obj.set_cssclass("gg1123412");
            this.div_Info.addChild(obj.name, obj);

            obj = new Button("btnClassSearch","129","314","60","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_timeTable","14","389","110","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("17");
            obj.set_text("시간표 조회");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.div_Info.addChild(obj.name, obj);

            obj = new Button("classTime","129","389","60","30",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_semester","9","29","180","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("19");
            obj.set_text("");
            this.div_Info.addChild(obj.name, obj);

            obj = new Combo("co_myDept","89","59","100","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("20");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_default");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("Static01_00","240","14","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("▷ 개설강좌 리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_classList","240","43",null,null,"29","282",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"44\"/><Column size=\"68\"/><Column size=\"216\"/><Column size=\"47\"/><Column size=\"57\"/><Column size=\"181\"/><Column size=\"38\"/><Column size=\"58\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"과목코드\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"담당교수\"/><Cell col=\"6\" text=\"강의시간\"/><Cell col=\"7\" text=\"담기\"/><Cell col=\"8\" text=\"강의실\"/><Cell col=\"9\" text=\"신청/제한인원\"/></Band><Band id=\"body\"><Cell text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"1\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"text\" maskeditformat=\"########\"/><Cell col=\"3\" text=\"bind:className\" textDecoration=\"underline\" tooltiptext=\"수업계획서 보기\" textAlign=\"center\" cursor=\"pointer\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" text=\"담기\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"8\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:basketLimit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","240","242","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("▷ 장바구니 리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_basketList","240","271",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_myBasket");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"60\"/><Column size=\"46\"/><Column size=\"75\"/><Column size=\"236\"/><Column size=\"47\"/><Column size=\"68\"/><Column size=\"226\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"취소\"/><Cell col=\"1\" text=\"이수구분\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"담당교수\"/><Cell col=\"7\" text=\"강의시간\"/><Cell col=\"8\" text=\"강의실\"/></Band><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" text=\"취소\" cursor=\"pointer\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"text\" maskeditformat=\"########\"/><Cell col=\"4\" text=\"bind:className\" cursor=\"pointer\" textDecoration=\"underline\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"8\" text=\"bind:classRoom\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testRegist.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.ClassRegist_onload = function(obj,e)
        {
        	var sCode = this.objApp.gds_students.getColumn(0,"s_seq");
        	var sName = this.objApp.gds_students.getColumn(0,"name");
        	var deptCode = this.objApp.gds_students.getColumn(0,"deptCode");
        	var grade = this.objApp.gds_students.getColumn(0,"colGrade");
        	this.div_Info.form.sta_sSeq.set_text(sCode);
        	this.div_Info.form.sta_name.set_text(sName);
        	this.div_Info.form.co_myDept.set_value(deptCode);
        	this.div_Info.form.sta_grade.set_text(grade);
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.div_Info.form.sta_semester.set_text(objDate.getFullYear()+"년 1학기");
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		this.div_Info.form.sta_semester.set_text(objDate.getFullYear()+"년 2학기");
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	//해당 학기 개설 과목 리스트 가져옴
        	this.transaction(
        		"classList"
        		,"/classListYear.nex"
        		,""
        		,"ds_class=out_ds"
        		,"startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        	//로그인정보로 학생정보 가져와서 callback으로 값을 가져와서 두 개의 transaction callback함수에서 실행
        	//지금은 과목 명과 코드만 임시로 입력해둠
        	//수강신청 항목 가져옴(아직 테이블 수정) - 해당 과목 ds_class에서 filter후 myClass로 Copy

        	this.transaction(
        		"myBasketList"
        		,"/myBasketList.nex"
        		,""
        		,"ds_myBasket=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        	this.transaction(
        		"myClassList"
        		,"/myClassList.nex"
        		,""
        		,"ds_myClass=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        	//시간표 가져옴(신청 시 시간표와 비교하기 위해)
        	this.transaction(
        		"stdTimeTableList"
        		,"/stdTimeTableList.nex"
        		,""
        		,"ds_stdTimeTableCopy=out_ds "
        		,"sCode="+sCode  + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        };
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "myBasketList"){
        		var nPoint = 0;
        		for(var i=0; i<this.ds_myBasket.getRowCount(); i++){
        			var classSeq = this.ds_myBasket.getColumn(i,"classSeq");
        			var nRow = this.ds_class.findRow("classSeq",classSeq);
        			this.ds_class.deleteRow(nRow);
        			var point = this.ds_myBasket.getColumn(i,"classPoint");
        			nPoint += parseInt(point);
        		}
        		this.div_Info.form.sta_point.set_text(20 - nPoint);
        	}else if(sId == "myClassList"){
        		for(var i=0; i<this.ds_myClass.getRowCount(); i++){
        			var classSeq = this.ds_myClass.getColumn(i,"classSeq");
        			var nRow = this.ds_class.findRow("classSeq",classSeq);
        			trace(nRow);
        			this.ds_class.deleteRow(nRow)
        		}
        	}else if(sId == "stdTimeTableList"){
        		var Time = new Array();
        		var Mon = new Array();
        		var Tue = new Array();
        		var Wed = new Array();
        		var Thu = new Array();
        		var Fri = new Array();
        		var Sat = new Array();
        		var Sun = new Array();
        		for(var i=this.ds_stdTimeTableCopy.getRowCount()-1; i >=0; i--){
        			Time[i] = this.ds_stdTimeTableCopy.getColumn(i,"time");
        			Time[i] = Time[i].replace("교시","")-1;
        			Mon[i] = this.ds_stdTimeTableCopy.getColumn(i,"mon");
        			Tue[i] = this.ds_stdTimeTableCopy.getColumn(i,"tue");
        			Wed[i] = this.ds_stdTimeTableCopy.getColumn(i,"wed");
        			Thu[i] = this.ds_stdTimeTableCopy.getColumn(i,"thu");
        			Fri[i] = this.ds_stdTimeTableCopy.getColumn(i,"fri");
        			Sat[i] = this.ds_stdTimeTableCopy.getColumn(i,"sat");
        			Sun[i] = this.ds_stdTimeTableCopy.getColumn(i,"sun");

        			var mon = this.ds_stdTimeTable.getColumn(Time[i],"mon");
        			var tue = this.ds_stdTimeTable.getColumn(Time[i],"tue");
        			var wed = this.ds_stdTimeTable.getColumn(Time[i],"wed");
        			var thu = this.ds_stdTimeTable.getColumn(Time[i],"thu");
        			var fri = this.ds_stdTimeTable.getColumn(Time[i],"fri");
        			var sat = this.ds_stdTimeTable.getColumn(Time[i],"sat");
        			var sun = this.ds_stdTimeTable.getColumn(Time[i],"sun");

        			if(mon == null || mon == ""){this.ds_stdTimeTable.setColumn(Time[i],"mon",Mon[i]);}
        			if(tue == null || tue == ""){this.ds_stdTimeTable.setColumn(Time[i],"tue",Tue[i]);}
        			if(wed == null || wed == ""){this.ds_stdTimeTable.setColumn(Time[i],"wed",Wed[i]);}
        			if(thu == null || thu == ""){this.ds_stdTimeTable.setColumn(Time[i],"thu",Thu[i]);}
        			if(fri == null || fri == ""){this.ds_stdTimeTable.setColumn(Time[i],"fri",Fri[i]);}
        			if(sat == null || sat == ""){this.ds_stdTimeTable.setColumn(Time[i],"sat",Sat[i]);}
        			if(sun == null || sun == ""){this.ds_stdTimeTable.setColumn(Time[i],"sun",Sun[i]);}
        		}
        		//화면 로드시 해당 학과 과목이 보여짐
        		var dept = this.div_Info.form.co_myDept.value;
        		this.div_Info.form.co_dept.set_value(dept);
        		dept = this.div_Info.form.co_dept.value;
        		this.ds_class.filter("dept=='"+dept+"'");
        	}
        }

        //검색
        this.div_Info_btnClassSearch_onclick = function(obj,e)
        {
        	var dept = this.div_Info.form.co_dept.value;
        	var part = this.div_Info.form.co_part.value;
        	var className = this.div_Info.form.edt_className.text;

        	this.ds_class.filter("dept.indexOf('"+dept+"')>=0 && classPart.indexOf('"+part+"')>=0 && className.indexOf('"+className+"')>=0");
        };
        this.div_Info_co_dept_onitemchanged = function(obj,e)
        {
        	this.ds_class.filter("dept.indexOf('"+e.postvalue+"')>=0");
        };

        this.gr_classList_oncellclick = function(obj,e)
        {
        	if(e.col == 3){
        		var classSeq = this.ds_class.getColumn(e.row,"classSeq");
        		var proCode = this.ds_class.getColumn(e.row,"proCode");
        		var x = this.width/2-500;
        		var y = this.height/2-340;
        		var objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_callback");
         	}
        	if(e.col == 7){
        		var nRow = this.ds_class.rowposition;
        		var limit = this.ds_class.getColumn(nRow,"limit");
        		var person =limit.split("/");
        		var myPoint = this.div_Info.form.sta_point.text;
        		var point = this.ds_class.getColumn(nRow,"classPoint").replace("학점","");
        		var grade = this.ds_class.getColumn(nRow,"grade")
        		var myGrade = this.div_Info.form.sta_grade.text;
        		var part = this.ds_class.getColumn(nRow,"classPart");
        		var dept = this.ds_class.getColumn(nRow,"dept");
        		var myDept = this.div_Info.form.co_myDept.value;
        		if(person[0] < person[1]){
        			if(nexacro.toNumber(myPoint)-nexacro.toNumber(point) < 0){
        				alert("학점이 부족합니다");
        				return;
        			}else{
        				if(grade != myGrade){
        					alert("수강 가능한 학년이 아닙니다");
        					return;
        				}else{
<<<<<<< HEAD
        					if(dept != myDept){
        						if(part == "A" || "B"){
        							alert("다른 학과 전공은 신청이 불가능합니다");
        							return;
        						}
=======
        					if(dept != myDept && dept != "7071" && part != "F"){
        						alert("다른 학과 전공은 신청이 불가능합니다");
        						return;
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
        					}else{
        						var classTime = this.ds_class.getColumn(nRow,"classTime");
        						var className = this.ds_class.getColumn(nRow,"className")+" (예비)*";
        						var classCode = this.ds_class.getColumn(nRow,"classSeq");
        						var sCode = this.div_Info.form.sta_sSeq.text;
        						var type ="";
        						classTime = nexacro.replaceAll(classTime,"교시","");
        						var time = classTime.split(")");
        						this.ds_stdTimeTableCopy.clearData();
        						for(var i=0; i<time.length-1; i++){
        							var weeks = time[i].split("(");
        							var week = weeks[1].split(" ");
        							var col =""
        							if(weeks[0] =="월"){col="mon"}
        							else if(weeks[0] =="화"){col="tue"}
        							else if(weeks[0] =="수"){col="wed"}
        							else if(weeks[0] =="목"){col="thu"}
        							else if(weeks[0] =="금"){col="fri"}
        							else if(weeks[0] =="토"){col="sat"}
        							else if(weeks[0] =="일"){col="sun"}
        							for(var j=0; j<week.length; j++){
        								var cName = this.ds_stdTimeTable.getColumn(week[j]-1,col);
        								if(cName=="" || cName == null){
        									this.ds_stdTimeTable.setColumn(week[j]-1,col,className);
        									this.ds_stdTimeTable.setColumn(week[j]-1,"classCode",classCode);
        									this.ds_stdTimeTable.setColumn(week[j]-1,"sCode",sCode);
        									var addRow = this.ds_stdTimeTableCopy.addRow(); //삭제 시 row가 변경되어 삭제한 내용도 추가되서 DsCopy본 이용
        									this.ds_stdTimeTableCopy.setColumn(addRow,col,className);
        									this.ds_stdTimeTableCopy.setColumn(addRow,"time",week[j]+"교시");
        									this.ds_stdTimeTableCopy.setColumn(addRow,"classCode",classCode);
        									this.ds_stdTimeTableCopy.setColumn(addRow,"sCode",sCode);
        								}else{
        									alert("해당 시간에 이미 수강중인 과목이 있습니다");
        									return; //함수 탈출
        								}
        							}
        						}
        						//학점 갱신
        						this.div_Info.form.sta_point.set_text(nexacro.toNumber(myPoint)-nexacro.toNumber(point));

        						var addRow = this.ds_myBasket.addRow();
        						this.ds_myBasket.copyRow(addRow,this.ds_class,nRow);

        						//insert studentClass 추가
        						var sName = this.div_Info.form.sta_name.text;
        						var addRow2 = this.ds_stdClass.addRow();
        						this.ds_stdClass.setColumn(addRow2,"sCode",sCode);
        						this.ds_stdClass.setColumn(addRow2,"sName",sName);
        						this.ds_stdClass.setColumn(addRow2,"classCode",classCode);
        						this.ds_stdClass.setColumn(addRow2,"basket",'Y');
        						this.transaction(
        							"stdClassInsert"
        							,"/stdClassInsert.nex"
        							,"in_ds1=ds_stdClass:U in_ds2=ds_stdTimeTableCopy:U"
        							,""
        							,"row="+nRow
        							,"fn_callback_stdClass"
        						);
        					}
        				}
        			}
        		}else{
        			alert("인원수가 초과되었습니다");
        		}
        	}
        };

        this.row= "";
        this.count2 = "";
        this.fn_callback_stdClass=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "stdClassInsert"){
        		var limit = this.ds_class.getColumn(this.row,"basketLimit").split("/");
        		this.ds_class.setColumn(this.row,"basketLimit",this.count2+"/"+limit[1]);
        		limit = this.ds_class.getColumn(this.row,"basketLimit")
        		var classSeq = this.ds_class.getColumn(this.row,"classSeq");
        		trace(limit);
        		this.transaction(
        			"/limitBasketUpd"
        			,"/limitBasketUpd.nex"
        			,""
        			,""
        			,"limit="+limit +" classSeq="+classSeq
        			,"fn_callback"
        		);
        		this.ds_class.deleteRow(this.row);
        	}else if(sId == "stdTimeTableDelete"){
        		var limit = this.ds_myBasket.getColumn(this.row,"basketLimit").split("/");
        		this.ds_myBasket.setColumn(this.row,"basketLimit",this.count2+"/"+limit[1]);
        		limit = this.ds_myBasket.getColumn(this.row,"basketLimit")
        		var classSeq = this.ds_myBasket.getColumn(this.row,"classSeq");
        		trace(limit);
        		this.transaction(
        			"/limitUpd"
        			,"/limitBasketUpd.nex"
        			,""
        			,""
        			,"limit="+limit +" classSeq="+classSeq
        			,"fn_callback"
        		);
        		var addRow = this.ds_class.addRow();
        		this.ds_class.copyRow(addRow,this.ds_myBasket,this.row);
        		this.ds_myBasket.deleteRow(this.row);
        		var dept = this.div_Info.form.co_dept.value;
        		this.ds_class.filter("dept.indexOf('"+dept+"')>=0");
        	}
        }
        this.gr_basketList_oncellclick = function(obj,e)
        {
        	if(e.col==0){
        		var nRow = this.ds_myBasket.rowposition;
        		var className = this.ds_myBasket.getColumn(nRow,"className")+" (예비)*";
        		var classCode =this.ds_myBasket.getColumn(nRow,"classSeq");
        		var sCode = this.div_Info.form.sta_sSeq.text;
        		var myPoint = this.div_Info.form.sta_point.text;
        		var point = this.ds_myBasket.getColumn(nRow,"classPoint").replace("학점","");
        		//학점 갱신
        		this.div_Info.form.sta_point.set_text(nexacro.toNumber(myPoint)+nexacro.toNumber(point));
        		//DB에서 해당 시간표 삭제
        		for(var i=0; i<this.ds_stdTimeTable.getRowCount();i++){
        			for(var j=0; j<this.ds_stdTimeTable.getColCount(); j++){
        				if(this.ds_stdTimeTable.getColumn(i,j)==className){
        					this.ds_stdTimeTable.setColumn(i,j,"");
        				};
        			}
        		}
        		//시간표와 학생수업 테이블에서 삭제
        		this.transaction(
        			"stdTimeTableDelete"
        			,"/stdTimeTableDelete.nex"
        			,""
        			,""
        			,"classCode="+classCode + " sCode="+sCode + " row="+nRow
        			,"fn_callback_stdClass"
        		);
        		//stdClass에서 삭제
        		var stdRow = this.ds_stdClass.findRow("classCode",classCode);
        		this.ds_stdClass.deleteRow(stdRow);
        	}
        	if(e.col==4){
        		var classSeq = this.ds_myBasket.getColumn(e.row,"classSeq");
        		var proCode = this.ds_myBasket.getColumn(e.row,"proCode");
        		var x = this.width/2-500;
        		var y = this.height/2-340;
        		var objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_pop_callback");
        	}
        };

        this.div_Info_classTime_onclick = function(obj,e)
        {
        	var sCode = this.div_Info.form.sta_sSeq.text;
        	var x = this.width/2-410;
        	var y = this.height/2-220;
        	var objCF = new ChildFrame();
        	objCF.init("popTimeTable",x,y,820,440,0,0,"stdWork::studentSchedule.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{sCode:sCode},this,"fn_pop_callback");
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ClassRegist_onload,this);
            this.div_Info.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_Info.form.co_dept.addEventHandler("onitemchanged",this.div_Info_co_dept_onitemchanged,this);
            this.div_Info.form.btnClassSearch.addEventHandler("onclick",this.div_Info_btnClassSearch_onclick,this);
            this.div_Info.form.classTime.addEventHandler("onclick",this.div_Info_classTime_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.gr_basketList.addEventHandler("oncellclick",this.gr_basketList_oncellclick,this);
        };

        this.loadIncludeScript("testRegist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

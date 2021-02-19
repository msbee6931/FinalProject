(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classGrade");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"attend\" type=\"INT\" size=\"256\"/><Column id=\"mid\" type=\"INT\" size=\"256\"/><Column id=\"otest\" type=\"INT\" size=\"256\"/><Column id=\"task\" type=\"INT\" size=\"256\"/><Column id=\"fin\" type=\"INT\" size=\"256\"/><Column id=\"total\" type=\"INT\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"attend\" type=\"INT\" size=\"256\"/><Column id=\"mid\" type=\"INT\" size=\"256\"/><Column id=\"otest\" type=\"INT\" size=\"256\"/><Column id=\"task\" type=\"INT\" size=\"256\"/><Column id=\"fin\" type=\"INT\" size=\"256\"/><Column id=\"total\" type=\"INT\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rank", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">A+</Col><Col id=\"name\">A+</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">A</Col></Row><Row><Col id=\"id\">B+</Col><Col id=\"name\">B+</Col></Row><Row><Col id=\"id\">B</Col><Col id=\"name\">B</Col></Row><Row><Col id=\"id\">C+</Col><Col id=\"name\">C+</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">C</Col></Row><Row><Col id=\"id\">D+</Col><Col id=\"name\">D+</Col></Row><Row><Col id=\"id\">D</Col><Col id=\"name\">D</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">F</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_passFail", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">P</Col><Col id=\"name\">PASS</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">FAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("co_year","650","27","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester","780","27","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","910","24","90","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","75","67","930","143",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"108\"/><Column size=\"254\"/><Column size=\"67\"/><Column size=\"119\"/><Column size=\"207\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"학과코드\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"학과\"/><Cell col=\"5\" text=\"강의시간\"/><Cell col=\"6\" text=\"인원 수\"/></Band><Band id=\"body\"><Cell text=\"bind:classPart\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"########\"/><Cell col=\"2\" text=\"bind:className\" textAlign=\"center\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:dept\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","80","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("나의 강좌");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","75","250","228","285",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_stdClass");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"#########\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","330","250","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이름");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","430","250","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","560","250","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("학번");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_code","660","250","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sum","900","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sum2","900","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("합계");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_fin","800","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기말고사");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_task","700","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("과제");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_otest","600","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("수시");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_mid","500","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("중간고사");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_attend","400","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("출석");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_attend","400","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_mid","500","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_otest","600","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_task","700","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_fin","800","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sumAll","900","380","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","330","350","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("평가방법");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","330","380","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("점수");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bin","330","320","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","910","280","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("출석현황 보기");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","800","450","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("총점");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_total","900","450","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","910","490","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","40","42","210","268",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_positionstep("1");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목명\"/><Cell col=\"1\" text=\"인원 수\"/></Band><Band id=\"body\"><Cell text=\"bind:className\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_fin","800","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_task","700","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_otest","600","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mid","500","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_attend","400","350","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_label","75","210","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("학생리스트");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sumR","900","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_02","330","410","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("결과");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_finR","800","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_taskR","700","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_otestR","600","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_midR","500","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_attendR","400","410","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangeEval","790","280","115","35",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("평가방법 변경하기");
            obj.set_tooltiptext("평가시작 전에만 가능합니다");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","330","450","320","85",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("-주의 사항- \r\n\r\n평가방법은 평가시작 전에만 변경이 가능합니다.\r\n평가 후 수정을 원하시면 관리자에게 문의해주세요.");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_background("linen");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","270","42","760","438",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_positionstep("1");
            obj.set_binddataset("ds_grades");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"출석\"/><Cell col=\"3\" text=\"중간고사\"/><Cell col=\"4\" text=\"수시\" textAlign=\"center\"/><Cell col=\"5\" text=\"과제\"/><Cell col=\"6\" text=\"기말고사\"/><Cell col=\"7\" text=\"총점\"/><Cell col=\"8\" text=\"순위\"/><Cell col=\"9\" text=\"성적\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#########\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attend\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:mid\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:otest\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:task\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:fin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:total\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:rank\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:grade\" displaytype=\"combocontrol\" textAlign=\"center\" combodataset=\"ds_rank\" combocodecol=\"id\" combodatacol=\"name\" edittype=\"combo\"/></Band></Format><Format id=\"PassFail\"><Columns><Column size=\"94\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"출석\"/><Cell col=\"3\" text=\"중간고사\"/><Cell col=\"4\" text=\"수시\" textAlign=\"center\"/><Cell col=\"5\" text=\"과제\"/><Cell col=\"6\" text=\"기말고사\"/><Cell col=\"7\" text=\"총점\"/><Cell col=\"8\" text=\"성적\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#########\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attend\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:mid\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:otest\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:task\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:fin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:total\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:grade\" displaytype=\"combocontrol\" textAlign=\"center\" combodataset=\"ds_passFail\" combocodecol=\"id\" combodatacol=\"name\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2","940","500","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("저장");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_rank","40","325","210","160",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_url("prfWork::rankStandard.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","830","500","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Export");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","prfWork::rankStandard.xfdl");
        };
        
        // User Script
        this.registerScript("classGrade.xfdl", function() {
        var objApp = nexacro.getApplication();
        this.classGrade_onload = function(obj,e)
        {
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("1학기");
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("2학기");
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq"); // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var year = this.co_year.text;
        	year = year.substring(0,year.length-1)
        	if(this.co_semester.text == "1학기"){
        		var startTime = year+"0101";
        		var endTime = year+"0731";
        	}else{
        		var startTime = year+"0801";
        		var endTime = year+"1231";
        	}
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq"); // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var classCode = this.ds_class.getColumn(e.row,"classSeq");
        	var className = this.ds_class.getColumn(e.row,"className");
        	var proCode = this.ds_class.getColumn(e.row,"proCode");
        	if(e.col == 2){
        		let x = this.width/2-500;
        		let y = this.height/2-340;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classCode, proCode : proCode, view : 'Y'},this,"fn_callback");
        	}else{
        		this.sta_label.set_text("학생리스트(" +className+")");
        		var eval = this.ds_class.getColumn(e.row,"classEvaluation").split("|");
        		this.sta_attend.set_text(eval[0]);
        		this.sta_mid.set_text(eval[1]);
        		this.sta_otest.set_text(eval[2]);
        		this.sta_task.set_text(eval[3]);
        		this.sta_fin.set_text(eval[4]);
        		this.sta_sum.set_text(parseInt(eval[0])+parseInt(eval[1])+parseInt(eval[2])+parseInt(eval[3])+parseInt(eval[4]) +"%");
        		this.transaction(
        			"stdListSeq"
        			,"/stdListSeq.nex"
        			,""
        			,"ds_stdClass=out_ds"
        			,"classCode="+classCode
        			,"fn_callback_stdList"
        		);
        		this.sta_name.set_text("");
        		this.sta_code.set_text("");
        		this.mask_attend.set_value("");
        		this.mask_mid.set_value("");
        		this.mask_otest.set_value("");
        		this.mask_task.set_value("");
        		this.mask_fin.set_value("");
        		this.sta_attendR.set_text(0);
        		this.sta_midR.set_text(0);
        		this.sta_otestR.set_text(0);
        		this.sta_taskR.set_text(0);
        		this.sta_finR.set_text(0);
        		this.sta_sumR.set_text(0);
        		this.sta_sumAll.set_text(0);
        		this.sta_total.set_text("");
        	}

        };
        this.fn_callback_stdList=function(){
        	this.ds_stdClass.set_keystring("S:+sName");
        }

        this.Grid01_oncellclick = function(obj,e)
        {
        	var sCode = this.ds_stdClass.getColumn(e.row,"sCode");
        	var sName = this.ds_stdClass.getColumn(e.row,"sName");
        	var classCode =this.ds_stdClass.getColumn(e.row,"classCode");
        	this.sta_code.set_text(sCode);
        	this.sta_name.set_text(sName);
        	this.ds_grade_copy.clearData();
        	var addRow = this.ds_grade_copy.addRow();
        	this.ds_grade_copy.setColumn(addRow,"sCode",sCode);
        	this.ds_grade_copy.setColumn(addRow,"classCode",classCode);
        	this.transaction(
        		"stdGrade"
        		,"/stdGrade.nex"
        		,"in_ds=ds_grade_copy"
        		,"ds_grade_copy=out_ds"
        		,""
        		,"fn_callback_grade"
        	);
        };
        this.fn_callback_grade=function(sId){
        	if(sId == "stdGrade"){
        		if(this.ds_grade_copy.getRowCount() > 0){
        			var attend = this.ds_grade_copy.getColumn(0,"attend");
        			var mid = this.ds_grade_copy.getColumn(0,"mid");
        			var otest = this.ds_grade_copy.getColumn(0,"otest");
        			var task = this.ds_grade_copy.getColumn(0,"task");
        			var fin = this.ds_grade_copy.getColumn(0,"fin");
        			trace("attend" + attend);
        			var count = 0;
        			this.mask_attend.set_value(attend)
        			this.mask_mid.set_value(mid);
        			this.mask_otest.set_value(otest);
        			this.mask_task.set_value(task);
        			this.mask_fin.set_value(fin);
        			if(this.sta_attend.text != 0){count +=1}
        			if(this.sta_mid.text != 0){count +=1}
        			if(this.sta_otest.text != 0){count +=1}
        			if(this.sta_task.text != 0){count +=1}
        			if(this.sta_fin.text != 0){count +=1}
        			this.sta_sumAll.set_text(parseInt(attend) + parseInt(mid) + parseInt(otest) + parseInt(task) + parseInt(fin) +"/"+ count*100);
        			this.sta_attendR.set_text(this.sta_attend.text * attend *0.01)
        			this.sta_midR.set_text(this.sta_mid.text * mid *0.01);
        			this.sta_otestR.set_text(this.sta_otest.text * otest *0.01);
        			this.sta_taskR.set_text(this.sta_task.text * task *0.01);
        			this.sta_finR.set_text(this.sta_fin.text * fin *0.01);
        			this.fn_gradeTotal();
        		}
        	}else if(sId =="stdGradeList"){
        		if(this.ds_grade_copy.getRowCount() > 0){
        			alert("이미 평가중입니다\n수정이 불가능합니다");
        		}else{
        			var nRow = this.ds_class.rowposition;
        			var classCode = this.ds_class.getColumn(nRow,"classSeq");
        			let objCF = new ChildFrame();
        			let x = this.sta_bin.getOffsetLeft()+200;
        			let y = this.sta_bin.getOffsetTop()+80;
        			objCF.init("popMsg",x,y,680,170,0,0,"prfWork::EvaluationMethod.xfdl");
        			objCF.set_showtitlebar(false);
        			objCF.showModal(this.getOwnerFrame(),{classCode:classCode},this,"fn_callback_evalUpd");
        		}
        	}else if(sId=="stdGradeRank"){
        		objApp.ds_grades.copyData(this.ds_grade)
        		if(objApp.ds_grades.getRowCount()> 0){
        			var nRow = this.ds_class.rowposition;
        			if(this.ds_class.getColumn(nRow,"passFail") =="P"){
        				this.div_rank.set_url("prfWork::passFailStandard.xfdl");
        			}else{
        				this.div_rank.set_url("prfWork::rankStandard.xfdl");
        				var nCount = objApp.ds_grades.getRowCount();
        				var A = nexacro.ceil(nCount * 0.3);
        				var B = nexacro.ceil(nCount * 0.7);
        				var C =	nCount;
        				this.div_rank.form.sta_A.set_text(A);
        				this.div_rank.form.sta_B.set_text(B);
        				this.div_rank.form.sta_C.set_text(C);
        				var total = new Array();
        				var total2 = new Array();
        				for(var i=0; i<objApp.ds_grades.getRowCount(); i++){
        					total[i] = objApp.ds_grades.getColumn(i,"total");
        					var rank = 1;
        					for(var j=0; j<objApp.ds_grades.getRowCount(); j++){
        						total2[j] = objApp.ds_grades.getColumn(j,"total");
        						if(total[i] < total2[j]){
        							rank +=1;
        						}
        						objApp.ds_grades.setColumn(i,"rank",rank);
        						var nRank = objApp.ds_grades.getColumn(i,"rank");
        						var grade =  objApp.ds_grades.getColumn(i,"grade");
        						if(grade == null){
        							if(nRank <= nCount){
        								objApp.ds_grades.setColumn(i,"grade","C+");
        								if(nRank <= A+B){
        									objApp.ds_grades.setColumn(i,"grade","B+");
        									if(nRank <= A){
        										objApp.ds_grades.setColumn(i,"grade","A+");
        									}
        								}
        							}
        						}
        					}
        				}
        			}
        		}
        	}
        }
        this.fn_callback_evalUpd=function(sId,eval){
        	var ev = eval.split("|");
        	this.sta_attend.set_text(ev[0]);
        	this.sta_mid.set_text(ev[1]);
        	this.sta_otest.set_text(ev[2]);
        	this.sta_task.set_text(ev[3]);
        	this.sta_fin.set_text(ev[4]);
        	this.sta_sum.set_text(parseInt(ev[0])+parseInt(ev[1])+parseInt(ev[2])+parseInt(ev[3])+parseInt(ev[4])+"%");
        	var nRow = this.ds_class.findRow("classSeq",ev[5]);
        	this.ds_class.setColumn(nRow,"classEvaluation",ev[0]+"|"+ev[1]+"|"+ev[2]+"|"+ev[3]+"|"+ev[4])
        }

        this.grade_canchange = function(obj,e)
        {
        	var attend = this.mask_attend.text;
        	var mid = this.mask_mid.text;
        	var otest = this.mask_otest.text;
        	var task = this.mask_task.text;
        	var fin = this.mask_fin.text;
        	var count = 0;
        	if(this.sta_attend.text != 0){count +=1}
        	if(this.sta_mid.text != 0){count +=1}
        	if(this.sta_otest.text != 0){count +=1}
        	if(this.sta_task.text != 0){count +=1}
        	if(this.sta_fin.text != 0){count +=1}

        	if(attend == ""){attend = 0;}else if(attend >100){alert("0~100까지 입력이 가능합니다");this.mask_attend.set_value(100);}
        	if(mid == ""){mid = 0;}else if(mid >100){alert("0~100까지 입력이 가능합니다");this.mask_mid.set_value(100);}
        	if(otest == ""){otest = 0;}else if(otest >100){alert("0~100까지 입력이 가능합니다");this.mask_otest.set_value(100);}
        	if(task == ""){task = 0;}else if(task >100){alert("0~100까지 입력이 가능합니다");this.mask_task.set_value(100);}
        	if(fin == ""){fin = 0;}else if(fin >100){alert("0~100까지 입력이 가능합니다");this.mask_fin.set_value(100);}

        	this.sta_sumAll.set_text(parseInt(attend) + parseInt(mid) + parseInt(otest) + parseInt(task) + parseInt(fin) +"/"+ count*100);

        };



        this.mask_attend_oninput = function(obj,e)
        {
        	if(this.sta_attend.text == 0){
        		alert("해당 항목은 평가항목이 아닙니다");
        		obj.set_value(0);
        	}
        };
        this.mask_mid_oninput = function(obj,e)
        {
        	if(this.sta_mid.text == 0){
        		alert("해당 항목은 평가항목이 아닙니다");
        		obj.set_value(0);
        	}
        };
        this.mask_otest_oninput = function(obj,e)
        {
        	if(this.sta_otest.text == 0){
        		alert("해당 항목은 평가항목이 아닙니다");
        		obj.set_value(0);
        	}
        };
        this.mask_task_oninput = function(obj,e)
        {
        	if(this.sta_task.text == 0){
        		alert("해당 항목은 평가항목이 아닙니다");
        		obj.set_value(0);
        	}
        };
        this.mask_fin_oninput = function(obj,e)
        {
        	if(this.sta_fin.text == 0){
        		alert("해당 항목은 평가항목이 아닙니다");
        		obj.set_value(0);
        	}
        };

        this.fn_gradeTotal=function(){
        	var attend = this.sta_attendR.text;
        	var mid = this.sta_midR.text;
        	var otest = this.sta_otestR.text;
        	var task = this.sta_taskR.text;
        	var fin = this.sta_finR.text;
        	this.sta_sumR.set_text(parseInt(attend) + parseInt(mid) + parseInt(otest) + parseInt(task) + parseInt(fin));
        	this.sta_total.set_text(parseInt(attend) + parseInt(mid) + parseInt(otest) + parseInt(task) + parseInt(fin)+"점");
        }
        this.mask_attend_onchanged = function(obj,e)
        {
        	var multi = this.sta_attend.text * this.mask_attend.text *0.01;
        	this.sta_attendR.set_text(multi);
        	this.fn_gradeTotal();

        };
        this.mask_mid_onchanged = function(obj,e)
        {
        	var multi = this.sta_mid.text * this.mask_mid.text *0.01;
        	this.sta_midR.set_text(multi);
        	this.fn_gradeTotal();
        };

        this.mask_otest_onchanged = function(obj,e)
        {
        	var multi = this.sta_otest.text * this.mask_otest.text *0.01;
        	this.sta_otestR.set_text(multi);
        	this.fn_gradeTotal();
        };

        this.mask_task_onchanged = function(obj,e)
        {
        	var multi = this.sta_task.text * this.mask_task.text *0.01;
        	this.sta_taskR.set_text(multi);
        	this.fn_gradeTotal();
        };

        this.mask_fin_onchanged = function(obj,e)
        {
        	var multi = this.sta_fin.text * this.mask_fin.text *0.01;
        	this.sta_finR.set_text(multi);
        	this.fn_gradeTotal();
        };


        this.btnSave_onclick = function(obj,e)
        {
        	var nRow = this.ds_class.rowposition;
        	var sCode = this.sta_code.text;
        	var sName = this.sta_name.text;
        	var classCode = this.ds_class.getColumn(nRow,"classSeq");
        	var attend = this.mask_attend.text;
        	var mid = this.mask_mid.text;
        	var otest = this.mask_otest.text;
        	var task = this.mask_task.text;
        	var fin = this.mask_fin.text;
        	var total = this.sta_total.text;
        	total = total.substring(0,total.length-1);
        	var addRow = this.ds_grade_copy.addRow();
        	this.ds_grade_copy.setColumn(addRow,"sCode",sCode);
        	this.ds_grade_copy.setColumn(addRow,"sName",sName);
        	this.ds_grade_copy.setColumn(addRow,"classCode",classCode);
        	this.ds_grade_copy.setColumn(addRow,"attend",attend);
        	this.ds_grade_copy.setColumn(addRow,"mid",mid);
        	this.ds_grade_copy.setColumn(addRow,"otest",otest);
        	this.ds_grade_copy.setColumn(addRow,"task",task);
        	this.ds_grade_copy.setColumn(addRow,"fin",fin);
        	this.ds_grade_copy.setColumn(addRow,"total",total);
        	if(sCode == null || sCode ==""){
        		this.alert("학생을 선택해주세요");
        	}else{
        		this.transaction(
        			"stdGradeSave"
        			,"/stdGradeInsert.nex"
        			,"in_ds=ds_grade_copy:U"
        			,"ds_grade=out_ds"
        			,""
        			,"fn_callback"
        		);
        	}
        };



        this.btnChangeEval_onclick = function(obj,e)
        {
        	var attend =  this.sta_attend.text;
        	if(attend == null || attend ==""){
        		this.alert("수업을 선택해주세요");
        	}else{
        		var nRow = this.ds_class.rowposition;
        		var classCode = this.ds_class.getColumn(nRow,"classSeq");
        		this.transaction(
        			"stdGradeList"
        			,"/stdGradeList.nex"
        			,""
        			,"ds_grade_copy=out_ds"
        			,"classCode="+classCode
        			,"fn_callback_grade"
        		);
        	}
        };





        this.Grid02_oncellclick = function(obj,e)
        {
        	if(this.ds_class.getColumn(e.row,"passFail")=="P"){
        		this.Grid03.set_formatid("PassFail");
        	}else{
        		this.Grid03.set_formatid("default");
        	}
        	var classCode = this.ds_class.getColumn(e.row,"classSeq");
        	this.transaction(
        		"stdGradeRank"
        		,"/stdGradeList.nex"
        		,""
        		,"ds_grade=out_ds"
        		,"classCode="+classCode
        		,"fn_callback_grade"
        	);

        };

        this.Grid03_onheadclick = function(obj,e)
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

        this.btnSave2_onclick = function(obj,e)
        {	var A = 0;
        	var B = 0;
        	for(var i=0; i<objApp.ds_grades.getRowCount(); i++){
        		var grade = objApp.ds_grades.getColumn(i,"grade");
        		if(grade == "A"||  grade == "A+"){
        			A +=1;
        		}
        		if(grade == "B"||  grade == "B+"){
        			B +=1;
        		}
        	}
        	if(this.Grid03.formatid == "default"){
        		var RankA = this.div_rank.form.sta_A.text;
        		var RankB = this.div_rank.form.sta_B.text;
        		if(A > RankA || A+B > RankB ){
        			this.alert("등급별 최대인원을 초과했습니다")
        		}else{
        			if(objApp.ds_grades.getRowCount() > 0){
        				var nCount = this.ds_grade.copyData(objApp.ds_grades);
        				this.transaction(
        					"stdGradeUpd"
        					,"/stdGradeUpd.nex"
        					,"in_ds=ds_grade:A"
        					,""
        					,""
        					,"fn_callback"
        				);
        			}
        		}
        	}else{
        		if(objApp.ds_grades.getRowCount() > 0){
        			var nCount = this.ds_grade.copyData(objApp.ds_grades);
        			this.transaction(
        				"stdGradeUpd"
        				,"/stdGradeUpd.nex"
        				,"in_ds=ds_grade:A"
        				,""
        				,""
        				,"fn_callback"
        			);
        		}
        	}
        }



        this.btnExport_onclick = function(obj,e)
        {
        	var nRow = this.ds_class.rowposition;
        	var className = this.ds_class.getColumn(nRow,"className");
        	this.exportObj = new ExcelExportObject("Export00", this);

        	this.exportObj.set_exportfilename(className + " 성적 집계");
        	this.exportObj.set_exporturl("http://15.165.196.249/nexacro-xeni/XExportImport");

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid03, "Sheet1!A1");

        	this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.addEventHandler("onerror", this.Export00_onerror, this);

        	var intExportedItem = this.exportObj.exportData();

        	trace("Number of Exported Item: " + intExportedItem);
        };
        this.Export00_onsuccess = function(obj, e)
        {
        	trace("Export00_onsuccess");
        }

        this.Export00_onerror = function(obj, e)
        {
        	trace("Export00_onerror");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classGrade_onload,this);
            this.co_year.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.sum2.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_fin.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_task.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_otest.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_mid.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_attend.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.mask_attend.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_attend.addEventHandler("onchanged",this.mask_attend_onchanged,this);
            this.mask_attend.addEventHandler("oninput",this.mask_attend_oninput,this);
            this.mask_mid.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_mid.addEventHandler("oninput",this.mask_mid_oninput,this);
            this.mask_mid.addEventHandler("onchanged",this.mask_mid_onchanged,this);
            this.mask_otest.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_otest.addEventHandler("oninput",this.mask_otest_oninput,this);
            this.mask_otest.addEventHandler("onchanged",this.mask_otest_onchanged,this);
            this.mask_task.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_task.addEventHandler("onchanged",this.mask_task_onchanged,this);
            this.mask_task.addEventHandler("oninput",this.mask_task_oninput,this);
            this.mask_fin.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_fin.addEventHandler("oninput",this.mask_fin_oninput,this);
            this.mask_fin.addEventHandler("onchanged",this.mask_fin_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Grid02.addEventHandler("oncellclick",this.Grid02_oncellclick,this);
            this.sta_label.addEventHandler("onclick",this.sta_label_onclick,this);
            this.btnChangeEval.addEventHandler("onclick",this.btnChangeEval_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Grid03.addEventHandler("onheadclick",this.Grid03_onheadclick,this);
            this.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
        };

        this.loadIncludeScript("classGrade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

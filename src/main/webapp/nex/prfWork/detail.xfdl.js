(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Detail");
            this.set_titletext("수업계획서 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"week1\" type=\"STRING\" size=\"256\"/><Column id=\"week2\" type=\"STRING\" size=\"256\"/><Column id=\"week3\" type=\"STRING\" size=\"256\"/><Column id=\"week4\" type=\"STRING\" size=\"256\"/><Column id=\"week5\" type=\"STRING\" size=\"256\"/><Column id=\"week6\" type=\"STRING\" size=\"256\"/><Column id=\"week7\" type=\"STRING\" size=\"256\"/><Column id=\"week8\" type=\"STRING\" size=\"256\"/><Column id=\"week9\" type=\"STRING\" size=\"256\"/><Column id=\"week10\" type=\"STRING\" size=\"256\"/><Column id=\"week11\" type=\"STRING\" size=\"256\"/><Column id=\"week12\" type=\"STRING\" size=\"256\"/><Column id=\"week13\" type=\"STRING\" size=\"256\"/><Column id=\"week14\" type=\"STRING\" size=\"256\"/><Column id=\"week15\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">1학년</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">2학년</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"name\">3학년</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"name\">4학년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_point", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">1학점</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">2학점</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"name\">3학점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classTimeList", this);
            obj._setContents("<ColumnInfo><Column id=\"Time\" type=\"STRING\" size=\"256\"/><Column id=\"Mon\" type=\"STRING\" size=\"256\"/><Column id=\"Tue\" type=\"STRING\" size=\"256\"/><Column id=\"Wed\" type=\"STRING\" size=\"256\"/><Column id=\"Thu\" type=\"STRING\" size=\"256\"/><Column id=\"Fri\" type=\"STRING\" size=\"256\"/><Column id=\"Sat\" type=\"STRING\" size=\"256\"/><Column id=\"Sun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Time\">1교시</Col></Row><Row><Col id=\"Time\">2교시</Col></Row><Row><Col id=\"Time\">3교시</Col></Row><Row><Col id=\"Time\">4교시</Col></Row><Row><Col id=\"Time\">5교시</Col></Row><Row><Col id=\"Time\">6교시</Col></Row><Row><Col id=\"Time\">7교시</Col></Row><Row><Col id=\"Time\">8교시</Col></Row><Row><Col id=\"Time\">9교시</Col></Row><Row><Col id=\"Time\">10교시</Col></Row><Row><Col id=\"Time\">11교시</Col></Row><Row><Col id=\"Time\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1000","680",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Tab("classPlanTab","0","0","1000","680",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("classPlan",this.Div00.form.classPlanTab);
            obj.set_text("교과목 정보");
            this.Div00.form.classPlanTab.addChild(obj.name, obj);

            obj = new MaskEdit("mask_fin","641","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_format("+0");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_task","486","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_format("+0");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_otest","331","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("37");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_argue","491","365","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("29");
            obj.set_format("+990");
            obj.set_textAlign("center");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_test","256","365","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("28");
            obj.set_format("+990");
            obj.set_textAlign("center");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("0");
            obj.set_text(" ▣ 이수구분");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_00","21","49","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("4");
            obj.set_text(" ▣ 과목명");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_01","351","49","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("6");
            obj.set_text(" ▣ 과목코드");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02","681","49","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("7");
            obj.set_text(" ▣ 학점");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","21","88","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("9");
            obj.set_text(" ▣ 담당교수명");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","351","127","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("15");
            obj.set_text(" ▣ 강의 시간");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_04","351","88","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("11");
            obj.set_text(" ▣ 소속 학과");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Combo("co_part","139","10","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("1");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_innerdataset("gds_part");
            obj.set_cssclass("cmb_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Edit("edt_className","139","49","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_cssclass("edt_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Combo("co_point","799","49","90","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_point");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","681","88","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("12");
            obj.set_text(" ▣ 학년");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Combo("co_grade","799","88","150","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","21","176","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("18");
            obj.set_text(" ▣ 교과목 및 목표");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","21","296","138","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("20");
            obj.set_text(" ▣ 수업운영 방법(비율)");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00_00","22","511","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("21");
            obj.set_text(" ▣ 교재 및 참고자료");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new TextArea("ta_goal","21","215","930","75",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
<<<<<<< HEAD
=======

>>>>>>> a986354821a335ba4e31612508e783b25c5e7235
            obj.set_taborder("19");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Button("btnSave","759","5","90","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("22");
<<<<<<< HEAD
=======

>>>>>>> a986354821a335ba4e31612508e783b25c5e7235
            obj.set_text("저장");
            obj.set_cssclass("btn_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00_00_00","21","403","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("23");
            obj.set_text(" ▣ 평가방법(비율)");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static03","21","550","118","43",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("41");
            obj.set_text("주교재");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static03_00","21","593","118","43",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("43");
            obj.set_text("참고 자료");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Edit("edt_mainBook","139","550","812","43",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
<<<<<<< HEAD
            obj.set_taborder("42");
=======

            obj.set_taborder("42");

>>>>>>> a986354821a335ba4e31612508e783b25c5e7235
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_course","21","335","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("24");
            obj.set_text("강의");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_test","256","335","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("25");
            obj.set_text("실험/실습");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_argue","491","335","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("26");
            obj.set_text("발표/토의/토론");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sum","726","335","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("27");
            obj.set_text("합계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_attend","21","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("31");
            obj.set_text("출석");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_mid","176","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("32");
            obj.set_text("중간고사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_fin","641","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("35");
            obj.set_text("기말고사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_task","486","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("34");
            obj.set_text("과제");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_otest","331","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("33");
            obj.set_text("수시");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sum2","796","442","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("36");
            obj.set_text("합계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_sum2","796","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
<<<<<<< HEAD
=======

>>>>>>> a986354821a335ba4e31612508e783b25c5e7235
            obj.set_taborder("40");
            obj.set_border("1px solid gray");

            obj.set_textAlign("center");
            obj.set_text("0%");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_sum","726","365","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_text("0%");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_proName","139","88","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_limit","351","10","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("2");
            obj.set_text(" ▣ 인원");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_limit","469","10","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("3");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+##########");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Edit("edt_classTime","469","127","455","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_cssclass("edt_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","21","127","118","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("14");
            obj.set_text(" ▣ 강의실");
            obj.set_cssclass("sta_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

<<<<<<< HEAD
=======

>>>>>>> a986354821a335ba4e31612508e783b25c5e7235
            obj = new Button("dropBtn","924","127","25","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("17");
            obj.set_text("");

            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new PopupDiv("classTimeList","351","167","382","315",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_visible("false");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","-4","382","315",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form.classTimeList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_classTimeList");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"44\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"화\"/><Cell col=\"3\" text=\"수\"/><Cell col=\"4\" text=\"목\"/><Cell col=\"5\" text=\"금\"/><Cell col=\"6\" text=\"토\" color=\"blue\"/><Cell col=\"7\" text=\"일\" color=\"red\"/></Band><Band id=\"body\"><Cell text=\"bind:Time\"/><Cell col=\"1\" text=\"bind:Mon\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Tue\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:Wed\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:Thu\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:Fri\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\" text=\"bind:Sat\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:Sun\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.Div00.form.classPlanTab.classPlan.form.classTimeList.addChild(obj.name, obj);

            obj = new Static("sta_proCode","686","10","65","34",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("53");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Button("btnClose","859","10","90","25",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("50");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Static("sta_reqState","884","175","65","34",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("51");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_cssclass("sta_line");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new TextArea("txt_subBook","139","593","812","43",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("49");
            obj.set_cssclass("txt_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_course","21","365","235","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("31");
            obj.set_format("+0");
            obj.set_textAlign("center");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("edt_classSeq","469","49","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("52");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+##########");

            obj.set_readonly("true");

            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_attend","21","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("42");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_mid","176","472","155","30",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("44");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            obj.set_cssclass("med_default");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Combo("co_dept","469","88","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("12");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");

            obj.set_displayrowcount("5");

            obj.set_text("");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new CheckBox("chk_pf","894","58","85","20",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("54");
            obj.set_text("Pass/Fail");
            obj.set_falsevalue("F");
            obj.set_truevalue("P");
            obj.set_value("F");
            obj.set_font("12px/normal \"Malgun Gothic\"");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_classRoom","139","126","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("55");
            obj.set_textAlign("center");
            obj.set_displaynulltext("ex) 101");
            obj.set_type("string");
            obj.set_format("###");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Button("btnClassRoom","263","166","86","33",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("55");
            obj.set_text("강의실 보기");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new MaskEdit("mask_classRoom","139","126","212","39",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("55");
            obj.set_textAlign("center");
            obj.set_displaynulltext("ex) 101");
            obj.set_type("string");
            obj.set_format("###");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Button("btnClassRoom","263","166","86","33",null,null,null,null,null,null,this.Div00.form.classPlanTab.classPlan.form);
            obj.set_taborder("55");
            obj.set_text("강의실 보기");
            this.Div00.form.classPlanTab.classPlan.addChild(obj.name, obj);

            obj = new Tabpage("classSchedule",this.Div00.form.classPlanTab);
            obj.set_text("수업운영계획");
            this.Div00.form.classPlanTab.addChild(obj.name, obj);

            obj = new Static("Static00","29","20","70","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("0");
            obj.set_text("주차");
            obj.set_border("1px solid gray");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_00","99","20","257","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("1");
            obj.set_text("강의주제");
            obj.set_border("1px solid gray");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_01","751","20","205","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("2");
            obj.set_text("준비물");
            obj.set_border("1px solid gray");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_02","356","20","200","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("3");
            obj.set_text("수업내용");
            obj.set_border("1px solid gray");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","556","20","195","40",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("4");
            obj.set_text("관련지식 및 유의사항");
            obj.set_border("1px solid gray");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03","29","60","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("5");
            obj.set_text("1주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","29","95","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("6");
            obj.set_text("2주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","29","130","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("7");
            obj.set_text("3주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_02","29","410","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("8");
            obj.set_text("11주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_03","29","375","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("9");
            obj.set_text("10주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_04","29","340","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("10");
            obj.set_text("9주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_05","29","305","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("11");
            obj.set_text("8주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_06","29","270","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("12");
            obj.set_text("7주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_07","29","235","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("13");
            obj.set_text("6주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_08","29","165","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("14");
            obj.set_text("4주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_09","29","200","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("15");
            obj.set_text("5주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_02_00","29","445","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("16");
            obj.set_text("12주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_02_01","29","480","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("17");
            obj.set_text("13주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_02_02","29","515","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("18");
            obj.set_text("14주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Static("Static00_03_02_03","29","550","70","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("19");
            obj.set_text("15주차");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject1","99","60","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("20");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject2","99","95","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("21");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject3","99","130","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("22");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject4","99","165","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("23");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject5","99","200","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("24");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject12","99","445","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("31");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject6","99","235","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("25");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject13","99","480","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("32");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject7","99","270","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("26");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject8","99","305","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("27");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject9","99","340","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("28");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject14","99","515","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("33");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject15","99","550","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("34");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject10","99","375","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("29");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_subject11","99","410","257","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("30");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice1","556","60","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice2","556","95","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice3","556","130","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice4","556","165","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice5","556","200","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice6","556","235","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice7","556","270","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice8","556","305","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("42");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice9","556","340","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("43");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice10","556","375","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("44");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice11","556","410","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("45");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice12","556","445","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("46");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice13","556","480","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("47");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice14","556","515","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("48");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_notice15","556","550","195","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("49");
            obj.set_textAlign("center");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare1","751","60","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("50");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare2","751","95","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("51");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare3","751","130","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("52");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare4","751","165","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("53");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare5","751","200","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("54");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare6","751","235","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("55");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare7","751","270","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("56");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare8","751","305","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("57");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare9","751","340","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("58");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare10","751","375","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("59");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare11","751","410","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("60");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare12","751","445","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("61");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare13","751","480","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("62");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare14","751","515","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("63");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new Edit("edt_prepare15","751","550","205","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("64");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content1","356","60","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("65");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content6","356","235","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("70");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content10","356","375","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("74");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content11","356","410","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("75");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content12","356","445","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("76");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content2","356","95","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("66");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content3","356","130","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("67");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content4","356","165","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("68");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content5","356","200","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("69");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content7","356","270","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("71");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content8","356","305","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("72");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content9","356","340","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("73");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content14","356","515","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("78");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content15","356","550","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("79");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            obj = new TextArea("ta_content13","356","480","200","35",null,null,null,null,null,null,this.Div00.form.classPlanTab.classSchedule.form);
            obj.set_taborder("77");
            this.Div00.form.classPlanTab.classSchedule.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("detail.xfdl", function() {
        this.objApp = nexacro.getApplication();
        var classForm = this.Div00.form.classPlanTab.classPlan.form;
        var planForm = this.Div00.form.classPlanTab.classSchedule.form;
        //-------------------------------------------수업계획서 작성-------------------------------------------
        this.classPlanTab_classPlan_btnSave_onclick = function(obj,e)
        {
        	var sum = classForm.sta_sum.text;
        	var sum2 = classForm.sta_sum2.text
        	var part = classForm.co_part.value;
        	var person = classForm.mask_limit.text;
        	var limit = "0/"+ person;
        	var classSeq = classForm.edt_classSeq.text;
        	var className = classForm.edt_className.text;
        	var point = classForm.co_point.text;
        	var passFail = classForm.chk_pf.value;
        	var proCode = classForm.sta_proCode.text;
        	var proName = classForm.sta_proName.text;
        	var dept = classForm.co_dept.value;
        	var grade = classForm.co_grade.text;
        	var classTime = classForm.edt_classTime.text;
        	var classRoom = classForm.mask_classRoom.text;
        	trace(classRoom)
        	if(sum != "100%" || sum2 != "100%"){alert("합계가 100%가 아닙니다")}
        	else if(part =="" || part == null){alert("이수구분을 선택해주세요");}
        	else if(person =="" || person == null){alert("인원을 입력해주세요");}
        	else if(className=="" || className == null){alert("교과명을 입력해주세요");}
        	else if(point=="" || point == null){alert("학점을 선택해주세요");}
        	else if(dept=="" || dept == null){alert("학과를 선택해주세요");}
        	else if(grade=="" || grade == null){alert("학년을 선택해주세요");}
        	else if(classTime=="" || classTime == null){alert("강의시간을 선택해주세요");}
        	else if(classRoom=="" ||classRoom == null){alert("강의실을 입력해주세요");}
        	else{
        		//ds_class에 값 넣기
        		var goal = classForm.ta_goal.text;
        		var method = classForm.mask_course.text +"|"+classForm.mask_test.text+"|"+classForm.mask_argue.text;
        		var evaluation = classForm.mask_attend.text +"|"+classForm.mask_mid.text+"|"+classForm.mask_fin.text+"|"+classForm.mask_task.text+"|"+classForm.mask_otest.text;
        		var references = classForm.edt_mainBook.text +"|" + classForm.edt_subBook.text;
        		reqState = classForm.sta_reqState.text;
        		if(reqState == ""){
        			var nRow = this.ds_class.addRow();
        			var nRow2 = this.ds_classSchedule.addRow();
        			//학번 조합
        			var col = Math.floor(dept/10,0)+"0"; //대분류
        			var pro = proCode.substring(7,9) //교번 뒤에 2자리
        			var ran = Math.floor(Math.random()*100,2);
        			classSeq = col+dept+pro+ran;
        			classForm.edt_classSeq.set_text(classSeq);
        		}else{
        			var Row = 0;
        			var Row2 = 0;
        		}
        		this.ds_class.setColumn(nRow,"classPart",part);
        		this.ds_class.setColumn(nRow,"className",className);
        		this.ds_class.setColumn(nRow,"classSeq",classSeq);
        		this.ds_class.setColumn(nRow,"classPoint",point);
        		this.ds_class.setColumn(nRow,"passFail",passFail);
        		this.ds_class.setColumn(nRow,"proCode",proCode);
        		this.ds_class.setColumn(nRow,"proName",proName);
        		this.ds_class.setColumn(nRow,"dept",dept);
        		this.ds_class.setColumn(nRow,"grade",grade);
        		this.ds_class.setColumn(nRow,"classTime",classTime);
        		this.ds_class.setColumn(nRow,"classRoom",classRoom);
        		this.ds_class.setColumn(nRow,"classGoal",goal);
        		this.ds_class.setColumn(nRow,"limit",limit);
        		this.ds_class.setColumn(nRow,"basketLimit",limit);
        		this.ds_class.setColumn(nRow,"classMethod",method);
        		this.ds_class.setColumn(nRow,"classEvaluation",evaluation);
        		this.ds_class.setColumn(nRow,"classReferences",references);
        		//ds_classSchedule에 값 넣기

        		var week1 =  planForm.edt_subject1.text +"|" + planForm.ta_content1.text + "|" + planForm.edt_notice1.text + "|" + planForm.edt_prepare1.text;
        		var week2 =  planForm.edt_subject2.text +"|" + planForm.ta_content2.text + "|" + planForm.edt_notice2.text + "|" + planForm.edt_prepare2.text;
        		var week3 =  planForm.edt_subject3.text +"|" + planForm.ta_content3.text + "|" + planForm.edt_notice3.text + "|" + planForm.edt_prepare3.text;
        		var week4 =  planForm.edt_subject4.text +"|" + planForm.ta_content4.text + "|" + planForm.edt_notice4.text + "|" + planForm.edt_prepare4.text;
        		var week5 =  planForm.edt_subject5.text +"|" + planForm.ta_content5.text + "|" + planForm.edt_notice5.text + "|" + planForm.edt_prepare5.text;
        		var week6 =  planForm.edt_subject6.text +"|" + planForm.ta_content6.text + "|" + planForm.edt_notice6.text + "|" + planForm.edt_prepare6.text;
        		var week7 =  planForm.edt_subject7.text +"|" + planForm.ta_content7.text + "|" + planForm.edt_notice7.text + "|" + planForm.edt_prepare7.text;
        		var week8 =  planForm.edt_subject8.text +"|" + planForm.ta_content8.text + "|" + planForm.edt_notice8.text + "|" + planForm.edt_prepare8.text;
        		var week9 =  planForm.edt_subject9.text +"|" + planForm.ta_content9.text + "|" + planForm.edt_notice9.text + "|" + planForm.edt_prepare9.text;
        		var week10 =  planForm.edt_subject10.text +"|" + planForm.ta_content10.text + "|" + planForm.edt_notice10.text + "|" + planForm.edt_prepare10.text;
        		var week11 =  planForm.edt_subject11.text +"|" + planForm.ta_content11.text + "|" + planForm.edt_notice11.text + "|" + planForm.edt_prepare11.text;
        		var week12 =  planForm.edt_subject12.text +"|" + planForm.ta_content12.text + "|" + planForm.edt_notice12.text + "|" + planForm.edt_prepare12.text;
        		var week13 =  planForm.edt_subject13.text +"|" + planForm.ta_content13.text + "|" + planForm.edt_notice13.text + "|" + planForm.edt_prepare13.text;
        		var week14 =  planForm.edt_subject14.text +"|" + planForm.ta_content14.text + "|" + planForm.edt_notice14.text + "|" + planForm.edt_prepare14.text;
        		var week15 =  planForm.edt_subject15.text +"|" + planForm.ta_content15.text + "|" + planForm.edt_notice15.text + "|" + planForm.edt_prepare15.text;

        		this.ds_classSchedule.setColumn(nRow2,"classSeq",classSeq);
        		this.ds_classSchedule.setColumn(nRow2,"proCode",proCode);
        		this.ds_classSchedule.setColumn(nRow2,"week1",week1);
        		this.ds_classSchedule.setColumn(nRow2,"week2",week2);
        		this.ds_classSchedule.setColumn(nRow2,"week3",week3);
        		this.ds_classSchedule.setColumn(nRow2,"week4",week4);
        		this.ds_classSchedule.setColumn(nRow2,"week5",week5);
        		this.ds_classSchedule.setColumn(nRow2,"week6",week6);
        		this.ds_classSchedule.setColumn(nRow2,"week7",week7);
        		this.ds_classSchedule.setColumn(nRow2,"week8",week8);
        		this.ds_classSchedule.setColumn(nRow2,"week9",week9);
        		this.ds_classSchedule.setColumn(nRow2,"week10",week10);
        		this.ds_classSchedule.setColumn(nRow2,"week11",week11);
        		this.ds_classSchedule.setColumn(nRow2,"week12",week12);
        		this.ds_classSchedule.setColumn(nRow2,"week13",week13);
        		this.ds_classSchedule.setColumn(nRow2,"week14",week14);
        		this.ds_classSchedule.setColumn(nRow2,"week15",week15);


        		if(reqState == ""){
        			this.transaction(
        				"classSeqCheck"
        				,"/classSeqCheck.nex"
        				,""
        				,"ds_count=out_ds"
        				,"classSeq="+nexacro.wrapQuote(classSeq)
        				,"fn_callback"
        			);
        		}else{
        			this.transaction(
        				"classInfo_Update"
        				,"/classInfoUpd.nex"
        				,"in_ds1=ds_class:U in_ds2=ds_classSchedule:U"
        				,""
        				,""
        				,"fn_callback"
        			);
        			this.close()
        		}

        	}
        };
        this.method_canchange = function(obj,e)
        {
        	var sum2 = classForm.sta_sum;
        	var course = classForm.mask_course;
        	var test = classForm.mask_test;
        	var argue =  classForm.mask_argue;
        	var sum =nexacro.toNumber(course.text) + nexacro.toNumber(test.text) + nexacro.toNumber(argue.text)+"%";
        	sum2.set_text(sum);
        };
        this.evaluation_canchange = function(obj,e){
        	var sum2 = classForm.sta_sum2;
        	var attend = classForm.mask_attend;
        	var mid = classForm.mask_mid;
        	var fin = classForm.mask_fin;
        	var otest = classForm.mask_otest;
        	var task = classForm.mask_task;
        	var sum = nexacro.toNumber(attend.text)+nexacro.toNumber(mid.text)+nexacro.toNumber(fin.text)+nexacro.toNumber(otest.text)+nexacro.toNumber(task.text)+"%";
        	sum2.set_text(sum);
        }


        this.Detail_onload = function(obj,e)
        {
        	this.ds_class.clearData();
        	this.ds_classSchedule.clearData();
        	var classSeq = this.parent.classSeq;
        	var proCode = this.parent.proCode;
        	var view = this.parent.view;
        	var proName = this.objApp.gds_professor.getColumn(0,"name")
        	if(classSeq != ""){
        		//수업 정보 넣기 / 수업 일정 가져오기
        		this.transaction(
        			"classListSeq"
        			,"/classListSeq.nex"
        			,""
        			,"ds_class=out_ds ds_classSchedule=out_ds2"
        			,"classSeq="+nexacro.wrapQuote(classSeq)
        			,"fn_callback"
        		);
        		classForm.edt_classSeq.set_readonly(true);
        		if(view == 'Y'){
        			classForm.btnClassRoom.set_visible(false);
        			classForm.btnSave.set_visible( false );
        		}
        	}else{
        		classForm.sta_proName.set_text(proName);
        		classForm.sta_proCode.set_text(proCode);
        	}
        };
        this.Div00_classPlanTab_classPlan_Button00_onclick = function(obj,e)
        {
        	nLeft = -classForm.edt_classTime.getOffsetWidth();
        	classForm.classTimeList.trackPopupByComponent(obj,nLeft, obj.getOffsetHeight(), 382, 315);
        };

        this.Div00_classPlanTab_classPlan_classTimeList_oncloseup = function(obj,e)
        {
        	var classTime = classForm.edt_classTime;
        	var time = new Array();
        	var week = "";
        	var arr = new Array();
        	var weekTime = new Array();
        	var weekTimes = "";
        	arr[0] = this.ds_classTimeList.extractRows("Mon==1");
        	arr[1] = this.ds_classTimeList.extractRows("Tue==1");
        	arr[2] = this.ds_classTimeList.extractRows("Wed==1");
        	arr[3] = this.ds_classTimeList.extractRows("Thu==1");
        	arr[4] = this.ds_classTimeList.extractRows("Fri==1");
        	arr[5] = this.ds_classTimeList.extractRows("Sat==1");
        	arr[6] = this.ds_classTimeList.extractRows("Sun==1");
        	for(var j=0; j<arr.length; j++){
        		weekTime[j]="";
        		var times="";
        		for(var i =0; i<arr[j].length; i++){
        			weekTime[j] ="";
        			weekTimes = "";
        			time[i] = this.ds_classTimeList.getColumn(arr[j][i],"Time");
        			times += time[i]+" ";
        			week = classForm.classTimeList.form.Grid00.getCellProperty("Head",[j+1],"text");
        			weekTime[j] = week + "(" + times.substring(0,times.length-1) +")";
        		}
        	}
        	weekTimes = weekTime[0]+ weekTime[1] + weekTime[2] + weekTime[3] + weekTime[4] + weekTime[5] + weekTime[6];
        	classTime.set_value(weekTimes);
        };


        this.Div00_classPlanTab_classPlan_btnClose_onclick = function(obj,e)
        {
        	var proCode = classForm.sta_proCode.text;
        	this.close(proCode)
        };

        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "classListSeq"){

        		//수업 정보 가져와서 띄우기
        		classForm.co_part.set_value(this.ds_class.getColumn(0,"classPart"));
        		classForm.edt_className.set_value(this.ds_class.getColumn(0,"className"));
        		classForm.edt_classSeq.set_value(this.ds_class.getColumn(0,"classSeq"));
        		classForm.co_point.set_text(this.ds_class.getColumn(0,"classPoint"));
        		classForm.chk_pf.set_value(this.ds_class.getColumn(0,"passFail"));
        		classForm.sta_proCode.set_text(this.ds_class.getColumn(0,"proCode"));
        		classForm.sta_proName.set_text(this.ds_class.getColumn(0,"proName"));
        		classForm.co_dept.set_value(this.ds_class.getColumn(0,"dept"));
        		classForm.co_grade.set_text(this.ds_class.getColumn(0,"grade"));
        		classForm.edt_classTime.set_value(this.ds_class.getColumn(0,"classTime"));
        		classForm.mask_classRoom.set_value(this.ds_class.getColumn(0,"classRoom"));
        		classForm.ta_goal.set_value(this.ds_class.getColumn(0,"classGoal"));
        		var limit = this.ds_class.getColumn(0,"limit").split("/");
        		classForm.mask_limit.set_value(limit[1]);
        		var classMethod = this.ds_class.getColumn(0,"classMethod").split("|");
        		classForm.mask_course.set_value(classMethod[0]);
        		classForm.mask_test.set_value(classMethod[1]);
        		classForm.mask_argue.set_value(classMethod[2]);
        		classForm.sta_sum.set_text(nexacro.toNumber(classMethod[0])+nexacro.toNumber(classMethod[1])+nexacro.toNumber(classMethod[2])+"%");
        		var classEv = this.ds_class.getColumn(0,"classEvaluation").split("|");
        		classForm.mask_attend.set_value(classEv[0]);
        		classForm.mask_mid.set_value(classEv[1]);
        		classForm.mask_fin.set_value(classEv[2]);
        		classForm.mask_task.set_value(classEv[3]);
        		classForm.mask_otest.set_value(classEv[4]);
        		classForm.sta_sum2.set_text(nexacro.toNumber(classEv[0])+nexacro.toNumber(classEv[1])+nexacro.toNumber(classEv[2])+nexacro.toNumber(classEv[3])+nexacro.toNumber(classEv[4])+"%");
        		var classRefer = this.ds_class.getColumn(0,"classReferences").split("|");
        		classForm.edt_mainBook.set_value(classRefer[0]);
        		classForm.edt_subBook.set_value(classRefer[1]);
        		classForm.sta_reqState.set_text(this.ds_class.getColumn(0,"reqState"));
        		//수업 일정 가져와서 띄우기
        		trace("week1 : " + this.ds_classSchedule.getColumn(0,"week1"));
        		var week1 = this.ds_classSchedule.getColumn(0,"week1").split("|");
        		planForm.edt_subject1.set_value(week1[0]);planForm.ta_content1.set_value(week1[1]);planForm.edt_notice1.set_value(week1[2]);planForm.edt_prepare1.set_value(week1[3]);
        		var week2 = this.ds_classSchedule.getColumn(0,"week2").split("|");
        		planForm.edt_subject2.set_value(week2[0]);planForm.ta_content2.set_value(week2[1]);planForm.edt_notice2.set_value(week2[2]);planForm.edt_prepare2.set_value(week2[3]);
        		var week3 = this.ds_classSchedule.getColumn(0,"week3").split("|");
        		planForm.edt_subject3.set_value(week3[0]);planForm.ta_content3.set_value(week3[1]);planForm.edt_notice3.set_value(week3[2]);planForm.edt_prepare3.set_value(week3[3]);
        		var week4 = this.ds_classSchedule.getColumn(0,"week4").split("|");
        		planForm.edt_subject4.set_value(week4[0]);planForm.ta_content4.set_value(week4[1]);planForm.edt_notice4.set_value(week4[2]);planForm.edt_prepare4.set_value(week4[3]);
        		var week5 = this.ds_classSchedule.getColumn(0,"week5").split("|");
        		planForm.edt_subject5.set_value(week5[0]);planForm.ta_content5.set_value(week5[1]);planForm.edt_notice5.set_value(week5[2]);planForm.edt_prepare5.set_value(week5[3]);
        		var week6 = this.ds_classSchedule.getColumn(0,"week6").split("|");
        		planForm.edt_subject6.set_value(week6[0]);planForm.ta_content6.set_value(week6[1]);planForm.edt_notice6.set_value(week6[2]);planForm.edt_prepare6.set_value(week6[3]);
        		var week7 = this.ds_classSchedule.getColumn(0,"week7").split("|");
        		planForm.edt_subject7.set_value(week7[0]);planForm.ta_content7.set_value(week7[1]);planForm.edt_notice7.set_value(week7[2]);planForm.edt_prepare7.set_value(week7[3]);
        		var week8 = this.ds_classSchedule.getColumn(0,"week8").split("|");
        		planForm.edt_subject8.set_value(week8[0]);planForm.ta_content8.set_value(week8[1]);planForm.edt_notice8.set_value(week8[2]);planForm.edt_prepare8.set_value(week8[3]);
        		var week9 = this.ds_classSchedule.getColumn(0,"week9").split("|");
        		planForm.edt_subject9.set_value(week9[0]);planForm.ta_content9.set_value(week9[1]);planForm.edt_notice9.set_value(week9[2]);planForm.edt_prepare9.set_value(week9[3]);
        		var week10 = this.ds_classSchedule.getColumn(0,"week10").split("|");
        		planForm.edt_subject10.set_value(week10[0]);planForm.ta_content10.set_value(week10[1]);planForm.edt_notice10.set_value(week10[2]);planForm.edt_prepare10.set_value(week10[3]);
        		var week11 = this.ds_classSchedule.getColumn(0,"week11").split("|");
        		planForm.edt_subject11.set_value(week11[0]);planForm.ta_content11.set_value(week11[1]);planForm.edt_notice11.set_value(week11[2]);planForm.edt_prepare11.set_value(week11[3]);
        		var week12 = this.ds_classSchedule.getColumn(0,"week12").split("|");
        		planForm.edt_subject12.set_value(week12[0]);planForm.ta_content12.set_value(week12[1]);planForm.edt_notice12.set_value(week12[2]);planForm.edt_prepare12.set_value(week12[3]);
        		var week13 = this.ds_classSchedule.getColumn(0,"week13").split("|");
        		planForm.edt_subject13.set_value(week13[0]);planForm.ta_content13.set_value(week13[1]);planForm.edt_notice13.set_value(week13[2]);planForm.edt_prepare13.set_value(week13[3]);
        		var week14 = this.ds_classSchedule.getColumn(0,"week14").split("|");
        		planForm.edt_subject14.set_value(week14[0]);planForm.ta_content14.set_value(week14[1]);planForm.edt_notice14.set_value(week14[2]);planForm.edt_prepare14.set_value(week14[3]);
        		var week15 = this.ds_classSchedule.getColumn(0,"week15").split("|");
        		planForm.edt_subject15.set_value(week15[0]);planForm.ta_content15.set_value(week15[1]);planForm.edt_notice15.set_value(week15[2]);planForm.edt_prepare15.set_value(week15[3]);
        	}else if(sId == "classSeqCheck"){
        		if(this.ds_count.getRowCount() == 0){
        			//ds_class db에 저장
        			this.transaction(
        				"classInfo_Save"
        				,"/classInfo.nex"
        				,"in_ds1=ds_class:U in_ds2=ds_classSchedule:U"
        				,""
        				,""
        				,"fn_callback"
        			);
        		}
        		this.close();
        	}else{
        		var classSeq = classForm.edt_classSeq.text;
        		var nRow = this.ds_class.findRow("classSeq",classSeq);
        		var nRow2 = this.ds_classSchedule.findRow("classSeq",classSeq);
        		var proCode = classForm.sta_proCode.text;
        		var dept = classForm.co_dept.value;
        		col = Math.floor(dept/10,0)+"0"; //대분류
        		pro = proCode.substring(7,9) //교번 뒤에 2자리
        		var ran = Math.floor(Math.random()*100,2);
        		classSeq = col+dept+pro+ran;
        		classForm.edt_classSeq.set_text(classSeq);
        		this.ds_class.setColumn(nRow,"classSeq",classSeq);
        		this.ds_class.setColumn(nRow2,"classSeq",classSeq);
        		this.transaction(
        			"classSeqCheck"
        			,"/classSeqCheck.nex"
        			,""
        			,"ds_count=out_ds"
        			,"classSeq="+nexacro.wrapQuote(classSeq)
        			,"fn_callback"
        		);
        	}
        }



        this.Div00_classPlanTab_classPlan_btnClassRoom_onclick = function(obj,e)
        {
        		let x = this.width/2;
        		let y = this.height/2-225;
        		let objCF = new ChildFrame();
        		objCF.init("popClassRoom",x,y,800,450,0,0,"admWork::classRoomList.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{},this,"fn_pop_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Detail_onload,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_fin.addEventHandler("canchange",this.evaluation_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_task.addEventHandler("canchange",this.evaluation_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_otest.addEventHandler("canchange",this.evaluation_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_argue.addEventHandler("canchange",this.method_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_test.addEventHandler("canchange",this.method_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_00.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_00_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_01.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_04.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_03.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_02_00.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_02_00_00.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_02_00_00_00.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.ta_goal.addEventHandler("onchanged",this.Div00_classPlanTab_classPlan_ta_goal_onchanged,this);
            this.Div00.form.classPlanTab.classPlan.form.btnSave.addEventHandler("onclick",this.classPlanTab_classPlan_btnSave_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_02_00_00_00_00.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_course.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_test.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_argue.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sum.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_attend.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_mid.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_fin.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_task.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_otest.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sum2.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.sta_limit.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.Static00_02_02.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.dropBtn.addEventHandler("onclick",this.Div00_classPlanTab_classPlan_Button00_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.classTimeList.addEventHandler("oncloseup",this.Div00_classPlanTab_classPlan_classTimeList_oncloseup,this);
            this.Div00.form.classPlanTab.classPlan.form.classTimeList.form.Grid00.addEventHandler("onmouseleave",this.Div00_classPlanTab_classPlan_classTimeList_Grid00_onmouseleave,this);
            this.Div00.form.classPlanTab.classPlan.form.btnClose.addEventHandler("onclick",this.Div00_classPlanTab_classPlan_btnClose_onclick,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_course.addEventHandler("canchange",this.method_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_course.addEventHandler("onchanged",this.Div00_classPlanTab_classPlan_mask_course_onchanged,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_attend.addEventHandler("canchange",this.evaluation_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.mask_mid.addEventHandler("canchange",this.evaluation_canchange,this);
            this.Div00.form.classPlanTab.classPlan.form.co_dept.addEventHandler("ondropdown",this.Div00_classPlanTab_classPlan_co_dept_ondropdown,this);
            this.Div00.form.classPlanTab.classPlan.form.btnClassRoom.addEventHandler("onclick",this.Div00_classPlanTab_classPlan_btnClassRoom_onclick,this);
        };

        this.loadIncludeScript("detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

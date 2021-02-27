(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("readGrade");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"attend\" type=\"INT\" size=\"256\"/><Column id=\"mid\" type=\"INT\" size=\"256\"/><Column id=\"otest\" type=\"INT\" size=\"256\"/><Column id=\"task\" type=\"INT\" size=\"256\"/><Column id=\"fin\" type=\"INT\" size=\"256\"/><Column id=\"total\" type=\"INT\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("reset_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"term\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"rating\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("pointCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A+</Col><Col id=\"name\">4.5</Col></Row><Row><Col id=\"code\">A</Col><Col id=\"name\">4.0</Col></Row><Row><Col id=\"code\">B+</Col><Col id=\"name\">3.5</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">3.0</Col></Row><Row><Col id=\"code\">C+</Col><Col id=\"name\">2.5</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">2.0</Col></Row><Row><Col id=\"code\">D+</Col><Col id=\"name\">1.5</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">1.0</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"name\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("termPoint_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"turm\" type=\"STRING\" size=\"256\"/><Column id=\"reqPoint\" type=\"STRING\" size=\"256\"/><Column id=\"getPoint\" type=\"STRING\" size=\"256\"/><Column id=\"avg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gradeCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">전체보기</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">1학년</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">2학년</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">3학년</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">4학년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("partCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">전체보기</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">전공필수</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">전공선택</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">교양필수</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">교양선택</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">지정교양</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">계열기초</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("div_line","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","14","71",null,null,"10","29",null,null,null,null,this.div_line.form);
            obj.set_taborder("0");
            obj.set_binddataset("reset_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"학년\"/><Cell col=\"1\" text=\"학기\"/><Cell col=\"2\" text=\"이수구분\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"평점\"/></Band><Band id=\"body\"><Cell text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:term\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:classPart\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:className\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:rating\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:point\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"총 이수 학점\"/><Cell col=\"3\" text=\"expr:dataset.getSum('parseInt(classPoint.replace(&quot;학점&quot;,&quot;&quot;))')+&quot;학점&quot;\"/><Cell col=\"4\" text=\"총 평점\"/><Cell col=\"5\" text=\"expr:dataset.getSum('point')\"/><Cell col=\"6\" text=\"평균 평점\"/><Cell col=\"7\" text=\"expr:nexacro.round(dataset.getSum('point')/dataset.getRowCount(),2)\"/></Band></Format></Formats>");
            this.div_line.addChild(obj.name, obj);

            obj = new Static("Static00","14","32","60","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("1");
            obj.set_text("학년 구분 :");
            this.div_line.addChild(obj.name, obj);

            obj = new Combo("cmb_grade","80","32","140","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("2");
            obj.set_innerdataset("gradeCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.div_line.addChild(obj.name, obj);

            obj = new Static("Static00_00","309","32","60","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("3");
            obj.set_text("이수 구분 :");
            this.div_line.addChild(obj.name, obj);

            obj = new Combo("cmb_part","379","32","140","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("4");
            obj.set_innerdataset("partCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.div_line.addChild(obj.name, obj);

            obj = new Button("btn_grade","227","32","60","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.div_line.addChild(obj.name, obj);

            obj = new Button("btn_part","529","32","60","25",null,null,null,null,null,null,this.div_line.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.div_line.addChild(obj.name, obj);

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

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("readGrade.xfdl", function() {
        this.sCode="";
        this.readGrade_onload = function(obj,e)
        {
        	this.sCode = "12345"; // 학번 로그인 후 받아올 예정

        	var objDate = new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        //내가 듣는 수업 목록
        	this.transaction(
        		"myClassList"
        		,"/myClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"sCode="+this.sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_myClass"
        	);
        };


        this.fn_callback_myClass = function()
        {
        //내가 듣는 수업 점수
        		this.transaction(
        		"stdGradeOneList"
        		,"/stdGradeOneList.nex"
        		,""
        		,"ds_grade=out_ds"
        		,"sCode="+this.sCode
        		,"fn_callback_grade"
        	);
        }

        this.fn_callback_grade = function()
        {

        	for (var i=0; i<this.ds_class.getRowCount();i++)
        	{
        		this.reset_ds.addRow();
        		//학년 받아오기
        		var grade = this.ds_class.getColumn(i,"grade");
        		this.reset_ds.setColumn(i,"grade",grade);
        		//학기 받아오기
        		var regDate = this.ds_class.getColumn(i,"reg_date");
        		var classMonth = nexacro.toNumber(regDate.substr(5,2)); // String값이라서 숫자화 하기
        			if(classMonth< 8)
        			{
        				this.reset_ds.setColumn(i,"term","1학기");
        			}
        			else
        			{
        				this.reset_ds.setColumn(i,"term","2학기");
        			}

        		//이수구분 받아오기
        		var classPart = this.ds_class.getColumn(i,"classPart");
        		this.reset_ds.setColumn(i,"classPart",classPart);
        		//과목코드 받아오기
        		var classSeq = this.ds_class.getColumn(i,"classSeq");
        		this.reset_ds.setColumn(i,"classSeq",classSeq);
        		//과목명 받아오기
        		var className = this.ds_class.getColumn(i,"className");
        		this.reset_ds.setColumn(i,"className",className);
        		//학점 받아오기
        		var classPoint = this.ds_class.getColumn(i,"classPoint");
        		this.reset_ds.setColumn(i,"classPoint",classPoint);
        	}

        	this.reset_ds.set_keystring( "S-:grade" ); //1학년부터 4학년  순 차례대로 정렬


        	for(var i=0;i<this.ds_grade.getRowCount();i++)
        	{
        		//과목 코드 받기
        		var classCode = this.ds_grade.getColumn(i,"classCode");
        		//과목코드 일치하는 n번째 row찾기
        		var nRow = this.reset_ds.findRow("classSeq",classCode);
        		//과목코드 등급 받아오기
        		var grade = this.ds_grade.getColumn(i,"grade");
        		//등급 넣기
        		if(grade =="" || grade == null)
        		{
        			this.reset_ds.setColumn(nRow,"rating","-");
        		}
        		else
        		{
        			this.reset_ds.setColumn(nRow,"rating",grade);
        		}
        		//평점 넣기
        		if(grade=="A+")
        		{
        			this.reset_ds.setColumn(nRow,"point",4.5);
        		}
        		else if (grade=="A")
        		{
        			this.reset_ds.setColumn(nRow,"point",4.0);
        		}
        		else if (grade=="B+")
        		{
        			this.reset_ds.setColumn(nRow,"point",3.5);
        		}
        		else if (grade=="B")
        		{
        			this.reset_ds.setColumn(nRow,"point",3.0);
        		}
        		else if (grade=="C+")
        		{
        			this.reset_ds.setColumn(nRow,"point",2.5);
        		}
        		else if (grade=="C")
        		{
        			this.reset_ds.setColumn(nRow,"point",2.0);
        		}
        		else if (grade=="D+")
        		{
        			this.reset_ds.setColumn(nRow,"point",1.5);
        		}
        		else if (grade=="D")
        		{
        			this.reset_ds.setColumn(nRow,"point",1.0);
        		}
        		else if (grade=="" || grade==null)
        		{
        			this.reset_ds.setColumn(nRow,"point",0);
        		} else
        		{
        			this.reset_ds.setColumn(nRow,"point",0);
        		}
        	}


        }


        //학년 구분 버튼
        this.Div00_btn_grade_onclick = function(obj,e)
        {

        	if(this.Div00.form.cmb_grade.value == '01')
        	{
        		this.reset_ds.filter("grade == '1학년'");
        	}
        	else if (this.Div00.form.cmb_grade.value == '02')
        	{
        		this.reset_ds.filter("grade == '2학년'");
        	}
        	else if (this.Div00.form.cmb_grade.value == '03')
        	{
        		this.reset_ds.filter("grade == '3학년'");
        	}
        	else if (this.Div00.form.cmb_grade.value == '04')
        	{
        		this.reset_ds.filter("grade == '4학년'");
        	}
        	else
        	{
        		this.reset_ds.filter("");
        	}
        };

        //이수구분 버튼
        this.Div00_btn_part_onclick = function(obj,e)
        {
        		if(this.Div00.form.cmb_part.value == '01')
        	{
        		this.reset_ds.filter("classPart== '전공필수' ");
        	}
        	else if (this.Div00.form.cmb_part.value == '02')
        	{
        		this.reset_ds.filter("classPart== '전공선택' ");
        	}
        	else if (this.Div00.form.cmb_part.value == '03')
        	{
        		this.reset_ds.filter("classPart== '교양필수' ");
        	}
        	else if (this.Div00.form.cmb_part.value == '04')
        	{
        		this.reset_ds.filter("classPart=='교양선택'");
        	}
        	else if (this.Div00.form.cmb_part.value == '05')
        	{
        		this.reset_ds.filter("classPart=='지정교양'");
        	}
        	else if (this.Div00.form.cmb_part.value == '06')
        	{
        		this.reset_ds.filter("classPart=='계열기초'");
        	}
        	else
        	{
        		this.reset_ds.filter("classPart==''");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.readGrade_onload,this);
            this.div_line.form.cmb_grade.addEventHandler("onitemchanged",this.Div00_cmb_grade_onitemchanged,this);
            this.div_line.form.cmb_part.addEventHandler("onitemchanged",this.Div00_cmb_part_onitemchanged,this);
            this.div_line.form.btn_grade.addEventHandler("onclick",this.Div00_btn_grade_onclick,this);
            this.div_line.form.btn_part.addEventHandler("onclick",this.Div00_btn_part_onclick,this);
        };

        this.loadIncludeScript("readGrade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

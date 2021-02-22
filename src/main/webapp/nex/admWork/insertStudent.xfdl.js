(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertStudent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCode_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">11</Col><Col id=\"name\">국어국문학과</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">영어영문학과</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">국사학과</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">철학과</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">사회복지학과</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"name\">경제학부</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">사회학과</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"name\">심리학과</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"name\">통계학과</Col></Row><Row><Col id=\"code\">32</Col><Col id=\"name\">화학부</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"name\">생명과학부</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"name\">간호학부</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"name\">전기공학부</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"name\">컴퓨터공학부</Col></Row><Row><Col id=\"code\">53</Col><Col id=\"name\">화학생물공학부</Col></Row><Row><Col id=\"code\">54</Col><Col id=\"name\">건축학과</Col></Row><Row><Col id=\"code\">55</Col><Col id=\"name\">산업공학과</Col></Row><Row><Col id=\"code\">61</Col><Col id=\"name\">교육학과</Col></Row><Row><Col id=\"code\">62</Col><Col id=\"name\">국어교육과</Col></Row><Row><Col id=\"code\">63</Col><Col id=\"name\">영어교육과</Col></Row><Row><Col id=\"code\">64</Col><Col id=\"name\">수학교육과</Col></Row><Row><Col id=\"code\">65</Col><Col id=\"name\">체육교육과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("colCode_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">10</Col><Col id=\"name\">인문대학</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">사회과학대학</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"name\">자연과학대학</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"name\">간호대학</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"name\">공과대학</Col></Row><Row><Col id=\"code\">60</Col><Col id=\"name\">사범대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_s_seq","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학번");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","55","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","90","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주민번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","125","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","160","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","10","195","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","10","230","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("장학금");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","10","265","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("휴학");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","10","300","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성적");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","10","335","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("초기비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","10","370","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_scholarship","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_grade","85","300","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","85","335","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","95","515","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","210","515","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_00","10","405","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("학과분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_01","10","440","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colCode","85","405","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("colCode_Copy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Combo("com_deptCode","85","440","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("deptCode_copy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Combo("com_rest","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var com_rest_innerdataset = new nexacro.NormalDataset("com_rest_innerdataset", obj);
            com_rest_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">휴학</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">재학</Col></Row></Rows>");
            obj.set_innerdataset(com_rest_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Combo("com_gender","85","370","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var com_gender_innerdataset = new nexacro.NormalDataset("com_gender_innerdataset", obj);
            com_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(com_gender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_01_00","10","475","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학년");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colGrade","85","475","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var com_colGrade_innerdataset = new nexacro.NormalDataset("com_colGrade_innerdataset", obj);
            com_colGrade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학년</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3학년</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4학년</Col></Row></Rows>");
            obj.set_innerdataset(com_colGrade_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mas_secNumber","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_format("###### - #{######}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_colCode","value","ds_students_copy","colcode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_deptCode","value","ds_students_copy","deptcode");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertStudent.xfdl", function() {
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
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);

        }



        this.btn_insert_onclick = function(obj,e)
        {
        	var s_seq = this.edt_s_seq.value;
        	var name = this.edt_name.value;
        	var secNumber = this.mas_secNumber.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var scholarship = this.edt_scholarship.value;
        	var rest = this.com_rest.value;
        	var grade = this.edt_grade.value;
        	var pw = this.edt_pw.value;
        	var gender = this.com_gender.value;
        	var colCode = this.com_colCode.value;
        	var deptCode = this.com_deptCode.value;
        	var colGrade = this.com_colGrade.text;

        	if(s_seq == null || s_seq == "undefined"){
        		this.alert("학번 입력해주세요");
        		return;
        	}else if(name == null || name == "undefined"){
        		this.alert("이름 입력해주세요");
        		return;
        	}else if(secNumber == null || secNumber == "undefined"){
        		this.alert("주민번호 입력해주세요.");
        		return;
        	}else if(email == null || email == "undefined"){
        		this.alert("이메일 입력해주세요");
        		return;
        	}else if(contact == null || contact == "undefined"){
        		this.alert("전화번호 입력해주세요");
        		return;
        	}else if(address == null || address == "undefined"){
        		this.alert("주소 입력해주세요");
        		return;
        	}else if(scholarship == null || scholarship == "undefined"){
        		this.alert("장학금 입력해주세요");
        		return;
        	}else if(rest == null || rest == "undefined"){
        		this.alert("휴학여부 입력해주세요");
        		return;
        	}else if(grade == null || grade == "undefined"){
        		this.alert("성적 입력해주세요");
        		return;
        	}else if(pw == null || pw == "undefined"){
        		this.alert("비밀번호 입력해주세요");
        		return;
        	}else if(gender == null || gender == "undefined"){
        		this.alert("성별 입력해주세요");
        		return;
        	}else if(colCode == null || colCode == "undefined"){
        		this.alert("학과분류 입력해주세요");
        		return;
        	}else if(deptCode == null || deptCode == "undefined"){
        		this.alert("학과 입력해주세요");
        		return;
        	}else if(colGrade == null || colGrade == "undefined"){
        		this.alert("학년 입력해주세요");
        		return;
        	}

        	var addRow = this.ds_students_copy.addRow();
        	this.ds_students_copy.setColumn(addRow,"s_seq",s_seq);
        	this.ds_students_copy.setColumn(addRow,"name",name);
        	this.ds_students_copy.setColumn(addRow,"secNumber",secNumber);
        	this.ds_students_copy.setColumn(addRow,"email",email);
        	this.ds_students_copy.setColumn(addRow,"contact",contact);
        	this.ds_students_copy.setColumn(addRow,"address",address);
        	this.ds_students_copy.setColumn(addRow,"scholarship",scholarship);
        	this.ds_students_copy.setColumn(addRow,"rest",rest);
        	this.ds_students_copy.setColumn(addRow,"grade",grade);
        	this.ds_students_copy.setColumn(addRow,"pw",pw);
        	this.ds_students_copy.setColumn(addRow,"gender",gender);
        	this.ds_students_copy.setColumn(addRow,"deptCode",deptCode);
        	this.ds_students_copy.setColumn(addRow,"colCode",colCode);
        	this.ds_students_copy.setColumn(addRow,"colGrade",colGrade);

        	this.transaction(

        				"ds_insert" //1. strSvcID
        				,"/insertStudent.nex" //2. strURL
        				,"in_ds=ds_students_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			this.close("");

        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_09.addEventHandler("onclick",this.Static00_09_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.com_gender.addEventHandler("onitemchanged",this.com_gender_onitemchanged,this);
        };

        this.loadIncludeScript("insertStudent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
